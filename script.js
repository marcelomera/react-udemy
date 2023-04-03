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
