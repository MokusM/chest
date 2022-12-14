var BlinkingStripe = function (options) {
	'use strict';

	var that = {},
		$container = options.$container,
		isCanvasSupported = !!window.HTMLCanvasElement,
		$canvas = null,
		ctx = null,
		canvasWidth = $container.width(),
		canvasHeight = $container.height(),
		canvasMax = Math.max(canvasWidth, canvasHeight),
		$logoImg = $container.find('img'),
		logoWidth = $logoImg.width(),
		logoHeight = $logoImg.height(),
		stripe = null,
		toRad = Math.PI / 180,
		angle = -45 * toRad,
		dx = -canvasMax,
		delay = 30,
		minDelay = options.minDelay || 3000,
		maxDelay = options.maxDelay || 3000,
		delayRand = function () {
			return (Math.random() * maxDelay + minDelay) >> 0;
		},
		draw = function () {
			dx += 7;
			delay = 30;
			if (dx > canvasMax) {
				dx = -canvasMax;
				delay = delayRand();
			}
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);
			ctx.save();
			ctx.save();
			ctx.rotate(angle);
			ctx.translate(dx, 0);
			ctx.fillStyle = stripe;
			ctx.fillRect(0, 0, canvasMax, canvasMax);
			ctx.restore();
			ctx.globalCompositeOperation = 'destination-atop';
			ctx.drawImage($logoImg[0], (canvasWidth - logoWidth) * 0.5, (canvasHeight - logoHeight) * 0.5);
			ctx.restore();
			setTimeout(draw, delay);
		},
		awaitingLoading = function () {
			logoWidth = $logoImg.width();
			logoHeight = $logoImg.height();
			if (logoWidth && logoHeight) {
				draw();
			} else {
				setTimeout(awaitingLoading, 100);
			}
		};
	that.run = function () {
		if (!isCanvasSupported) {
			return;
		}
		$canvas = $('<canvas/>').attr({ width: canvasWidth, height: canvasHeight });
		ctx = $canvas[0].getContext('2d');
		$logoImg.hide();
		$container.append($canvas);
		stripe = ctx.createLinearGradient(0, 0, 50, 0);
		stripe.addColorStop(0, 'rgba(255,255,255,0)');
		stripe.addColorStop(0.5, 'rgba(255,255,255,1)');
		stripe.addColorStop(1, 'rgba(255,255,255,0)');
		awaitingLoading();
	};
	return that;
};
