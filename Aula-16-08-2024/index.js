//impressão no console do navegador
console.log("Bem-vindo a programação web!");

//declaração de variáveis
var nome = "Fulano"; //tem ecopo global
console.log(nome);
console.log(typeof nome);//verificar o tipo de variável

let preco1 = 10.33; //variavel do tipo "number";
let preco2 = 10;
let total = preco1 + preco2
console.log(total);
//console.log(typeof preco1);

let cor = "Azul"; //escopo local
console.log(cor);

const planeta = "Terra"; //escopo local
console.log(planeta);

nome = "Cicrano";
console.log(nome);
cor = "Vermelho";
console.log(cor);
//planeta = "Marte"; não permite reatribuição


//tipos de dados 
let cidade = "Brasilia"; //string
let telefone = 145659224; //number
let status = false; //booleano (true ou false)
let frutas = ["maça", "uva", "banana"]; //arrays
let pessoa = {nome: "João", idade: 15}; //objeto

//impressão do tipo de dado
console.log(typeof cidade);
console.log(typeof telefone);
console.log(typeof status);
console.log(typeof frutas);
console.log(typeof pessoa);

//Modelo de impressão (literal)
console.log(`O seu nome é ${nome} e a sua cidade é ${cidade}`);

//Operadores aritméticos
//+ - * / ** % 
// ()
let a = 10;
let b = 2;
console.log(a + b);//adição
console.log(a ** b); //exponenciação
console.log(a % b); //módulo
let c = (a + b) / 2; //ordem de execução
console.log(c);

//DOM (introdução)
document.getElementById("myH2").textContent = "Funcionou!!";