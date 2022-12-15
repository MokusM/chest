<template>
  <div class="blinking" ref="container">
    <img :src="require(`@img/${name}.png`)" ref="img" alt="" @load="onImgLoad" />
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvas: null,
      delay: 3000,
      stripe: null,
      toRad: Math.PI / 180,
      x: 0,
      y: 0,
      dx: -500,
      canvasWidth: 0,
      canvasHeight: 0,
    };
  },
  computed: {
    angle() {
      return -this.deg * this.toRad;
    },
    canvasMax() {
      return Math.max(this.canvasWidth, this.canvasHeight);
    },
  },
  props: {
    minDelay: {
      type: Number,
      default: 3000,
    },
    maxDelay: {
      type: Number,
      default: 3000,
    },
    name: {
      type: String,
      default: "logo",
    },
    deg: {
      type: Number,
      default: 45,
    },
    radial: {
      type: Number,
      default: 50,
    },
  },
  methods: {
    run(el) {
      this.canvas = el.getContext("2d");
      this.stripe = this.canvas.createLinearGradient(0, 0, this.radial, 0);
      this.stripe.addColorStop(0, "rgba(255,255,255,0)");
      this.stripe.addColorStop(0.5, "rgba(255,255,255,1)");
      this.stripe.addColorStop(1, "rgba(255,255,255,0)");
      this.awaitingLoading();
    },

    awaitingLoading() {
      var image = this.$refs.img;
      if (image) {
        this.draw();
      } else {
        setTimeout(this.awaitingLoading, 100);
      }
    },

    onImgLoad() {
      this.dx = -this.canvasMax;
      this.canvasWidth = this.$refs.img.getBoundingClientRect().width;
      this.canvasHeight = this.$refs.img.getBoundingClientRect().height;
      console.log(this.$refs.img.clientWidth);
    },

    draw() {
      this.dx += 7;
      this.delay = 30;

      if (this.dx > this.canvasMax) {
        this.dx = -this.canvasMax;
        this.delay = (Math.random() * this.maxDelay + this.minDelay) >> 0;
      }

      this.$refs.canvas.width = this.canvasWidth;
      this.$refs.canvas.height = this.canvasHeight;

      this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.canvas.save();
      this.canvas.save();
      this.canvas.rotate(this.angle);
      this.canvas.translate(this.dx, 0);
      this.canvas.fillStyle = this.stripe;
      this.canvas.fillRect(0, 0, this.canvasMax, this.canvasMax);
      this.canvas.restore();
      this.canvas.globalCompositeOperation = "destination-atop";
      this.canvas.drawImage(this.$refs.img, 0, 0);
      this.canvas.restore();

      setTimeout(() => {
        this.draw();
      }, this.delay);
    },
  },
  mounted() {
    this.run(this.$refs.canvas);
  },
};
</script>
<style lang="scss" scoped>
.blinking {
  display: inline-block;
}
.blinking img {
  opacity: 0;
  position: absolute;
}
</style>
