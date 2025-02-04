const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('activo', window.scrollY > 0);
    })