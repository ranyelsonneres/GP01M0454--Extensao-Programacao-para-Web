//Aula 30/08/2024
//Estrutura de controle (For e While)
//Manipulação DOM (For e While)

console.log("Funcionou!!");

//For
//Ex1: Exibir números de 1 a 5
 document.write("Números de 1 a 5:<br>");
for (let i=1; i<=5;i++){
    console.log(i);
    document.write(i + "<br>");
 }

//Ex2: Criar um programa que solicita ao usuário uma qtde de numeros
 let quantidade = parseInt(prompt("Qtde de números: ")); //forçar a troca de tipo
 console.log(typeof quantidade);
 for (let i=1; i<=quantidade; i++){
     document.write(i + "<br>");
}

//Ex3: solicitar um número e calcular a soma de todos os números
 let limite = parseInt(prompt("Digite o limite: "));
 let soma = 0;
 for (let i=1; i<=limite; i++){
     let numero = parseInt(prompt("Numero: "));
     document.write("Número: " + numero + "<br>");
     soma += numero;
 }
document.write("Soma dos números: " + soma);

//Exemplos com o While
//Exemplo 1:
 let contador = 1;
 document.write("Números de 1 a 5:<br>");
 while (contador<=5){
     document.write(contador + "<br>");
     contador++;
 }

//Exemplo 2: somar os números positivos
let soma = 0;
let numero = 0;
let numeroDigitado = "";

while (numero >=0){
    numero = parseFloat(prompt("Digite um número (ou um número negativo para encerrar: "));
    if (numero >=0){
        soma += numero;
        numeroDigitado += "<br>" + numero;
    }
}

document.write("Números digitados: " + numeroDigitado + "<br>");
document.write("Soma: " + soma);
