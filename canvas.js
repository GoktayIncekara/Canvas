const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

c.fillStyle = "rgba(255,0,0,0.4)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,0,255,0.4)";
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillStyle = "rgba(0,255,0,0.4)";
c.fillRect(400, 400, 100, 100);

c.beginPath();
c.moveTo(100, 300);
c.lineTo(300, 100);
c.lineTo(500, 300);
c.strokeStyle = "#fa34a3"; // "red" or "rgba()"
c.stroke();

c.beginPath();
c.arc(300, 300, 100, 0, Math.PI * 2, false);
c.strokeStyle = "rgba(255,150,100,0.7)";
c.stroke();

for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
}
