/* 🔐 PASSWORD */
function unlock(){
  if(document.getElementById("pass").value === "sushmita"){
    localStorage.setItem("unlocked","yes");
    document.getElementById("lock").style.display="none";
    document.getElementById("page").classList.remove("hidden");
  }
}

if(localStorage.getItem("unlocked")==="yes"){
  document.getElementById("lock").style.display="none";
  document.getElementById("page").classList.remove("hidden");
}

/* ELEMENTS */
const song = document.getElementById("song");
const startBtn = document.getElementById("startBtn");
const letterBox = document.getElementById("letter");
const nightBtn = document.getElementById("nightToggle");
const galaxy = document.getElementById("galaxy");
const comets = document.getElementById("comets");
const fireworks = document.getElementById("fireworks");
const dayAnim = document.getElementById("dayAnim");

/* LETTER */
const text = `Sushmita ❤️

There is a world beyond those mountains,
where the river is the river and the river is the river.

There are houses between the mountains and the sky is below,
and fireflies glow like earrings.

Sushmita, don’t ask about that world.
There, love is the only work people do.

No one ages there.
The sun never hides.
The moon never feels distant.

One day, when this world feels heavy,
I hope we walk into that world together.

Because Sushmita —
there, the meaning of life will be love.`;

let i=0;

/* START */
startBtn.onclick=()=>{
  startBtn.style.display="none";
  song.volume=0.7;
  song.play();
  type();
};

function type(){
  if(i<text.length){
    letterBox.textContent+=text.charAt(i++);
    setTimeout(type,40);
  }
}

/* DAY ANIMATION */
function startDay(){
  dayAnim.innerHTML="";
  ["🌸","💖","🌻"].forEach(()=>{});
  for(let i=0;i<25;i++){
    const s=document.createElement("span");
    s.textContent=["🌸","💖","🌻"][Math.floor(Math.random()*3)];
    s.style.left=Math.random()*100+"%";
    s.style.animationDuration=(10+Math.random()*10)+"s";
    dayAnim.appendChild(s);
  }
}
startDay();

/* NIGHT MODE */
nightBtn.onclick=()=>{
  document.body.classList.toggle("night");
  if(document.body.classList.contains("night")){
    dayAnim.innerHTML="";
    galaxy.innerHTML="";
    for(let i=0;i<100;i++){
      const s=document.createElement("span");
      s.style.left=Math.random()*100+"%";
      s.style.top=Math.random()*100+"%";
      galaxy.appendChild(s);
    }
    const c=document.createElement("div");
    c.className="comet";
    comets.appendChild(c);
  }else{
    galaxy.innerHTML="";
    comets.innerHTML="";
    startDay();
  }
};

/* CELEBRATION */
function celebrate(){
  for(let i=0;i<45;i++){
    const f=document.createElement("div");
    f.className="fire";
    f.style.left=(40+Math.random()*20)+"%";
    f.style.top=(40+Math.random()*20)+"%";
    f.style.setProperty("--x",(Math.random()*600-300)+"px");
    f.style.setProperty("--y",(Math.random()*600-300)+"px");
    fireworks.appendChild(f);
    setTimeout(()=>f.remove(),1200);
  }
  document.getElementById("yesScreen").style.display="flex";
}

function closeYes(){
  document.getElementById("yesScreen").style.display="none";
}
