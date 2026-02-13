const song = document.getElementById("song");
const startBtn = document.getElementById("startBtn");
const letterBox = document.getElementById("letter");
const galaxy = document.getElementById("galaxy");
const comets = document.getElementById("comets");
const nightBtn = document.getElementById("nightToggle");
const fireworks = document.getElementById("fireworks");

/* LETTER TEXT */
const text = `Sushmita ❤️

There is a world beyond those mountains,
where the river is the river and the river is the river.

There no one is lonely.
Love is the only work people do.

The seasons stay pink.
The sky listens when someone hums a song.
And time never rushes us.

One day when this world feels heavy,
I hope we walk into that world together.

Because Sushmita —
there, the meaning of life will be love.`;

let i=0;

/* START */
startBtn.onclick = ()=>{
  startBtn.style.display="none";
  song.volume=0.7;
  song.play();            // guaranteed play
  type();
};

/* TYPE LETTER */
function type(){
  if(i<text.length){
    letterBox.textContent+=text.charAt(i++);
    setTimeout(type,40);
  }
}

/* NIGHT MODE */
nightBtn.onclick = ()=>{
  document.body.classList.toggle("night");
  if(document.body.classList.contains("night")){
    createStars();
    createComet();
  }
};

/* STARS */
function createStars(){
  galaxy.innerHTML="";
  for(let i=0;i<100;i++){
    const s=document.createElement("span");
    s.style.width=s.style.height=Math.random()*2+1+"px";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";
    galaxy.appendChild(s);
  }
}

/* COMET */
function createComet(){
  const c=document.createElement("div");
  c.className="comet";
  comets.appendChild(c);
}

/* CELEBRATION */
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
