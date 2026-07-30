// =========================
// ALERTA DE BOAS-VINDAS
// =========================

window.onload = function () {
    alert("Bem-vinda ao Site da Lica ♡");
};


// =========================
// RELÓGIO / HORÁRIO ATUAL
// =========================

function atualizarRelogio() {

    let agora = new Date();

    let horario = agora.toLocaleTimeString("pt-BR");

    document.getElementById("relogio").innerHTML = horario;

}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();


// =========================
// MODO ESCURO
// =========================

const botaoEscuro = document.getElementById("modoEscuro");

botaoEscuro.addEventListener("click", function(){

    document.body.classList.toggle("escuro");

});


// =========================
// VOLTAR AO TOPO
// =========================

const topo = document.getElementById("topo");


window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topo.style.display = "block";

    } else {

        topo.style.display = "none";

    }

});


topo.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// =========================
// VALIDAÇÃO DO FORMULÁRIO
// =========================

const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function(event){

    event.preventDefault();


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;


    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos!");

    } else {

        alert("Mensagem enviada com sucesso, " + nome + " ♡");

        formulario.reset();

    }

});
