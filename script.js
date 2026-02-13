/* Floating elements */
const layer = document.getElementById("sunflower-layer");
const symbols = ["🌻","💛","💖","🌻"];

for(let i=0;i<40;i++){
  const el = document.createElement("span");
  el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
  el.style.left = Math.random()*100 + "%";
  el.style.animationDuration = (10 + Math.random()*10) + "s";
  layer.appendChild(el);
}

/* Letter text (SUSHMITA) */
const text = `Sushmita ❤️

There is a world beyond those mountains, where the river is the river and the river is the river.
There are houses between the mountains and the sky is below, and I imagine you walking there, smiling.

Sushmita, don’t ask about that world — there fireflies have taken the place of stars.
People there tie threads of love endlessly, and no one is ever lonely.

No one ages there.
The sun never hides, the moon never feels distant.
The lamps burn even in strong winds, and boats move over mountains.

The seasons are pink there.
Leaves never turn yellow.
It rains when someone hums a song in love.

One day, when we grow tired of this world,
I hope we’ll walk into that one together.

Because Sushmita —
there, the meaning of life will only be love.`;

/* DOM */
let i = 0;
const letter = document.getElementById("letter");
const song = document.getElementById("song");
const btn = document.getElementById("startBtn");
const couple = document.getElementById("couple");
const valentine = document.getElementById("valentine");

/* AUDIO UNLOCK */
function startMusic(){
  song.volume = 0;
  song.play().then(()=>{
    let v = 0;
    const fade = setInterval(()=>{
      v += 0.02;
      song.volume = Math.min(v,0.6);
      if(v >= 0.6) clearInterval(fade);
    },120);
  }).catch(()=>{});
}

/* TYPE LETTER */
function type(){
  if(i < text.length){
    letter.textContent += text.charAt(i);
    i++;
    let delay = text.charAt(i-1)==="\n" ? 600 : 40;
    setTimeout(type, delay);
  } else {
    setTimeout(()=> couple.classList.remove("hidden"), 800);
    setTimeout(()=> valentine.classList.remove("hidden"), 2600);
  }
}

/* START */
btn.addEventListener("click", ()=>{
  btn.style.display="none";
  startMusic();
  type();
});
