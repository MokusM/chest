<template>
    <canvas id="canvas" class="canvas"></canvas>
</template>
<script>
document.addEventListener('DOMContentLoaded', function (event) {
    let canvas;
    let stage;
    let width = 650;
    let height = 400;
    let particles = [];
    let max = 110;
    let mouseX = 0;
    let mouseY = 0;

    let speed = 6;
    let size = 60;

    function Particle(x, y, xs, ys) {
        this.x = x;
        this.y = y;
        this.xs = xs;
        this.ys = ys;
        this.life = 0;
    }

    function resizeCanvas() {
        setTimeout(function () {
            width = 415;
            height = 529;
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            mouseX = canvas.width / 2;
            mouseY = canvas.height * 0.8;
            stage.globalCompositeOperation = 'lighter';
        }, 0);
    }

    function init() {
        canvas = document.getElementById('canvas');

        resizeCanvas();

        if (canvas.getContext) {
            stage = canvas.getContext('2d');

            stage.globalCompositeOperation = 'xor';

            window.addEventListener('resize', function () {
                resizeCanvas();
                stage.globalCompositeOperation = 'lighter';
                mouseX = canvas.width / 2;
                mouseY = canvas.height * 0.8;
            });

            let timer = setInterval(update, 40);
        } else {
            alert('Canvas not supported.');
        }
    }

    function update() {
        for ( let i = 0; i < 4; i++ ) {
            let p = new Particle(mouseX, mouseY, (Math.random() * 2 * speed - speed) / 2, 0 - Math.random() * 2 * speed);
            particles.push(p);
        }

        stage.clearRect(0, 0, width, height);

        for ( let i = 0; i < particles.length; i++ ) {
            stage.fillStyle = 'rgba(' + (260 - particles[i].life * 2) + ',' + (particles[i].life * 2 + 50) + ',' + particles[i].life * 2 + ',' + ((max - particles[i].life) / max) * 0.2 + ')';

            stage.beginPath();
            stage.arc(particles[i].x, particles[i].y, ((max - particles[i].life) / max) * (size / 2) + size / 2, 0, 2 * Math.PI);
            stage.fill();

            particles[i].x += particles[i].xs;
            particles[i].y += particles[i].ys;

            particles[i].life++;
            if (particles[i].life >= max) {
                particles.splice(i, 1);
                i--;
            }
        }
    }

    window.onload = init;
});
</script>

<style lang="scss" scoped>
.canvas {
    position: absolute;
    left: -32px;
    top: -48px;
    z-index: 10;
    opacity: 0.79;
}
</style>
