alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
let chute = prompt('escolha um número entre 1 e 30');

if (chute == numeroSecreto){
    alert(`Você acertou o número secreto que era: ${numeroSecreto}`);
} else {
    alert('você errou')
}