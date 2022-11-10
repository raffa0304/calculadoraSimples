

function conta() {

    let valorA = document.getElementById('valorA').value
    let valorB = document.getElementById('valorB').value
    let operador = document.getElementById('operador').value

    let valorAAdicao = parseFloat(valorA)
    let valorBAdicao = parseFloat(valorB) 

    if (operador === 'adicao') {
        resultado = valorAAdicao + valorBAdicao
    } if (operador === 'subtracao') {
        resultado = valorA - valorB
    } if (operador === 'mult') {
        resultado = valorA * valorB
    } if (operador === 'divisao') {
        resultado = valorA / valorB
    }

    let resultadoConta = document.getElementById('resultadoConta');
    resultadoConta.innerText = resultado
}
