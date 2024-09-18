const heartsContainer = document.getElementById('hearts-container');

// Función para crear corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Tamaño aleatorio del corazón
    const size = Math.random() * 50 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Posición horizontal aleatoria
    heart.style.left = `${Math.random() * 100}vw`;

    // Duración aleatoria de la animación
    heart.style.animationDuration = `${Math.random() * 4 + 3}s`;
    heart.style.animationDelay = `${Math.random() * 2}s`;

    heartsContainer.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Crear corazones cada 150ms para una animación más animada
setInterval(createHeart, 150);