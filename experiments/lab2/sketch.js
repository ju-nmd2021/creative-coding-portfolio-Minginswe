//The code was adapted from Garrit's lecture https://ju.slides.com/garrit/cc-2023-complexity?token=AbjTIZo5#/9/6
//The following 185 lines of code was added by courtesy of Garrit Schaap
//I started with Garrit's code, but I have made some changes and played around in some lines of the code, also i added keyborad event as input
class Agent {
	constructor(x, y, maxSpeed, maxForce) {
	  this.position = createVector(x, y);
	  this.lastPosition = createVector(x, y);
	  this.acceleration = createVector(0, 0);
	  this.velocity = createVector(0, 0);
	  this.maxSpeed = maxSpeed;
	  this.maxForce = maxForce;
	}
	
	follow(desiredDirection) {
	  desiredDirection = desiredDirection.copy();
	  desiredDirection.mult(this.maxSpeed);
	  let steer = p5.Vector.sub(desiredDirection, this.velocity);
	  steer.limit(this.maxForce);
	  this.applyForce(steer);
	}
  
	applyForce(force) {
	  this.acceleration.add(force);
	}
  
	update() {
	  this.lastPosition = this.position.copy();
	  this.velocity.add(this.acceleration);
	  this.velocity.limit(this.maxSpeed);
	  this.position.add(this.velocity);
	  this.acceleration.mult(random(2));
	}
  
	checkBorders() {
	  if (this.position.x < 0) {
		this.position.x = innerWidth;
		this.lastPosition.x = innerWidth;
	  } else if (this.position.x > innerWidth) {
		this.position.x = 0;
		this.lastPosition.x = 0;
	  }
	  if (this.position.y < 0) {
		this.position.y = innerHeight;
		this.lastPosition.y = innerHeight;
	  } else if (this.position.y > innerHeight) {
		this.position.y = 0;
		this.lastPosition.y = 0;
	  }
	}
    
	// I have changed here that the lines flow four different areas will present differenet colors
	draw() {
	  push();
	  if(this.position.x > innerWidth/2 && this.position.y > innerHeight/2) {
		stroke(255, 255, 0, 40);
		strokeWeight(1);
	    line(
		this.lastPosition.x,
		this.lastPosition.y,
		this.position.x,
		this.position.y
	  );
	  } else if(this.position.x<innerWidth/2 && this.position.y<innerHeight/2){ 
		stroke(0, 255, 0, 40);
	    strokeWeight(1);
	    line(
		this.lastPosition.x,
		this.lastPosition.y,
		this.position.x,
		this.position.y
	  );
	  } else if(this.position.x>innerWidth/2 && this.position.y< innerHeight/2) {
        stroke(0, 0, 255, 40);
	    strokeWeight(1);
	    line(
		this.lastPosition.x,
		this.lastPosition.y,
		this.position.x,
		this.position.y
	  );
	  } else {
		stroke(0, 0, 0, random(100));
	    strokeWeight(1);
	    line(
		this.lastPosition.x,
		this.lastPosition.y,
		this.position.x,
		this.position.y
	  );
	  }
	  pop();
	}
  }
  
  function setup() {
	createCanvas(innerWidth, innerHeight);
	background(255, 255, 255);
	field = generateField();
	generateAgents();
  }
  
  function generateField() {
	let field = [];
	noiseSeed(Math.random() * 200);
	for (let x = 0; x < maxCols; x++) {
	  field.push([]);
	  for (let y = 0; y < maxRows; y++) {
		const value = noise(x / divider, y / divider) * Math.PI * 2;
		field[x].push(p5.Vector.fromAngle(value));
	  }
	}
	return field;
  }
  // I have changed here to try to draw some meaningful shapes, but it doesnt work very well
  function generateAgents() {
	for (let i = 0; i < 8; i++) {
		let x;
		let y;
		if(i == 0) {
			x = innerWidth*0.2;
			y = innerHeight*0.2;
		} else if(i==1) {
			x = innerWidth*0.3;
			y = innerHeight*0.3;
		} else if(i == 2) {
			x = innerWidth*0.4;
			y = innerHeight*0.4;
		} else if(i== 3) {
			x = innerWidth*0.5;
			y = innerHeight*0.5;
		} else if(i==4) {
			x = innerWidth*0.6;
			y = innerHeight*0.6;
		} else if(i==5) {
			x = innerWidth*0.7;
			y = innerHeight*0.7;
		} else if(i==6) {
			x = innerWidth*0.8;
			y = innerHeight*0.8;
		} else if(i== 7) {
			x = innerWidth*0.9;
			y = innerHeight*0.9;
		} 
	  let agent = new Agent(
		x,
		y,
	    10,
		0.1
	  );
	  agents.push(agent);
	}
  }
  
  const fieldSize = 50;
  const maxCols = Math.ceil(innerWidth / fieldSize);
  const maxRows = Math.ceil(innerHeight / fieldSize);
  const divider = 4;
  let field;
  let agents = [];

  // I added a keyboard event here 
  let moveAgent = false; 
  function keyPressed() {
    if (keyCode === 65) {
    moveAgent = true; 
   }
  }

 function keyReleased() {
   if (keyCode === 65) {
    moveAgent = false; 
   }
 }
  function draw() {
	for (let agent of agents) {
	  const x = Math.floor(agent.position.x / fieldSize);
	  const y = Math.floor(agent.position.y / fieldSize);
	  const desiredDirection = field[x][y];
	  agent.follow(desiredDirection);
	  // when press key "a" , a line will be drawn	
	   if (moveAgent) {
		agent.update();
	  }
	  agent.checkBorders();
	  agent.draw();
	}
  }
