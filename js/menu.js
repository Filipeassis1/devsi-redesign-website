
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



