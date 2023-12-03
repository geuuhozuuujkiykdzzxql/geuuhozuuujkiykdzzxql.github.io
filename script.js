// No Copyright.  2023.  I would never dream of using global variables!  Don't judge.
// Produced by Bard from the prompt: "Provide java script for a simple animation"
// I just changed the colour and duplicated the code to move it in the X direction too.


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ballX = canvas.width / 2;
let ballY = canvas.height - 50;
let ballRadius = 20;
let ballSpeedY = 1.2;
let ballSpeedX = 1.4;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.fill();
}

function updateBall() {
  ballY += ballSpeedY;
  ballX += ballSpeedX;
  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY *= -1;
  }
  if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
    ballSpeedX *= -1;
  }
}

function animate() {
  drawBall();
  updateBall();

  requestAnimationFrame(animate);
}

animate();