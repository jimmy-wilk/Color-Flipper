const dino = document.getElementById("dino");
const ground = document.getElementById("ground");
let isJumping = false;
let jumpHeight = 100; // Adjust jump height

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !isJumping) {
    isJumping = true;
  }
});

function jump() {
  if (isJumping) {
    // Implement jump logic here
    dino.style.bottom = parseInt(dino.style.bottom) + jumpHeight + "px";
    // Gradually decrease jump height to simulate gravity
    jumpHeight--;
    if (jumpHeight <= 0) {
      isJumping = false;
      jumpHeight = 100;
    }
  }
}

function gameLoop() {
  // Move ground, generate obstacles, check collisions
  // Update dino position based on jump logic
  requestAnimationFrame(gameLoop);
}

gameLoop();
