//Variveis globais que pegam o valor da tela e do resultado
var tela = document.getElementById("tela");
var result = document.getElementById("result");
//Constante que armazena todos os botoes que tem a class botao
const botoes = document.querySelectorAll(".botao");
var cont = 0;

//Função para limpar a tela.
document.getElementById("limpa").onclick = function () {
    tela.value = "0";
};

//Função para limpar a tela.
document.getElementById("limpatudo").onclick = function () {
    tela.value = "0";
    result.value = "0";
    cont = 0;
};

//Função para apagar o ultimo valor da tela
document.getElementById("delete").onclick = function () {
    //Condicional verificar se o valor é zero ou undefined e deixa zero. Se não Apaga a ultima substring
    if (tela.value == "") {
        tela.value = "";
    } else {
        //a função substring usa dois parametros. 0 respresa a primeira substring, valorAnterior.length respresa o tamanho total da string no caso a ultima substring.
        tela.value = tela.value.substring(0, tela.value.length - 1);
    }
};

//Função que escuta qual o botão vai ser clicado
document.getElementById("botoes").addEventListener("click", function (event) {
    //constante que armazena o valor do botao clicado
    const botaoClicado = event.target.innerText;
    //Laço de repetição que percorre a constante botoes.
    botoes.forEach((element) => {
        //Condição que verifica se o botão clicado é igual ao botao de dentro da constante botoes
        if (element.innerText == botaoClicado) {
            //chama a função seleciona e coloca o valor do botao clicado no parametro
            seleciona(botaoClicado);
        }
    });
});

//função para adicionar o valor da tela
function seleciona(valor) {
    //Condicional verificar se o valor da tela é zero e troca pelo valor.
    if (tela.value == 0) {
        tela.value = valor;
    } else {
        tela.value += valor;
    }
}

//Função para adicionar o sinal negativo
document.getElementById("negativo").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        //verifica se não tem o sinal na frente da string e adiciona se não tira
        if (tela.value[0] != "-") {
            tela.value = "-" + tela.value;
        } else {
            tela.value = tela.value.slice(1, tela.value.length);
        }
    }
};

//função para somar
document.getElementById("soma").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        if (cont == 0) {
            result.value = tela.value + "+";
            tela.value = "";
            cont = 1;
        } else {
            result.value = parseFloat(result.value) + parseFloat(tela.value);
            tela.value = result.value;
            cont = 0;
        }
    }
};

//função para subtrair
document.getElementById("sub").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        if (cont == 0) {
            result.value = tela.value + "-";
            tela.value = "";
            cont = 1;
        } else {
            result.value = parseFloat(result.value) - parseFloat(tela.value);
            tela.value = result.value;
            cont = 0;
        }
    }
};

//função para multiplicar
document.getElementById("mult").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        if (cont == 0) {
            result.value = tela.value + "*";
            tela.value = "";
            cont = 1;
        } else {
            result.value = parseFloat(result.value) * parseFloat(tela.value);
            tela.value = result.value;
            cont = 0;
        }
    }
};

//função para dividir
document.getElementById("divide").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        if (cont == 0) {
            result.value = tela.value + "/";
            tela.value = "";
            cont = 1;
        } else {
            result.value = parseFloat(result.value) / parseFloat(tela.value);
            tela.value = result.value;
            cont = 0;
        }
    }
};

//função apara calcular o numero elevado ao quadrado
document.getElementById("pot").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        result.value = Math.pow(eval(tela.value), 2);
        tela.value = Math.pow(eval(tela.value), 2);
    }
};

//função para calular a raiz quadrada de um numero
document.getElementById("raiz").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        result.value = Math.sqrt(eval(tela.value));
        tela.value = result.value;
    }
};

//função para calulcar a fração de um numero
document.getElementById("fracao").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        result.value = 1 / eval(tela.value);
        tela.value = result.value;
    }
};

//função para calcular o percentual de um numero
document.getElementById("porcento").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        let porcento = 0;
        porcento = (parseFloat(result.value) * parseFloat(tela.value)) / 100;
        tela.value = porcento;
        result.value += tela.value;
    }
};

//função para calular o que tiver na tela
document.getElementById("calcular").onclick = function () {
    //Condição para verificar se o valor da tela é difente de 0
    if (tela.value != 0) {
        //condição para verificar se o valor da tela é diferente do valor do resultado
        if (result.value !== tela.value) {
            resultado = parseFloat(eval(result.value + tela.value));
            result.value = resultado;
            tela.value = resultado;
            cont = 0;
        }
    }
};
