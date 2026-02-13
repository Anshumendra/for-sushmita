// ----- PASSWORD UNLOCK -----
function unlock() {
  const pass = document.getElementById("pass").value.trim();
  if (pass === "sushmita") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("page").classList.remove("hidden");
    sessionStorage.setItem("unlocked", "true");
  } else {
    document.getElementById("lock-error").textContent = "Wrong password, my love 💔";
  }
}

// Auto-unlock if already unlocked this session
if (sessionStorage.getItem("unlocked") === "true") {
  document.getElementById("lock").style.display = "none";
  document.getElementById("page").classList.remove("hidden");
}

// ----- NIGHT MODE TOGGLE -----
document.getElementById("nightToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("night");
});

// ----- MUSIC & TYPING -----
const song = document.getElementById("song");
const letterDiv = document.getElementById("letter");
const startBtn = document.getElementById("startBtn");

const letterText = `Sushmita ❤️

There is a world beyond those mountains,
where love is the only work people do.

One day,
I hope we walk there together.

Because for me,
the meaning of life is you.`;

let charIndex = 0;
let typingInterval = null;

function typeLetter() {
  if (charIndex < letterText.length) {
    letterDiv.textContent += letterText.charAt(charIndex);
    charIndex++;
  } else {
    clearInterval(typingInterval);
    typingInterval = null;
  }
}

startBtn.addEventListener("click", () => {
  song.play().catch(e => console.log("Playback failed: ", e));
  if (!typingInterval) {
    letterDiv.textContent = "";
    charIndex = 0;
    typingInterval = setInterval(typeLetter, 40);
  }
});

// ----- SUNFLOWER SECRET MESSAGE TOGGLE -----
function toggleSecret() {
  const secret = document.getElementById("secretMessage");
  secret.classList.toggle("show");
}

// ----- CELEBRATE (firecracker confetti) -----
function celebrate() {
  // Show yes overlay
  const yesScreen = document.getElementById("yesScreen");
  yesScreen.style.display = "flex";

  // ---- FIREWORKS / FIRECRACKER EFFECT ----
  // First burst (center)
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ffb3ba', '#ffdfb3', '#baffc9', '#bae1ff', '#ffb7b2'],
    shapes: ['heart', 'circle'],
    ticks: 300
  });

  // Second burst (left side)
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
      colors: ['#ff9aa2', '#ffb7b2', '#ffdac1']
    });
  }, 150);

  // Third burst (right side)
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
      colors: ['#b5ead7', '#c7ceea', '#ffdac1']
    });
  }, 300);

  // Fourth burst (top, like fireworks)
  setTimeout(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.2 },
      startVelocity: 25,
      colors: ['#ffb3ba', '#ffdfb3', '#baffc9']
    });
  }, 500);
}

function closeYes() {
  document.getElementById("yesScreen").style.display = "none";
}

// ----- CREATE FLOATING SUNFLOWER PETALS BACKGROUND -----
function createSunflowerPetals() {
  const bgDiv = document.createElement('div');
  bgDiv.className = 'flower-bg';
  document.body.appendChild(bgDiv);

  // Create 12 floating sunflowers with random positions and delays
  for (let i = 0; i < 12; i++) {
    const span = document.createElement('span');
    span.textContent = '🌻'; // or use a petal shape? emoji works
    span.style.left = Math.random() * 100 + '%';
    span.style.top = Math.random() * 100 + '%';
    span.style.animationDuration = (15 + Math.random() * 20) + 's';
    span.style.animationDelay = (Math.random() * 10) + 's';
    span.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
    span.style.opacity = 0.08 + Math.random() * 0.1;
    bgDiv.appendChild(span);
  }
}

// Initialize background on page load
window.addEventListener('load', createSunflowerPetals);
