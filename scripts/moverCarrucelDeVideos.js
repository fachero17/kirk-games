let currentPositions = {}; // Objeto para rastrear las posiciones de cada carrusel

function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId); // Selecciona el carrusel correspondiente
    if (!carousel) return; // Verifica si el carrusel existe

    // Selecciona los elementos del carrusel
    const videoItems = carousel.querySelectorAll(".video_item");
    if (videoItems.length === 0) return; // Verifica si hay elementos en el carrusel

    const itemWidth = videoItems[0].offsetWidth + 10; // Ancho de cada item + margen
    const containerWidth = carousel.parentElement.offsetWidth; // Ancho visible del carrusel
    const maxScroll = itemWidth * videoItems.length - containerWidth; // Límite de desplazamiento

    // Inicializa la posición actual si no existe
    if (!currentPositions[carouselId]) {
        currentPositions[carouselId] = 0;
    }

    // Actualiza la posición según la dirección
    currentPositions[carouselId] += direction * itemWidth;

    // Limita la posición para que no exceda los límites
    currentPositions[carouselId] = Math.max(0, Math.min(currentPositions[carouselId], maxScroll));

    // Aplica el desplazamiento al carrusel
    carousel.style.transform = `translateX(-${currentPositions[carouselId]}px)`;
}
