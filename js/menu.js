const hamburguer = document.getElementById('hamburguer');
const menuMobile = document.getElementById('mobile-menu');


hamburguer.addEventListener('click', ()=>{
    menuMobile.classList.toggle('active');
});