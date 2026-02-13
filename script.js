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

if (sessionStorage.getItem("unlocked") === "true") {
  document.getElementById("lock").style.display = "none";
  document.getElementById("page").classList.remove("hidden");
}

// ----- NIGHT MODE TOGGLE -----
document.getElementById("nightToggle").addEventListener("click", () => {
  document.body.classList.toggle("night");
});

// ----- MUSIC PLAYER (with diagnostics) -----
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const startBtn = document.getElementById("startBtn");
const playSong2Btn = document.getElementById("playSong2");
const letterDiv = document.getElementById("letter");

// Music status indicator
let musicStatus = document.createElement('div');
musicStatus.id = 'music-status';
musicStatus.style.margin = '10px auto';
musicStatus.style.fontSize = '0.9rem';
musicStatus.style.color = '#006994';
musicStatus.style.display = 'none';
startBtn.parentNode.insertBefore(musicStatus, startBtn.nextSibling);

function pauseAll() {
  song1.pause();
  song2.pause();
}

function playSong(audioElement, name) {
  pauseAll();
  
  // Force load if not ready
  if (audioElement.readyState === 0) {
    audioElement.load();
  }

  audioElement.play()
    .then(() => {
      console.log(`Playing: ${name}`);
      musicStatus.textContent = `🎵 Now playing: ${name}`;
      musicStatus.style.display = 'block';
    })
    .catch(err => {
      console.warn(`Failed to play ${name}:`, err);
      let errorMsg = `⚠️ Could not play ${name}. `;
      if (err.name === 'NotSupportedError') {
        errorMsg += 'File format not supported.';
      } else if (err.name === 'NotFoundError' || err.message.includes('404')) {
        errorMsg += 'File not found. Check filename.';
      } else {
        errorMsg += 'Click again or check file.';
      }
      musicStatus.textContent = errorMsg;
      musicStatus.style.display = 'block';
    });
}

// Error listeners for audio elements
song1.addEventListener('error', (e) => {
  console.error('Song1 error:', e);
  musicStatus.textContent = '⚠️ First song failed to load. Check file.';
  musicStatus.style.display = 'block';
});

song2.addEventListener('error', (e) => {
  console.error('Song2 error:', e);
  musicStatus.textContent = '⚠️ Second song failed to load. Check file.';
  musicStatus.style.display = 'block';
});

startBtn.addEventListener("click", () => {
  playSong(song1, "Down in the Valley");
  if (!typingInterval) {
    letterDiv.textContent = "";
    charIndex = 0;
    typingInterval = setInterval(typeLetter, 40);
  }
});

playSong2Btn.addEventListener("click", () => {
  playSong(song2, "Chandi Jaisa Rang");
});

// ----- TYPING EFFECT -----
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

// ----- SUNFLOWER SECRET -----
function toggleSecret() {
  document.getElementById("secretMessage").classList.toggle("show");
}

// ----- BIRTHDAY COUNTDOWN -----
function updateBirthdayCountdown() {
  const today = new Date();
  const currentYear = today.getFullYear();
  let birthday = new Date(currentYear, 7, 2);
  if (today > birthday) {
    birthday = new Date(currentYear + 1, 7, 2);
  }
  const diffTime = birthday - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("birthdayMessage").textContent = `🎂 ${diffDays} days until your birthday (2 Aug)`;
}

// ----- CELEBRATE (firecracker confetti) -----
function celebrate() {
  document.getElementById("yesScreen").style.display = "flex";

  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ffb3ba', '#ffdfb3', '#baffc9', '#bae1ff', '#ffb7b2'],
    shapes: ['heart', 'circle'],
    ticks: 300
  });

  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 },
      colors: ['#ff9aa2', '#ffb7b2', '#ffdac1']
    });
  }, 150);

  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 },
      colors: ['#b5ead7', '#c7ceea', '#ffdac1']
    });
  }, 300);

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

// ----- CREATE FLOATING SUNFLOWER PETALS -----
function createSunflowerPetals() {
  const bgDiv = document.createElement('div');
  bgDiv.className = 'flower-bg';
  document.body.appendChild(bgDiv);
  for (let i = 0; i < 12; i++) {
    const span = document.createElement('span');
    span.textContent = '🌻';
    span.style.left = Math.random() * 100 + '%';
    span.style.top = Math.random() * 100 + '%';
    span.style.animationDuration = (15 + Math.random() * 20) + 's';
    span.style.animationDelay = (Math.random() * 10) + 's';
    span.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
    span.style.opacity = 0.08 + Math.random() * 0.1;
    bgDiv.appendChild(span);
  }
}

// Initialize
window.addEventListener('load', () => {
  createSunflowerPetals();
  updateBirthdayCountdown();
  song1.load();
  song2.load();
});
