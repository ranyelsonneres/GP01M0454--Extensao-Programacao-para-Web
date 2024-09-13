//Aula 13/09/2024
//Estrututra de controle: switch-case

let op = prompt("Operação: soma, divisao");
let num1 = parseFloat(prompt("Número 1: "));
//console.log(typeof num1);
let num2 = parseFloat(prompt("Número 2: "));
//console.log(typeof num2);

let resultado;

switch (op.toLowerCase()) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "divisao":
        if (num2 !=0){
            resultado = num1 / num2;
        }
        else {
            resultado = "Não é possível dividir por zero";
        }
        break;
    default:
        resultado = "Operação inválida!";
        break;
}

document.write("Resultado: " + resultado);
//resultado2.textContent = resultado;
//console.log(resultado);



//Funções

//Comentários sobre a N1: AT1
//Explicação da N1: AT2
