const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");
const botoesAbrirFormulario = document.querySelectorAll(".abrir-formulario");

function mostrarFormulario() {
    formulario.style.left = "50%";
    formulario.style.transform = "translate(-50%, -50%)";
    mascara.style.visibility = "visible";
}

function esconderFormulario() {
    formulario.style.left = "-100%";
    formulario.style.transform = "translate(0, -50%)";
    mascara.style.visibility = "hidden";
}

botoesAbrirFormulario.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        evento.preventDefault();
        mostrarFormulario();
    });
});

mascara.addEventListener("click", esconderFormulario);

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        esconderFormulario();
    }
});
