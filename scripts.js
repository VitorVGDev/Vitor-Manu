// Texto para o efeito de digitação
const text = "Este site celebra o nosso amor, que é tão lindo!";

// Índice para percorrer o texto
let index = 0;

// Função para exibir o texto com efeito de digitação
function typeEffect() {
    // Verifica se o índice é menor que o comprimento do texto
    if (index < text.length) {
        // Adiciona uma letra ao texto exibido
        document.getElementById("typing-effect").innerHTML += text.charAt(index);
        // Incrementa o índice
        index++;
        // Define o intervalo para chamar a função novamente (50ms para uma animação suave)
        setTimeout(typeEffect, 50);
    }
}

// Chama a função para iniciar o efeito de digitação quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});

// Script para a contagem regressiva até o aniversário de namoro

// Data do aniversário de namoro (18 de setembro de 2024)
const anniversaryDate = new Date('2024-09-18T00:00:00');

// Função para atualizar a contagem regressiva
function updateCountdown() {
    // Data e hora atuais
    const now = new Date();

    // Diferença entre a data do aniversário e a data atual em milissegundos
    const diff = anniversaryDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza o elemento HTML com a contagem regressiva
    document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Chama a função para iniciar a contagem regressiva quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    updateCountdown();
    // Define um intervalo para atualizar a contagem regressiva a cada segundo
    setInterval(updateCountdown, 1000);
});

// Script para a animação de fundo com estrelas e corações

// Função para criar um elemento de estrela ou coração
function createFallingElement(type) {
    const element = document.createElement('div');
    element.className = type;
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = Math.random() * 3 + 2 + 's'; // duração entre 2 e 5 segundos
    document.getElementById('background-animation').appendChild(element);

    // Remove o elemento após a animação terminar
    element.addEventListener('animationend', () => {
        element.remove();
    });
}

// Cria estrelas e corações a cada intervalo
setInterval(() => {
    createFallingElement('star');
    createFallingElement('heart');
}, 600); // cria uma nova estrela e um novo coração a cada 500ms
