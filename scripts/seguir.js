document.querySelector('.seguir').addEventListener('click', function() {
    this.textContent = this.textContent === 'Seguir' ? 'No seguir' : 'Seguir';
});

document.querySelector('.suscribirse').addEventListener('click', function() {
    this.textContent = this.textContent === 'Suscribirse' ? ' Eliminar Suscribircion' : 'Suscribirse';
});