document.addEventListener('DOMContentLoaded', function() {

    mobileMenu();
    subMenu('.programas');
    subMenu('.paginas');

});

function mobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    console.log('click en responsive')
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar')
}

function subMenu(clase) {
    const elemento = document.querySelector(clase);
    console.log(elemento + "Padre");
    console.log('click');
    elemento.addEventListener('click', () => {
        const elemento = document.querySelector(clase + " ul");
        console.log(elemento)
        elemento.classList.toggle('mostrar--submenu');
    });
}