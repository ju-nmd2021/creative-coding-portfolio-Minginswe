// the inspiration and the basic code was adapted from https://juejin.cn/post/7251648321545994295
const stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    const starCount = parseInt(width * height / (width + height));
    for (let i = 0; i < starCount; i++) {
        const startPos = createVector(random(width), random(height));
        stars.push(new Star(startPos));
    }
}

function draw() {
    background(0, 88);
    stars.forEach(star => {
        star.update(mouseX, mouseY); 
        star.display();
    });
}


class Star {
    constructor(vLocation) {
        this.position = vLocation;
        this.velocity = createVector();
        this.acceleration = createVector();
        this.color = random(255);
        this.size = random(1, 8);
        this.initDirection();
    }

    initDirection() {
        const mousePos = createVector(mouseX, mouseY);
        const direction = p5.Vector.sub(mousePos, this.position).normalize();
        this.acceleration = direction.mult(random(0.1, 0.5));
    }

    update(mouseX, mouseY) {
        const mousePos = createVector(mouseX, mouseY);
        // the p5.Vectire.sub from https://p5js.org/zh-Hans/reference/#/p5.Vector
        const direction = p5.Vector.sub(mousePos, this.position).normalize();
        this.acceleration = direction.mult(random(0.1, 0.5));

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.checkEdge();
    }

    display() {
        fill(this.color);
        const distance = p5.Vector.sub(this.position, createVector(width / 2, height / 2)).mag();
        const size = map(distance, 0, width / 2, 0, this.size);
        circle(this.position.x, this.position.y, size);
    }

    reset() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector();
        this.initDirection();
    }

    checkEdge() {
        if (this.position.x > width || this.position.x < 0 ||
            this.position.y > height || this.position.y < 0) {
            this.reset();
        }
    }
}
