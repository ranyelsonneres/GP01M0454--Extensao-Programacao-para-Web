var botao = document.getElementById('verificaButton');

botao.onclick = function(){
    var idade = document.getElementById('idadeInput').value;
    //console.log(idade);

    var resultado = document.getElementById('resultado');

    if (idade >=18){
        //console.log("Maior de idade");
        resultado.textContent = "Maior de idade";
    } else {
        //console.log("Menor de idade");
        resultado.textContent = "Menor de idade";
    }

}
