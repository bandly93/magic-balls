var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine;
var world;
var ballArr = [];
var pegs = [];
var bottomLines = [];

function setup() {
	createCanvas(480, 320);
	engine = Engine.create();
	world = engine.world;
	drawPegs();
	drawBottomLines();
	ground();
	drawBall();
	console.log(world);
}

function keyPressed(e){
	const { keyCode } = e;
	if(keyCode === 32){
		World.add(world,ballArr[0].body);
	}
}

function drawPegs(){
	let inWorld = true;
	let options = {
		isStatic : true
	}
	let x = 45;
	let y = 50;	
	for ( let i = 0; i < 57; i++){
		if(x > 480){
			x = x % 480;
			y += 35;
		}
		let peg = new arcObj(x,y,3,options,inWorld);
		pegs.push(peg);
		x += 50;
	}
}

function ground(){
	let data = {
		x:240,
		y:320,
		line_height:7,
		line_width:375.33
	}	
	let ground = new rectObj(data);
	this.bottomLines.push(ground);	
}

function drawBottomLines(){
	let width = 480;
	let numOfLines = 9;
	for( let i = 0; i < numOfLines; i++){
		let data = {
			x:width/numOfLines * (i+1),
			y:290,
			line_width : 2,
			line_height : 50,
		}
		let bar = new rectObj(data);
		bottomLines.push(bar);	
	}
}
function drawBall(){
	let inWorld = false;
	let options = {
		restitution:0.5,
		friction:0,
	}
	var ball = new arcObj(240,10,10,options,inWorld);
	ballArr.push(ball);
}

function draw() {
	background(51);
	Engine.update(engine);
	for(var i = 0; i< ballArr.length; i++){
		ballArr[i].show();
	}
	for(var i = 0; i < pegs.length; i++){
		pegs[i].show();
	}
	for(var i = 0; i < bottomLines.length; i++){
		bottomLines[i].show();
	}
}


