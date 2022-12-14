<template>
	<div class="blinking" ref="img">
		<slot />
		<canvas ref="canvas" id="myCanvas"></canvas>
	</div>
</template>
<script>
// var BlinkingStripe = function (options) {

// 	var that = {},
// 		$container = options.$container,
// 		$canvas = $container.querySelector('canvas'),
// 		ctx = null,
// 		$logoImg = $container.querySelector('img'),
// 		canvasWidth = $container.getBoundingClientRect().width,
// 		canvasHeight = image.getBoundingClientRect().height,
// 		canvasMax = Math.max(canvasWidth, canvasHeight),
// 		logoWidth = $logoImg.getBoundingClientRect().width,
// 		logoHeight = $logoImg.getBoundingClientRect().height,
// 		stripe = null,
// 		toRad = Math.PI / 180,
// 		angle = -45 * toRad,
// 		dx = -canvasMax,
// 		delay = 30,
// 		minDelay = options.minDelay || 3000,
// 		maxDelay = options.maxDelay || 3000,
// 		delayRand = function () {
// 			return (Math.random() * maxDelay + minDelay) >> 0;
// 		},
// 		draw = function () {
// 			dx += 7;
// 			delay = 30;
// 			if (dx > canvasMax) {
// 				dx = -canvasMax;
// 				delay = delayRand();
// 			}
// 			ctx.clearRect(0, 0, logoWidth, canvasHeight);
// 			ctx.save();
// 			ctx.save();
// 			ctx.rotate(angle);
// 			ctx.translate(dx, 0);
// 			ctx.fillStyle = stripe;
// 			ctx.fillRect(0, 0, canvasMax, canvasMax);
// 			ctx.restore();
// 			ctx.globalCompositeOperation = 'destination-atop';
// 			console.log(canvasHeight);
// 			ctx.drawImage(image, 0, 0, canvasWidth, logoHeight);
// 			ctx.restore();
// 			setTimeout(draw, delay);
// 		},
// 		awaitingLoading = function () {
// 			logoWidth = $logoImg.getBoundingClientRect().width;
// 			logoHeight = $logoImg.getBoundingClientRect().height;
// 			if (logoWidth && logoHeight) {
// 				draw();
// 			} else {
// 				setTimeout(awaitingLoading, 100);
// 			}
// 		};

// 	that.run = function () {
// 		ctx = $canvas.getContext('2d');
// 		$canvas.height = 84;
// 		$canvas.width = 305;
// 		stripe = ctx.createLinearGradient(0, 0, 60, 0);
// 		stripe.addColorStop(0, 'rgba(255,255,255,0)');
// 		stripe.addColorStop(0.5, 'rgba(255,255,255,1)');
// 		stripe.addColorStop(1, 'rgba(255,255,255,0)');
// 		awaitingLoading();
// 	};
// 	return that;
// };

export default {
	data() {
		return {
			canvas: null,
			delay: 30,
			that: {},
			stripe: null,
			toRad: Math.PI / 180,
			dx: -this.canvasMax,
			x: 0,
			y: 0,
		};
	},
	computed: {
		canvasWidth() {
			return this.$refs.img.getBoundingClientRect().width;
		},
		canvasHeight() {
			this.$refs.img.getBoundingClientRect().height;
		},
		angle() {
			return -45 * this.toRad;
		},
		canvasMax() {
			return Math.max(this.canvasWidth, this.canvasHeight);
		},
		delayRand() {
			return (Math.random() * maxDelay + minDelay) >> 0;
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
	},
	methods: {
		showCoordinates(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		draw(e) {
			var canvas = this.$refs.canvas;
			var ctx = canvas.getContext('2d');
			var image = this.$refs.img.querySelector('img');

			this.stripe = ctx.createLinearGradient(0, 0, 50, 0);
			this.stripe.addColorStop(0, 'rgba(255,255,255,0)');
			this.stripe.addColorStop(0.5, 'rgba(255,255,255,1)');
			this.stripe.addColorStop(1, 'rgba(255,255,255,0)');

			this.dx += 7;
			this.delay = 30;
			if (this.dx > this.canvasMax) {
				this.dx = -this.canvasMax;
				this.delay = this.delayRand;
			}

			image.onload = function () {
				canvas.width = image.getBoundingClientRect().width;
				canvas.height = image.getBoundingClientRect().height;
				ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
				ctx.save();
				ctx.save();
				ctx.rotate(this.angle);
				ctx.translate(this.dx, 0);
				ctx.fillStyle = this.tripe;
				ctx.fillRect(0, 0, this.canvasMax, this.canvasMax);
				ctx.restore();
				ctx.globalCompositeOperation = 'destination-atop';
				ctx.drawImage(image, 0, 0);
				ctx.restore();
			};

			setTimeout(this.draw, this.delay);
		},
	},
	mounted() {
		// var c = document.getElementById('myCanvas');
		// console.log(c);

		// this.canvas = c.getContext('2d');

		this.run();
	},
};
</script>
<style lang="scss" scoped>
.blinking {
	display: inline-block;
}
.blinking img {
	visibility: hidden;
	position: absolute;
}
</style>
