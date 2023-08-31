function setup() {
  createCanvas(600, 600);
  background(220);
  noLoop();
}
function changeColor() {
  color = random(0, 255);
}
function draw() {
  // Draw circles
  noFill();
  strokeWeight(3);
  for (let i = 0; i < 10; i++) {
    let r = random(100, 200);
    let x = random(width);
    let y = random(height);
    let c = color(random(255), random(255), random(255));
    stroke(c);
    ellipse(x, y, r);
  }
  
  // Draw lines
  stroke(0);
  for (let i = 0; i < 30; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    let c = color(random(255), random(255), random(255));
    stroke(c);
    line(x1, y1, x2, y2);
  }
  // Draw rectangle
    for (let i = 0; i <50; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    let c = color(random(255), random(255), random(255),random(100));
    fill(c)
    rect(x1, y1, x2, y2);
  }
}

function mousePressed() {
  clear();
  redraw(); 
}