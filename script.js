// ----- PASSWORD UNLOCK -----
function unlock() {
  const pass = document.getElementById("pass").value.trim();
  if (pass === "sushmita") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("page").classList.remove("hidden");
    // Optional: store in session so refresh doesn't re-lock
    sessionStorage.setItem("unlocked", "true");
  } else {
    document.getElementById("lock-error").textContent = "Wrong password, my love 💔";
  }
}

// Auto-unlock if already unlocked this session (nice for testing)
if (sessionStorage.getItem("unlocked") === "true") {
  document.getElementById("lock").style.display = "none";
  document.getElementById("page").classList.remove("hidden");
}

// ----- NIGHT MODE (simplified, just toggles a class) -----
document.getElementById("nightToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("night");
});

// ----- MUSIC & TYPING -----
const song = document.getElementById("song");
const letterDiv = document.getElementById("letter");
const startBtn = document.getElementById("startBtn");

// Letter text (your original)
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
  // Play music
  song.play().catch(e => console.log("Playback failed: ", e)); // in case browser blocks

  // Reset letter and start typing if not already typing
  if (!typingInterval) {
    letterDiv.textContent = "";
    charIndex = 0;
    typingInterval = setInterval(typeLetter, 40);
  }
});

// ----- CELEBRATE (when she says Yes/Always) -----
function celebrate() {
  // Show the yes overlay
  const yesScreen = document.getElementById("yesScreen");
  yesScreen.style.display = "flex";

  // Gentle confetti (hearts and pastel colors)
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ffb3ba', '#ffdfb3', '#baffc9', '#bae1ff'],
    shapes: ['heart', 'circle'],
    ticks: 200
  });

  // Optional: add a second burst after a tiny delay
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.5, x: 0.3 },
      colors: ['#ff9aa2', '#ffb7b2', '#ffdac1'],
      shapes: ['heart']
    });
  }, 150);
}

function closeYes() {
  document.getElementById("yesScreen").style.display = "none";
}

// ----- REMOVED all fireflies, langToggle, kiss code (unused/breaking) -----
