// Función para generar un número aleatorio entre 1 y 13 para el rango de cartas
function getRandomRank() {
  let valor = Math.floor(Math.random() * 13) + 1;
  let resultado = "";
  if (valor == 1 || valor > 10) {
    if (valor == 1) {
      resultado = "A";
    } else if (valor == 11) {
      resultado = "J";
    } else if (valor == 12) {
      resultado = "Q";
    } else {
      resultado = "K";
    }
  } else {
    resultado = valor;
  }
  return resultado;
}

// Función para obtener un palo de forma aleatoria
function getRandomSuit() {
  const suits = ["♦", "♣", "♥", "♠"];
  return suits[Math.floor(Math.random() * suits.length)];
}

// Función para actualizar la carta con valores aleatorios
function updateCard() {
  const cardHead = document.querySelector(".card-head");
  const cardBody = document.querySelector(".card-body");
  const cardFoot = document.querySelector(".card-foot");

  let suit = getRandomSuit();

  cardHead.textContent = suit;
  cardFoot.textContent = suit;

  if (suit === "♦" || suit === "♥") {
    cardHead.style.color = "red"; // Cambia a rojo si es ♦ o ♥
    cardFoot.style.color = "red";
  } else {
    cardHead.style.color = "black"; // Vuelve a negro si es ♣ o ♠
    cardFoot.style.color = "black";
  }

  cardBody.textContent = getRandomRank();

  // Invierte el contenido de cardFoot verticalmente
  cardFoot.style.transform = "scaleY(-1)";
}

// Evento que actualiza la carta al cargar la página
window.addEventListener("load", function() {
  updateCard();

  // Agregar un temporizador para generar una nueva carta cada 10 segundos
  setInterval(updateCard, 10000); // 10000 milisegundos = 10 segundos
});
document.getElementById("btnCambio").addEventListener("click", updateCard);
