// Array com as palavras que serão exibidas
const palavras = ["muda tudo!","agiliza!", "simplifica!"];
let palavraAtual = 0;
let caractereAtual = 0;
let estaApagando = false;

// Elemento onde o texto será exibido
const elementoTexto = document.querySelector('.change');

// Função para digitar o texto
function digitarTexto() {
    if (!elementoTexto) return;
    
    const palavra = palavras[palavraAtual];
    
    if (!estaApagando) {
        // Adicionando caracteres
        elementoTexto.textContent = palavra.substring(0, caractereAtual + 1);
        caractereAtual++;
        
        if (caractereAtual >= palavra.length) {
            // Aguarda 3 segundos antes de começar a apagar
            setTimeout(() => {
                estaApagando = true;
                digitarTexto();
            }, 3000);
        } else {
            setTimeout(digitarTexto, 120);
        }
    } else {
        // Apagando caracteres
        elementoTexto.textContent = palavra.substring(0, caractereAtual - 1);
        caractereAtual--;
        
        if (caractereAtual <= 0) {
            estaApagando = false;
            palavraAtual = (palavraAtual + 1) % palavras.length;
            caractereAtual = 0;
            setTimeout(digitarTexto, 800);
        } else {
            setTimeout(digitarTexto, 80);
        }
    }
}

// Inicia o efeito quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    if (elementoTexto) {
        console.log('Elemento encontrado, iniciando efeito de digitação');
        digitarTexto();
    } else {
        console.log('Elemento .change não encontrado');
    }
});
