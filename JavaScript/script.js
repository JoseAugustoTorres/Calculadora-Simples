var valor = "";
var primeiroValor = 0;
var segundoValor = "";
var operador = null;
var resultado = 0;

function valorBotao(clicked_id) {
    var botaoClicado = clicked_id;

    switch(botaoClicado) {
        case 'botaoSoma':
            operadorEscolhido('+');
            break;
        case 'botaoSubtrair':
            operadorEscolhido('-');
            break;
        case 'botaoMultiplicar':
            operadorEscolhido('*');
            break;
        case 'botaoDividir':
            operadorEscolhido("/");
            break;
        case 'botaoVirgula':
            adicionarDecimal('.');
            break;
        case 'botaoIgual':
            calcularResultado();
            break;
        default:
            valoresNumericos(botaoClicado.slice(-1));
            break;
    }
}

function valoresNumericos(numeroDigitado) {
    this.valor += numeroDigitado;
    document.addEventListener('click', mostrarValorTela(valor));
}

function mostrarValorTela(valor){
    var valorTela = document.getElementById('tela-calculadora');
    valorTela.textContent = valor.replace('.',',');

}

function operadorEscolhido(operador) {
    this.operador = operador;
    this.segundoValor = "";

    if(this.valor != ""){
        this.primeiroValor = this.valor;
        }
        
    this.valor = "";
    mostrarValorTela(this.primeiroValor);
}

function adicionarDecimal() {
    var valorTela = document.getElementById('tela-calculadora');
    
    if(valorTela.innerText.includes(".") || valorTela.innerText.includes(",")){
        return;
    }
// TODO: ARRUMAR ISSO
     if(valorTela.innerText == '0'){
         this.valor = '0.';
     } else if((this.segundoValor === "" && valorTela.innerText == '0') || (this.primeiroValor !== "" && this.valor === "")) {
        this.valor = '0.'
     } else {
         this.valor += '.';
     }
    
    mostrarValorTela(this.valor);
}

function calcularResultado() {
    //lógica para pressionar o botão igual e utilizar o mesmo segundo valor informado
    if(this.segundoValor === "" && this.valor === ""){
        this.segundoValor = this.primeiroValor;
    } else if (this.segundoValor === ""){
        this.segundoValor = this.valor;
    }

    switch(this.operador){
        case '+':
            this.resultado = parseFloat(this.primeiroValor) + parseFloat(this.segundoValor);
            break;
        case '-':
            this.resultado = parseFloat(this.primeiroValor) - parseFloat(this.segundoValor);
            break;
        case '*':
            this.resultado = parseFloat(this.primeiroValor) * parseFloat(this.segundoValor);
            break;
        case '/':
            if(segundoValor == 0){
                this.resultado = 0;
            } else{
                this.resultado = parseFloat(this.primeiroValor) / parseFloat(this.segundoValor);
            }
            break;
        default:
            //apertando o botão de igual sem clicar no operador, o valor ta dela é mantido até que seja escolhido um operador
            return;
    }
    
    this.resultado = String(Number(this.resultado.toFixed(2)));
    mostrarValorTela(this.resultado);
    
    this.primeiroValor = this.resultado; //o valor do resultado passa a ser o primeiro valor utilizado no calculo, no caso do usuário continuar utilizando a calculadora
    this.valor = "";
    
}