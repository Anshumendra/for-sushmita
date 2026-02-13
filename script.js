// Floating elements
const floating = document.getElementById("floating");
const icons = ["🌻","💛","💖"];

for(let i=0;i<25;i++){
  const el = document.createElement("span");
  el.textContent = icons[Math.floor(Math.random()*icons.length)];
  el.style.left = Math.random()*100 + "%";
  el.style.animationDuration = (10+Math.random()*10)+"s";
  floating.appendChild(el);
}

// Letter text
const text = `Sushmita ❤️

There is a world beyond those mountains,
where everything moves slowly and gently.

In that world, no one is lonely.
Love is the only work people do.

The seasons stay pink.
The sky listens when someone hums a song.
And time never rushes us.

One day, when this world feels heavy,
I hope we walk into that one together.

Because Sushmita —
there, the meaning of life will only be love.`;

const letter = document.getElementById("letter");
const song = document.getElementById("song");
const btn = document.getElementById("startBtn");

let i = 0;

// Start on click (guaranteed audio play)
btn.addEventListener("click", () => {
  btn.style.display = "none";
  song.volume = 0.6;
  song.play();   // direct play = works

  type();
});

function type(){
  if(i < text.length){
    letter.textContent += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}
