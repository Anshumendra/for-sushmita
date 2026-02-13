/* ===============================
   Floating Sunflowers & Hearts
================================ */

const layer = document.getElementById("sunflower-layer");
const symbols = ["🌻", "💛", "💖", "🌻"];

for (let i = 0; i < 36; i++) {
  const el = document.createElement("span");
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + "%";
  el.style.animationDuration = (10 + Math.random() * 10) + "s";
  layer.appendChild(el);
}

/* ===============================
   Letter Text (FULL)
================================ */

const text = `Sushmita ❤️

There is a world beyond those mountains, where the river is the river and the river is the river.
There are houses between the mountains and the sky is below, Mary must be hiding under your feet and fireflies will be twinkling like earrings.

Sushmita don't ask about that world, there fireflies have taken the place of stars.
People in that world have tied more threads of love than your sons, whose mention is still on the lips bubbling in the grave.

No one is lonely in that world, there is no employment except love Sushmita ❤️

Sushmita ❤️
No one ages there, the sun never goes to hide and the moon never looks above your feet.
The matter of that world is different, there the lamps burn in strong winds and the boat moves on the mountains.

Sushmita ❤️
There the seasons are pink, the leaves of the trees never turn yellow.
It rains there too Mary when someone hums a song in love.

The eagles, crows and vultures there don't eat meat, they bite the drops of dew.
That land is so pure and clean that the souls coming out of the graves hug those who love them.

One day when we will get tired of this world, we will call the angels there.
Sushmita, in that world everything said to you will be a promise and nothing will be incomplete for us.

Sushmita,
there the meaning of life will be love.`;

/* ===============================
   DOM Elements
================================ */

let i = 0;
const letter = document.getElementById("letter");
const song = document.getElementById("song");
const btn = document.getElementById("startBtn");
const couple = document.getElementById("couple");
const valentine = document.getElementById("valentine");

/* ===============================
   AUDIO FIX (IMPORTANT)
================================ */

// Unlock audio on first real click
function unlockAudio() {
  song.play().then(() => {
    song.pause();
    song.currentTime = 0;
  }).catch(() => {});
}

// Fade-in music smoothly
function fadeInMusic() {
  song.volume = 0;
  song.play().catch(() => {});
  let v = 0;
  const fade = setInterval(() => {
    v += 0.02;
    song.volume = Math.min(v, 0.6);
    if (v >= 0.6) clearInterval(fade);
  }, 120);
}

/* ===============================
   Typing Effect
================================ */

function type() {
  if (i < text.length) {
    letter.textContent += text.charAt(i);
    i++;

    let delay = 35;
    if (text.charAt(i - 1) === "\n") delay = 500;

    setTimeout(type, delay);
  } else {
    // Show couple photo
    setTimeout(() => {
      couple.classList.remove("hidden");
    }, 800);

    // Show Valentine question
    setTimeout(() => {
      valentine.classList.remove("hidden");
    }, 2600);
  }
}

/* ===============================
   START BUTTON
================================ */

btn.addEventListener("click", () => {
  unlockAudio();                 // allow browser audio
  btn.style.display = "none";

  setTimeout(() => {
    fadeInMusic();               // play song
    type();                      // start letter
  }, 300);
});

