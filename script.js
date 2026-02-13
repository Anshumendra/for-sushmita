const song = document.getElementById("song");
const letterBox = document.getElementById("letter");
const startBtn = document.getElementById("startBtn");
const space = document.getElementById("space");
const fireworks = document.getElementById("fireworks");

/* MUSIC – GUARANTEED */
startBtn.onclick = ()=>{
  startBtn.style.display="none";
  song.volume = 0.7;
  song.play();   // direct user click = works
  type();
};

/* LETTER */
const text = `Sushmita ❤️

This is not just a website.
It is a feeling I wanted to keep forever.

Our first Valentine.
Our memories.
Our future.

Because loving you
is the easiest thing my heart has learned.`;

let i=0;
function type(){
  if(i<text.length){
    letterBox.textContent+=text.charAt(i++);
    setTimeout(type,40);
  }
}

/* NIGHT MODE */
document.getElementById("nightToggle").onclick=()=>{
  document.body.classList.toggle("night");
  if(document.body.classList.contains("night")){
    createStars();
    createComet();
  }
};

function createStars(){
  for(let i=0;i<80;i++){
    const s=document.createElement("span");
    s.style.width=s.style.height=Math.random()*2+1+"px";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";
    space.appendChild(s);
  }
}

function createComet(){
  const c=document.createElement("div");
  c.className="comet";
  space.appendChild(c);
}

/* CELEBRATION */
function celebrate(){
  for(let i=0;i<80;i++){
    const f=document.createElement("div");
    f.className="fire";
    f.style.left="50%";
    f.style.top="50%";
    f.style.setProperty("--x",(Math.random()*600-300)+"px");
    f.style.setProperty("--y",(Math.random()*600-300)+"px");
    fireworks.appendChild(f);
    setTimeout(()=>f.remove(),1000);
  }
  document.getElementById("finalText").style.display="flex";
}
