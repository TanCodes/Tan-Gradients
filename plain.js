const colors = [
  "green",
  "red",
  "Tomato",
  "Orange",
  "LightGray",
  "black",
  "purple",
  "lightblue",
  "blue",
  "salmon",
  "darkred",
  "lightcoral",
  "coral",
  "gold",
  "orange",
  "lightyellow",
  "lemonchiffon",
  "papayawhip",
  "moccasin",
  "khaki",
  "peachpuff",
  "khaki",
  "yellow",
  "lawngreen",
  "chartreuse",
  "lime",
  "greenyellow",
  "springgreen",
  " palegreen",
  "olive",
  "teal",
  "cadetblue",
  "navy",
  "slateblue",
  "royalblue",
  "plum",
  "thistle",
  "lavender",
  "indigo",
  "chocolate",
  "maroon",
  "peru",
  "tan",
  "wheat",
  "dimgray",
  "slategray",
  "line",
  "lavenderblush",
  "deeppink",
];
const btn = document.getElementById("btn");
const colortext = document.querySelector(".color");

btn.addEventListener("click", color1);

function color1() {
  const numberrand = randnum();
  console.log(numberrand);
  document.body.style.backgroundColor = colors[numberrand];
  colortext.textContent = colors[numberrand];
}

function randnum() {
  return Math.floor(Math.random() * colors.length);
}
