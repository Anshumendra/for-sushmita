// PASSWORD
function unlock(){
  if(document.getElementById("pass").value === "sushmita"){
    document.getElementById("lock").style.display="none";
    document.getElementById("page").classList.remove("hidden");
  }
}

// NIGHT MODE
document.getElementById("nightToggle").onclick=()=>{
  document.body.classList.toggle("night");
};

// FIREFLIES
const fire = document.getElementById("fireflies");
for(let i=0;i<30;i++){
  const f=document.createElement("span");
  f.style.left=Math.random()*100+"%";
  f.style.animationDuration=(8+Math.random()*10)+"s";
  fire.appendChild(f);
}

// LETTER TEXT
const en = `Sushmita ❤️

There is a world beyond those mountains,
where love is the only work people do.

One day,
I hope we walk there together.

Because for me,
the meaning of life is you.`;

const hi = `सुश्मिता ❤️

एक दुनिया है पहाड़ों के उस पार,
जहाँ प्रेम ही जीवन है।

एक दिन,
मैं चाहता हूँ हम साथ चलें वहाँ।

क्योंकि मेरे लिए,
जीवन का अर्थ तुम हो।`;

let text=en, i=0;
const letter=document.getElementById("letter");
const song=document.getElementById("song");

document.getElementById("startBtn").onclick=()=>{
  song.play();
  type();
};

function type(){
  if(i<text.length){
    letter.textContent+=text.charAt(i++);
    setTimeout(type,40);
  }
}

// LANGUAGE
document.getElementById("langToggle").onclick=()=>{
  letter.textContent="";
  i=0;
  text = text===en ? hi : en;
};

// KISS
function kiss(){
  document.getElementById("kiss").style.display="flex";
}
