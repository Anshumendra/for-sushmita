/* =========================
   SAFE ELEMENT REFERENCES
========================= */
const song = document.getElementById("song");
const startBtn = document.getElementById("startBtn");
const letterBox = document.getElementById("letter");
const nightBtn = document.getElementById("nightToggle");

/* =========================
   NIGHT MODE (FIXED)
========================= */
if (nightBtn) {
  nightBtn.addEventListener("click", () => {
    document.body.classList.toggle("night");
  });
}

/* =========================
   YOUR ORIGINAL LETTER
========================= */
const text = `Sushmita ❤️

There is a world beyond those mountains, where the river is the river and the river is the river.
There are houses between the mountains and the sky is below, Sushmita must be hiding under your feet and fireflies will be twinkling like earrings.

Sushmita don't ask about that world, there fireflies have taken the place of stars.
People in that world have tied more threads of love than your sons, whose mention is still on the lips bubbling in the grave.

No one is lonely in that world, there is no employment except love Sushmita ❤️

Sushmita ❤️
No one ages there, the sun never goes to hide and the moon never looks above your feet.
The matter of that world is different, there the lamps burn in strong winds and the boat moves on the mountains.

Sushmita ❤️
There the seasons are pink, the leaves of the trees never turn yellow.
It rains there too Sushmita when someone hums a song in love.

The eagles, crows and vultures there don't eat meat, they bite the drops of dew,
that land is so pure and clean that the souls coming out of the graves hug those who love them.

One day when we will get tired of this world, we will call the angels there.
Sushmita, in that world everything said to you will be a promise and nothing will be incomplete for us.

Sushmita,
there the meaning of life will be love.`;

/* =========================
   TYPING EFFECT
========================= */
let i = 0;

function typeLetter() {
  if (i < text.length) {
    letterBox.textContent += text.charAt(i);
    i++;

    let delay = text.charAt(i - 1) === "\n" ? 500 : 40;
    setTimeout(typeLetter, delay);
  }
}

/* =========================
   MUSIC + START (GUARANTEED)
========================= */
if (startBtn) {
  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";

    // Direct play inside click = works
    if (song) {
      song.volume = 0.7;
      song.play().catch(() => {});
    }

    typeLetter();
  });
}
