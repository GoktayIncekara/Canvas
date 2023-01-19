const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

/* c.fillStyle = "rgba(255,0,0,0.4)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,0,255,0.4)";
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillStyle = "rgba(0,255,0,0.4)";
c.fillRect(400, 400, 100, 100);
 */
/* c.beginPath();
c.moveTo(100, 300);
c.lineTo(300, 100);
c.lineTo(500, 300);
c.strokeStyle = "#fa34a3"; // "red" or "rgba()"
c.stroke(); */

/* for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
}
 */

/* let x = Math.random() * innerWidth;
let dx = (Math.random() - 0.5) * 8;
let y = Math.random() * innerHeight;
let dy = (Math.random() - 0.5) * 8;
const radius = 30;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animate(); */

let mouse = {
  x: undefined,
  y: undefined,
};

const maxRadius = 40;

const colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Circle {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

const circleArray = [];

for (let i = 0; i < 1500; i++) {
  const radius = Math.random() * 3 + 1;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 8;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dy = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, radius, dx, dy));
}

let circle = new Circle(200, 200, 30, 3, 3);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArray.forEach((circle) => circle.update());
}

animate();
