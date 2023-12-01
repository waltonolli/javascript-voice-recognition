function verificaSeChuteTemValorValido(chute) {
    const numero = + chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido, fale somente números</div>'
        return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Número inválido, o número secreto precisa estar entre ${menorValor} e ${maiorValor}<</div>`
        return // para não executar mais a função
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O Número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O Número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O Número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
    
}

function chuteInvalido(numero) {
    return Number.isNaN(numero) //confere se é um numero.
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload() //recarrega a pagina e reinicia o jogo.
    }
})