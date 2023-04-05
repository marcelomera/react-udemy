var nome = "Marcelo";
//var idade = prompt("Digite sua idade?");

function entrar() {
  var area = document.getElementById("area");
  var texto = prompt("Digite seu nome");

  if (texto == "" || texto == null) {
    alert("Digite seu nome novamente!");
    area.innerHTML = "Bem vindo ..";
  } else {
    area.innerHTML = "Bem vindo " + texto;
  }
}

//Swtich
x = 2;
switch (x) {
  case 0:
    alert("O x vale 0");
    break;
  case 1:
    alert("O x vale 1");
    break;
  case 2:
    alert("O x vale 2");
    break;
}
function acao() {
  document.write("Executando .. <br/>");
}

//var timer = setInterval(acao, 1000);
//setTimeout(acao, 3000);

var nome = "";
if (typeof localStorage.nome == "undefined") {
  localStorage.nome = prompt("Digite seu nome");
}
document.write(nome);

// Spred Operator
function cadastroPessoa(info) {
  let novosDados = {
    ...info,
    cargo: "Programador",
    status: 1,
    codigo: "123456",
  };
  return novosDados;
}
console.log(
  cadastroPessoa({ nome: "Marcelo", sobrenome: "Mera", anoInicio: 2045 })
);

// Rest Operator
function minhaLista(...nomes) {
  console.log(nomes);
}

minhaLista("Marcelo", "Henrique", "Mera");

// Exemplo abaixo ele gera um unico array

function cadastrar(usuarios, ...novosUsuarios) {
  let totalUsuarios = [...usuarios, ...novosUsuarios];
  return console.log(totalUsuarios);
}

let usuarios = ["Marcelo", "Henrique"];
let novosUsuarios = cadastrar(usuarios, "Mera", "Silva");

// Exemplo abaixo ele quebra em 2 arrays

function cadastrar2(usuarios, ...novosUsuarios) {
  let totalUsuarios = [usuarios, novosUsuarios];
  return console.log(totalUsuarios);
}

let usuarios2 = ["Marcelo", "Henrique"];
let novosUsuarios2 = cadastrar(usuarios, "Mera", "Silva");

// Array

const lista = [1, 2, 3, 4, 5];
const novaLista = lista.map(function (item, index) {
  return item * index;
});
console.log(novaLista);

// recude = soma o valor do array
const soma = lista.reduce(function (total, proximo) {
  return total + proximo;
});
console.log(soma);

const find = lista.find(function (item) {
  return item === 6;
});
console.warn(find);

function adicionar(...numeros) {
  //let total = numeros.reduce((total, proximo) => total + proximo);   // função anonima

  let total = numeros.reduce((total, proximo) => {
    let soma = total + proximo;
    return soma;
  });

  console.log(total);
}
adicionar(1, 2, 3, 4, 5);

// includes = verifica  se aquilo que digitou no includes esta dentro do que esta mandando
let nomes = ["Marcelo", "Henrique", "Mera"];
console.log(nomes.includes("Marcelo"));

if (nomes.includes("Marcela")) {
  console.log("Marcelo está na lista");
} else {
  console.log("Marcelo não esta na lista");
}

let nome3 = "Marcelo";
//endswith = verifica se termina com aquilo que esta passando;
console.log(nome3.endsWith("lo")); // return true

//startwith = verifica se começa com aquilo que esta passando;
console.log(nome3.endsWith("Mar")); // return true

//some = alguns (tradução)
console.log(nomes.some((nomecallback) => nomecallback === "Marcelo"));
//every = todo (tradução)

let nomes4 = [
  { nome: "Marcelo", idade: 34 },
  { nome: "Henrique", idade: 18 },
  { nome: "Mera", idade: 30 },
];

if (nomes4.every((nome5) => nome5.idade >= 18)) {
  // verificando se TODOS são maiores de 18 anos (caso algum seja menor ele da FALSE)
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
