
const hamburguer = document.getElementById('hamburguer');
const menuMobile = document.getElementById('mobile-menu');
const hamburguerIcon = document.getElementById('hamburguer-icon');


hamburguer.addEventListener('click', ()=>{

    menuMobile.classList.toggle('active');
    hamburguerIcon.classList.toggle('active');


    if (hamburguerIcon.classList.contains('active')){

        hamburguerIcon.src = "/assets/svgs/close.svg";
    } else {
        hamburguerIcon.src =  "/assets/svgs/hamburguer-menu.svg";
    }
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Para alternar entre diferentes estilos
function changeHeaderStyle(style) {
    const header = document.querySelector('header');
    
    // Remove todas as classes de estilo
    header.classList.remove('transparent', 'glass', 'gradient');
    
    // Adiciona a nova classe
    if (style !== 'default') {
        header.classList.add(style);
    }
}

