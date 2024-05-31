//Calculadora com switch
//if(currentInput == '/' || currentInput == '*' || currentInput =='+' || currentInput == '-') {}

var currentInput = ''
var currentSimbolo = ''
var currentInputB = ''
var a
var b

const appendToDisplay = (k) => {

    if (currentSimbolo === '' ) 
        {
            currentInput += k
            document.querySelector('.display').innerHTML = currentInput
            a = parseFloat(currentInput)
            console.log(`valor1: ${a}`)
        } else {
                currentInputB +=k
                document.querySelector('.display').innerHTML = currentInputB
                b = parseFloat(currentInputB)
                console.log(`valor1: ${currentInput}, valor2: ${currentInputB}`)
            }
         
}

const appendToNextDisplay = (operador) => {
    if (currentInput !== '') {
        currentSimbolo = operador;
        console.log(`Operador: ${currentSimbolo}`);
    }
}

const calcula = (m,n,operador) => {
    let resultado

    switch (operador) {
        case '+': 
            resultado=a+b;
            break;
        case '-':
            resultado = a-b;
            break;
        case '*':
            resultado = a*b;
            break;
        case '/':
            resultado = a/b;
            break;
        default:
            return `Operador inválido!`
    }
    return `O resultado da operação é: ${resultado}`
}

const Resultado = () => {

   let resultado =  calcula(a,b, currentSimbolo)
    document.querySelector('.display').innerHTML = resultado 
    console.log(` ${resultado}`)   
    currentInput=''
    currentInputB=''
}

const restart = () => {
    currentInput = ''
    currentSimbolo = ''
    currentInputB = ''
    document.querySelector('.display').innerHTML = ''

}

//Pensamentos, Vou criar uma função por fora sobre o click nos símbolos


