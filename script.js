/* 🔐 PASSWORD */
function unlock(){
  if(document.getElementById("pass").value === "sushmita"){
    document.getElementById("lock").style.display="none";
    document.getElementById("page").classList.remove("hidden");
  }
}

/* ELEMENTS */
const song = document.getElementById("song");
const startBtn = document.getElementById("startBtn");
const letterBox = document.getElementById("letter");
const nightBtn = document.getElementById("nightToggle");
const galaxy = document.getElementById("galaxy");
const comets = document.getElementById("comets");
const fireworks = document.getElementById("fireworks");

/* 💌 LETTER (FULL & SAFE) */
const text = `Sushmita ❤️

There is a world beyond those mountains, where the river is the river and the river is the river.
There are houses between the mountains and the sky is below, and fireflies glow like earrings.

Sushmita, don’t ask about that world.
There, love is the only work people do.

No one ages there.
The sun never hides.
The moon never feels distant.

One day, when this world feels heavy,
I hope we walk into that world together.

Because Sushmita —
there, the meaning of life will be love.`;

let i = 0;

/* ▶️ START (MUSIC GUARANTEED) */
startBtn.onclick = ()=>{
  startBtn.style.display="none";
  song.volume = 0.7;
  song.play();   // direct click = works
  type();
};

function type(){
  if(i < text.length){
    letterBox.textContent += text.charAt(i++);
    setTimeout(type,40);
  }
}

/* 🌙 NIGHT MODE + GALAXY */
nightBtn.onclick = ()=>{
  document.body.classList.toggle("night");

  if(document.body.classList.contains("night")){
    galaxy.innerHTML="";
    for(let i=0;i<120;i++){
      const s=document.createElement("span");
      s.style.left=Math.random()*100+"%";
      s.style.top=Math.random()*100+"%";
      galaxy.appendChild(s);
    }
    const c=document.createElement("div");
    c.className="comet";
    comets.appendChild(c);
  }
};

/* 🎆 CELEBRATION */
function celebrate(){
  for(let i=0;i<120;i++){
    const f=document.createElement("div");
    f.className="fire";
    f.style.left="50%";
    f.style.top="50%";
    f.style.setProperty("--x",(Math.random()*800-400)+"px");
    f.style.setProperty("--y",(Math.random()*800-400)+"px");
    fireworks.appendChild(f);
    setTimeout(()=>f.remove(),1000);
  }
  document.getElementById("yesScreen").style.display="flex";
}
