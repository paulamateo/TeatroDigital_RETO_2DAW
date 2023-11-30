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