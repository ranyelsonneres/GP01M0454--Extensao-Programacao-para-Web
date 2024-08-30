var botao = document.getElementById("imprimirButton");

botao.onclick = function(){
    //recuperar o valor informado no formulário
    var quantidade = document.getElementById("quantidadeInput").value;
    console.log(quantidade);

    var resultado = document.getElementById("resultado");
    var numeros = "";

    //laço de repetição
    for (var i =1; i<=quantidade; i++){
        if (i % 2 == 0){
            numeros += i + " ";
        }
        
    }

    resultado.textContent = numeros;

};
