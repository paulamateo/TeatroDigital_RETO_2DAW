document.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logoImage = document.getElementById('logoImage');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add('scrolled');
        logoImage.src = '../IMÁGENES/logo_blanco.png';
    } else {
        header.classList.remove('scrolled');
        logoImage.src = '../IMÁGENES/logo_negro.png';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.getElementById('list-icon');
    var headerPopup = document.getElementById('header__popup');

    hamburgerIcon.addEventListener('click', function() {
        headerPopup.classList.toggle('active');
    });
});