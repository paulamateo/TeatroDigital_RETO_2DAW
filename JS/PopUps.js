document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('popup').classList.add('active');
        document.getElementById('overlay').classList.add('active');
    });
});

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});
