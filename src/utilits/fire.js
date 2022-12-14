export default {
	var Part = function(){
		this.reset();
	  };
	  
	  Part.prototype.reset = function(){
		this.startRadius = rand(1, 25);
		this.radius = this.startRadius;
		this.x = cw/2 + (rand(0, 6) - 3);
		this.y = 250;      
		this.vx = 0;
		this.vy = 0;
		this.hue = rand(globalTick - hueRange, globalTick + hueRange);
		this.saturation = rand(50, 100);
		this.lightness = rand(20, 70);
		this.startAlpha = rand(1, 10) / 100;
		this.alpha = this.startAlpha;
		this.decayRate = .1;  
		this.startLife = 7;
		this.life = this.startLife;
		this.lineWidth = rand(1, 3);
	  }
		  
	  Part.prototype.update = function(){  
		this.vx += (rand(0, 200) - 100) / 1500;
		this.vy -= this.life/50;  
		this.x += this.vx;
		this.y += this.vy;  
		this.alpha = this.startAlpha * (this.life / this.startLife);
		this.radius = this.startRadius * (this.life / this.startLife);
		this.life -= this.decayRate;  
		if(
		  this.x > cw + this.radius || 
		  this.x < -this.radius ||
		  this.y > ch + this.radius ||
		  this.y < -this.radius ||
		  this.life <= this.decayRate
		){
		  this.reset();  
		}  
	  };
		
	  Part.prototype.render = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = ctx.strokeStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, '+this.alpha+')';
		ctx.lineWidth = this.lineWidth;
		ctx.fill();
		ctx.stroke();
	  };
}