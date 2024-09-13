var botao = document.getElementById("converterButton");

botao.onclick = function(){

    var temperatura = parseFloat(document.getElementById("temperatura").value);
    //console.log(temperatura);

    var tipoConversao = document.getElementById("conversao").value;
    console.log(tipoConversao);

    var resultado = document.getElementById("resultado");

    var resultadoConversao;

    switch(tipoConversao) {
        case "cf":
            resultadoConversao = (temperatura * 9/5) + 32;
            resultado.textContent = temperatura + " ºC é igual a " + resultadoConversao + " ºF";
            break;
        case "fc":
            resultadoConversao = (temperatura - 32) * 5/9;
            resultado.textContent = temperatura + " ºF é igual a " + resultadoConversao.toFixed(2) + " ºC";
            break;
        default:
            resultado.textContent = "Selecione uma conversão válida";
            break;  
    }


}
