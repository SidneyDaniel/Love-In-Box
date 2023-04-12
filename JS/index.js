/**
 * @author Sidney D.
 * @description Funções que permitem passar para a próxima e anterios de inputs do tipo radio 
 */

document.querySelector('#botao-2').addEventListener('click', function() {
    var botoes = document.querySelectorAll('[name="slider"]');
    var indiceSelecionado = -1;
    
    for (var i = 0; i < botoes.length; i++) {
        if (botoes[i].checked) {
            indiceSelecionado = i;
            break;
        }
    }

    if (indiceSelecionado !== -1) {
        var indiceAnterior = (indiceSelecionado - 1 + botoes.length) % botoes.length;
        botoes[indiceAnterior].checked = true;
    }
});


document.querySelector('#botao-1').addEventListener('click', function() {
    var botoes = document.querySelectorAll('[name="slider"]');
    var indiceSelecionado = -1;
    for (var i = 0; i < botoes.length; i++) {
        if (botoes[i].checked) {
            indiceSelecionado = i;
            break;
        }
    }
    
    if (indiceSelecionado !== -1) {
        var proximoIndice = (indiceSelecionado + 1) % botoes.length;
        botoes[proximoIndice].checked = true;
    }
});