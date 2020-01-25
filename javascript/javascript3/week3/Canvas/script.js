// class creation
const canvas = document.getElementById("myCanvas");

const circleClass = class circle {
  constructor(x, y, r, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fillColor = fillColor;
  }

  draw() {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, this.fillColor);
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
};

// Random color generator
function getRandomColor() {
  function c() {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + c() + c() + c();
}

// Random number generator
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Follow the mouse - optional
canvas.addEventListener("mousemove", e => {
  let xOffset = document.getElementsByTagName("canvas")[0].offsetLeft;
  const c1 = new circleClass(
    e.clientX - xOffset,
    e.clientY,
    getRandomArbitrary(10, 50),
    getRandomColor()
  );
  c1.draw();
});

// canvas to have the same width and height of the screen
function resizeCanvas() {
  if (canvas.width < window.innerWidth) {
    canvas.width = window.innerWidth;
  }

  if (canvas.height < window.innerHeight) {
    canvas.height = window.innerHeight;
  }
}

resizeCanvas();
