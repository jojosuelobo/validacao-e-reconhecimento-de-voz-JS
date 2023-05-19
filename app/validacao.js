function verificaValorChute(chute) {
    if (chute === 'game over' || chute === 'Game over'){
        document.body.innerHTML = `
            <h3 class="fim-de-jogo">Game Over!</h3>
        `;
    }

    const numero = +chute
    
    if(chuteForInvalido(numero)){
       elementoChute.innerHTML += '<div> Valor inválido !! </div>';
    }
    if (numeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div> Valor inválido !! Número deve estar entre
         ${menorValor} e ${maiorValor} </div>`;
    }
    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era: ${numero} </h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-up"></i> </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-down"></i> </div>
        `
    }
}

function chuteForInvalido(numero) { 
        return Number.isNaN(numero)
}
function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente' ){
        window.location.reload()
    }
})