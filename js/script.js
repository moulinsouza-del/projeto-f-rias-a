// Mensagem no console para confirmar que o site carregou
console.log("Site da Lica carregado ♡");


// Animação das seções ao aparecerem na tela

const elementos = document.querySelectorAll(".section, .card-custom");


const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

});



elementos.forEach((elemento) => {

    elemento.classList.add("animar");

    observer.observe(elemento);

});
