// ---------- Função 1: maior de três números ----------
function Funcao1() {
    var a = parseFloat(prompt("Digite o primeiro número:"));
    var b = parseFloat(prompt("Digite o segundo número:"));
    var c = parseFloat(prompt("Digite o terceiro número:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("erro: digite apenas números.");
        return;
    }

    var maior = a;
    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }

    alert("O maior número é: " + maior);
    return maior;
}

// ---------- Função 2: três números em ordem crescente ----------
function Funcao2() {
    var a = parseFloat(prompt("Digite o primeiro número:"));
    var b = parseFloat(prompt("Digite o segundo número:"));
    var c = parseFloat(prompt("Digite o terceiro número:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("erro: digite apenas números.");
        return;
    }

    var numeros = [a, b, c];
    numeros.sort(function (x, y) {
        return x - y;
    });

    alert("Ordem crescente: " + numeros[0] + ", " + numeros[1] + ", " + numeros[2]);
    return numeros;
}

// ---------- Função 3: palíndromo ----------
function Funcao3() {
    var texto = prompt("Digite uma palavra ou frase:");

    if (texto === null || texto === undefined || texto.trim() === "") {
        alert("erro: texto vazio.");
        return;
    }

    // converte para minúsculas e retira os espaços em branco
    var limpo = texto.toLowerCase().replace(/ /g, "");

    // inverte a string
    var invertido = limpo.split("").reverse().join("");

    var resultado;
    if (limpo === invertido) {
        resultado = "\"" + texto + "\" é um palíndromo.";
    } else {
        resultado = "\"" + texto + "\" não é um palíndromo.";
    }

    alert(resultado);
    return resultado;
}

// ---------- Função 4: subconjunto de palavras ----------
function Funcao4() {
    var primeira = prompt("Digite a primeira palavra:");
    var segunda = prompt("Digite a segunda palavra:");

    var resultado;

    if (primeira === null || segunda === null ||
        primeira === undefined || segunda === undefined ||
        primeira.trim() === "" || segunda.trim() === "") {
        resultado = "erro";
    } else if (primeira.includes(segunda)) {
        // método includes() do tipo String
        resultado = "é um subconjunto";
    } else {
        resultado = "não é um subconjunto";
    }

    alert(resultado);
    return resultado;
}

// ---------- Função 5: dia da semana de uma data ----------
function Funcao5() {
    var entrada = prompt("Digite uma data no formato dd/mm/aaaa:");

    if (entrada === null || entrada === undefined || entrada.trim() === "") {
        alert("erro: data vazia.");
        return;
    }

    var partes = entrada.split("/");
    var dia = parseInt(partes[0]);
    var mes = parseInt(partes[1]);
    var ano = parseInt(partes[2]);

    var data = new Date(ano, mes - 1, dia);

    // confere se a data é válida (ex.: evita 31/02/2026)
    if (partes.length !== 3 || isNaN(data.getTime()) ||
        data.getDate() !== dia || data.getMonth() !== mes - 1 || data.getFullYear() !== ano) {
        alert("erro: data inválida.");
        return;
    }

    var dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira",
                "quinta-feira", "sexta-feira", "sábado"];

    var resultado = dias[data.getDay()];
    alert(entrada + " cai em: " + resultado);
    return resultado;
}
