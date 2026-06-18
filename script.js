document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contato-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const mensagem = form.querySelector('textarea').value;

        const texto = `Olá! Meu nome é ${nome}.\nE-mail: ${email}\n\n${mensagem}`;
        const numero = '5586981544529';
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');
        form.reset();
    });

    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
