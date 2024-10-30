const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#1b1b1b",  
  "#2c2720",
  "#3e3324",
  "#4f3f28",
  "#614b2d",
  "#725731",
  "#846335",
  "#956f39",
  "#a77b3e",
  "#b88742",
  "#ca9346",
  "#db9f4a",
  "#e7a34e",
  "#e7a951",
  "#e7ae55",
  "#e7b458",
  "#e7ba5b",
  "#e7bf5f",
  "#e7c562",
  "#e7cb66",
  "#e7d169",
  "#eaad53",  
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

function startAnimation() {
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
}

// التحقق من حجم الشاشة
if (window.matchMedia("(min-width: 1250px)").matches) {
  startAnimation();
}
