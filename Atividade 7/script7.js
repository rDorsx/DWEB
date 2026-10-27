// Jokenpo - Atividade 7

var pontosVoce = 0;
var pontosIA = 0;
var acabou = false;

function comecar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("jogo").style.display = "block";
}

// 1 = pedra, 2 = papel, 3 = tesoura
function nomeEscolha(numero) {
  if (numero == 1) {
    return "✊ Pedra";
  } else if (numero == 2) {
    return "✋ Papel";
  } else {
    return "✌️ Tesoura";
  }
}

function jogar(escolhaUsuario) {
  if (acabou == true) {
    return;
  }

  // Math.random vai de 0 até 0.99, multiplicando por 3 e arredondando pra cima
  // da 1, 2 ou 3 (Math.random() pode dar 0 então uso o floor e somo 1)
  var escolhaIA = Math.floor(Math.random() * 3) + 1;

  document.getElementById("escolhas").innerHTML =
    "Você: " + nomeEscolha(escolhaUsuario) + " X IA: " + nomeEscolha(escolhaIA);

  var resultado = "";

  if (escolhaUsuario == escolhaIA) {
    resultado = "Empate!";
  } else if (
    (escolhaUsuario == 1 && escolhaIA == 3) ||
    (escolhaUsuario == 2 && escolhaIA == 1) ||
    (escolhaUsuario == 3 && escolhaIA == 2)
  ) {
    resultado = "Você ganhou a rodada!";
    pontosVoce = pontosVoce + 1;
  } else {
    resultado = "A IA ganhou a rodada!";
    pontosIA = pontosIA + 1;
  }

  document.getElementById("placar").innerHTML =
    "Você " + pontosVoce + " x " + pontosIA + " IA";

  if (pontosVoce == 5) {
    resultado = "VOCÊ GANHOU O JOGO!!!";
    acabou = true;
  } else if (pontosIA == 5) {
    resultado = "A IA GANHOU O JOGO!!!";
    acabou = true;
  }

  document.getElementById("resultado").innerHTML = resultado;

  if (acabou == true) {
    document.getElementById("botaoReiniciar").style.display = "inline";
  }
}

function reiniciar() {
  pontosVoce = 0;
  pontosIA = 0;
  acabou = false;
  document.getElementById("placar").innerHTML = "Você 0 x 0 IA";
  document.getElementById("escolhas").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("botaoReiniciar").style.display = "none";
}
