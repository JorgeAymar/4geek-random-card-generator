const cartasPoker = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const pintasPoker = ['♠️', '♥️', '♦️', '♣️'];

function seleccionaCarta(arr){
  return Math.floor(Math.random() * (arr.length-1))
}

function cargarPagina() {
  i = seleccionaCarta (cartasPoker);
  n = seleccionaCarta (pintasPoker);

  let simbCardHTML = document.getElementById("simb-header");
  let simbHTML = document.getElementById("simb-letra");
  let simbFootHTML = document.getElementById("simb-footer");

  // Obtenemos el contenido del elemento como una cadena de texto
  simbHTML.innerHTML = cartasPoker[i];

  let fuente;

  //console.log("elegido -> " + n);
  //console.log(simbCardHTML.src);
  if (n==0) fuente = "./img/trebol-negro.png";
  else if  (n==1) fuente ="./img/corazon-rojo.png";
  else if  (n==2) fuente ="./img/diamante-rojo.png";
  else if  (n==3) fuente ="./img/pica-negro.png";

  //console.log("elegido -> " + fuente);
  simbCardHTML.src = fuente;
  simbFootHTML.src = fuente;
  //console.log(simbCardHTML.src);
};

//cargarPagina();