console.log("Site da Lica carregado ♡");


const cards = document.querySelectorAll(".card-custom");


cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px)";
    });


    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
