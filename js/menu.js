var btnMenu = document.getElementById('btnBars');
var Nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
    Nav.classList.toggle('mostrar');
});