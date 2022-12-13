var c = document.getElementById('c2');
var $ = c.getContext('2d');
var w = (c.width = window.innerWidth);
var h = (c.height = window.innerHeight);
var mx = w / 2,
	my = h / 2;
var t;
var n = [];
var m = Math.random;
var f = Math.floor;
A();
function A() {
	$.globalCompositeOperation = 'source-over';
	$.fillStyle = 'rgba(11,2,2, 1)';
	$.fillRect(0, 0, w, h);
	$.globalCompositeOperation = 'lighter';
	for (var i = 0; i < 50; i++) {
		var p = {};
		p.x = mx;
		p.y = my;
		p.vx = m() * 40 - 20;
		p.vy = m() * 40 - 30;
		p.s = m() * 100 + 10;
		p.r = f(m() * 50 + 20);
		p.g = m() * 5;
		p.b = m() * 45;
		p.dx = mx;
		n.push(p);
	}
	i = n.length;
	while (i--) {
		p = n[i];
		p.x += p.vx;
		p.y += p.vy;
		p.vy -= 0.2;
		p.vx += (p.dx - p.x) / p.s / 2;
		p.s -= 1.8;
		if (p.s < 1) {
			n.splice(i, 1);
			continue;
		}
		$.beginPath();
		var g1 = 'rgba(220,148,2,1)';
		var g2 = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',0)';
		var g = $.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.s);
		g.addColorStop(0, g1);
		g.addColorStop(1, g2);
		$.fillStyle = g;
		$.arc(p.x, p.y, p.s, 0, 8, 0);
		$.fill();
	}
	window.requestAnimationFrame(A);
	t = 'FIRE!!! ◆◆◆ 1.5kb';
	$.font = '6.5em Permanent Marker';
	$.fillStyle = 'rgba(21, 15,245,1)';
	$.fillText(t, 155, 650);
}
window.addEventListener('resize', function () {
	c.width = w = window.innerWidth;
	c.height = h = window.innerHeight;
});
document.body.addEventListener('mousemove', function (e) {
	mx = e.clientX;
	my = e.clientY;
});
