const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const colortext = document.querySelector(".color");

btn.addEventListener("click",color2);

function color2(){
let hexcolor = '#';
for(let a = 0; a<6; a++){
hexcolor += hex[randnum()]
}

colortext.textContent = hexcolor;
document.body.style.backgroundColor = hexcolor;
}

function randnum(){
  
    return Math.floor(Math.random() * hex.length);
    
}

