/* Sunflowers */
const layer = document.getElementById("sunflower-layer");
for(let i=0;i<28;i++){
  const f=document.createElement("span");
  f.textContent="🌻";
  f.style.left=Math.random()*100+"%";
  f.style.animationDuration=(8+Math.random()*8)+"s";
  layer.appendChild(f);
}

/* Letter typing */
const text = `Mary ❤️
There is a world beyond those mountains, where the river is the river and the river is the river...
Mary there the meaning of life will be love`;

const letter = document.getElementById("letter");
let i=0;

function type(){
  if(i<text.length){
    letter.textContent += text.charAt(i);
    i++;
    setTimeout(type, 30);
  }
}

type();
