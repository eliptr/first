var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
var bird = new Image();
var bg = new Image();

bird.src = "bird.png";
bg.src = "bg.png";

// variables
var bX = 20;
var bY = 150;

var gravity = 2;
var up = 40;

// on key down
document.addEventListener("mousedown", moveup);

// go up

function moveup() {
  bY -= up;
}

// over the canvas

function over() {
  if (bY > canvas.height) {
    bY = 150;
  }

  if (bY < canvas.height - canvas.height - 50) {
    bY = 150;
  }
}

// draw images
function draw() {
  ctx.drawImage(bg,0,0);

   ctx.drawImage(bird,bX,bY);

   bY += gravity;

    // Intervals

   requestAnimationFrame(draw);
   setInterval(over, 10);

}

// restart
function restart() {
  bX = 20;
  bY = 150;
}
