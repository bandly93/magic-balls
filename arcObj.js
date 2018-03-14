function arcObj(x,y,r,options,inWorld){
	let option = options || {};
	this.body = Bodies.circle(x,y,r,options);
	this.r = r;	
	if(inWorld){
		World.add(world,this.body);
	}
}

arcObj.prototype.show = function(){	
	fill(255);
	stroke(255);
	var pos = this.body.position;
	push();
	translate(pos.x,pos.y)
	ellipse(0,0,this.r*2);	
	pop();
}


