const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('activo', window.scrollY > 0);
    })


document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita la redirección

        const formData = new FormData(this); // Obtiene los datos del formulario

        fetch('https://formsubmit.co/edwardlozanop@gmail.com', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert('Formulario enviado con éxito!');
                this.reset(); // Reinicia el formulario
            } else {
                alert('Hubo un problema al enviar el formulario.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al enviar el formulario.');
        });
    });