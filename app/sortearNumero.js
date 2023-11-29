//Math.random gera números (excluindo o 1) aleatórios automaticamente.
//parseInt = gera numeros inteiros somente.

const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto: ' + numeroSecreto)

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML - maiorValor