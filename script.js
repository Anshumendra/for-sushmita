// Floating elements
const layer = document.getElementById("sunflower-layer");
const symbols = ["🌻","💛","💖","🌻"];

for(let i=0;i<36;i++){
  const el=document.createElement("span");
  el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
  el.style.left = Math.random()*100+"%";
  el.style.animationDuration = (10+Math.random()*10)+"s";
  layer.appendChild(el);
}

// Letter text (FULL, unchanged meaning)
const text = `Mary ❤️

There is a world beyond those mountains, where the river is the river and the river is the river.
There are houses between the mountains and the sky is below, Mary must be hiding under your feet and fireflies will be twinkling like earrings.

Mary don't ask about that world, there fireflies have taken the place of stars.
People in that world have tied more threads of love than your sons, whose mention is still on the lips bubbling in the grave.

No one is lonely in that world, there is no employment except love Mary ❤️

Mary ❤️
No one ages there, the sun never goes to hide and the moon never looks above your feet.
The matter of that world is different, there the lamps burn in strong winds and the boat moves on the mountains.

Mary ❤️
There the seasons are pink, the leaves of the trees never turn yellow.
It rains there too Mary when someone hums a song in love.

The eagles, crows and vultures there don't eat meat, they bite the drops of dew.
That land is so pure that the souls coming out of the graves hug those who love them.

One day when we will get tired of this world, we will call the angels there.
Mary, in that world everything said to you will be a promise and nothing will be incomplete for us.

Mary,
there the meaning of life will be love.`;

let i=0;
const letter = document.getElementById("letter");
const song = document.getElementById("song");
const btn = document.getElementById("startBtn");
const valentine = document.getElementById("valentine");

// Smooth music fade-in
function fadeInMusic(){
  song.volume = 0;
  song.play();
  let v = 0;
  const fade = setInterval(()=>{
    v += 0.02;
    song.volume = Math.min(v,0.6);
    if(v >= 0.6) clearInterval(fade);
  },120);
}

btn.onclick = ()=>{
  btn.style.display="none";
  fadeInMusic();
  type();
};

function type(){
  if(i < text.length){
    letter.textContent += text.charAt(i);
    i++;

    // Natural pauses after paragraphs
    let delay = 35;
    if(text.charAt(i-1)==="\n") delay = 500;

    setTimeout(type, delay);
  } else {
    // Pause before Valentine question
    setTimeout(()=>{
      valentine.classList.remove("hidden");
    }, 1200);
  }
}

