var nome = prompt("Digite o nome do aluno:");
var soma = 0;

for (var i = 1; i <= 4; i++) {
  soma += parseFloat(prompt("Digite a nota " + i + ":"));
}

var media = soma / 4;
alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
