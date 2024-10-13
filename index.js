// Selecionar os elementos principais
const track = document.querySelector('.carrossel-imagens');
const slides = document.querySelectorAll('.carrossel-slide');
const prevButton = document.querySelector('.carrossel-controle-prev');
const nextButton = document.querySelector('.carrossel-controle-next');

let slideAtual = 0; // Para controlar o slide atual

// Função que move o carrossel
function moverCarrossel(index) {
    const tamanhoSlide = slides[0].clientWidth; // Pega a largura do slide
    track.style.transform = `translateX(-${index * tamanhoSlide}px)`; // Move o carrossel
    atualizarControles(); // Atualiza os controles após mover o carrossel
}

// Função para atualizar o estado dos botões
function atualizarControles() {
    // Seta da esquerda
    if (slideAtual === 0) {
        prevButton.classList.add('desativado'); // Adiciona a classe de desativado
    } else {
        prevButton.classList.remove('desativado'); // Remove a classe de desativado
    }

    // Seta da direita
    if (slideAtual === slides.length - 1) {
        nextButton.classList.add('desativado'); // Adiciona a classe de desativado
    } else {
        nextButton.classList.remove('desativado'); // Remove a classe de desativado
    }
}

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
    if (slideAtual < slides.length - 1) {
        slideAtual++; // Avança para o próximo slide
        moverCarrossel(slideAtual);
    }
});

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
    if (slideAtual > 0) {
        slideAtual--; // Volta para o slide anterior
        moverCarrossel(slideAtual);
    }
});

// Atualiza o estado dos botões ao carregar
atualizarControles();
