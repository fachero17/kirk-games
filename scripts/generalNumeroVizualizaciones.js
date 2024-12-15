function generarNumeroAleatorio(id) {
    const numeroAleatorio = Math.floor(Math.random() * 30) + 1;
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = numeroAleatorio + " k";
    }
}
window.onload = function () {
    generarNumeroAleatorio('resultado1');
    generarNumeroAleatorio('resultado2');
    generarNumeroAleatorio('resultado3');
    generarNumeroAleatorio('resultado4');
    generarNumeroAleatorio('resultado5');
    generarNumeroAleatorio('resultado6');
    generarNumeroAleatorio('resultado7');
};
