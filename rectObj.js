function rectObj(args){
	const { x , y ,line_width,line_height } = args;
	this.line_width = line_width;
	this.line_height = line_height;
	this.body = Bodies.rectangle(x,y,line_width,line_height,{isStatic:true});
	World.add(world,this.body);
}

rectObj.prototype.show  = function(){
	fill(123)
	stroke(255);
	var pos = this.body.position;
//	push();
	//translate(pos.x,pos.y);
	rectMode(CENTER);
//	pop();
	rect(pos.x,pos.y,this.line_width,this.line_height);
}

