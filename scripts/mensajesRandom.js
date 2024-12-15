document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat_messages');
    const messages = [
        "¡Hola a todos!",
        "¿Qué tal?",
        "¡Disfrutando del stream!",
        "¡Este canal es genial!",
        "¿Alguien más está viendo?",
        "¡Me encanta este contenido!",
        "¡Saludos desde España!",
        "¿Qué opinan del juego?",
        "¡Vamos equipo!",
        "¡Gran jugada!",
        "¡Qué emocionante!",
        "¡No puedo esperar a ver qué pasa!",
        "¡Esto es increíble!",
        "¡Qué buen momento!",
        "¡Estoy disfrutando mucho!",
        "¡Qué gran comunidad!",
        "¡Esto es muy divertido!",
        "¡Qué buena jugada!",
        "¡Vamos a ganar!",
        "¡Esto es lo mejor!"
    ];
    messages.push(
        "¡Qué buena estrategia!",
        "¡Increíble jugada!",
        "¡Esto es muy emocionante!",
        "¡No puedo creerlo!",
        "¡Qué sorpresa!",
        "¡Vamos a por más!",
        "¡Esto es adictivo!",
        "¡Qué gran equipo!",
        "¡Estoy impresionado!",
        "¡Qué intensidad!",
        "¡Esto es genial!",
        "¡Qué espectáculo!",
        "¡Vamos con todo!",
        "¡Esto es muy interesante!",
        "¡Qué buena partida!",
        "¡Esto es muy entretenido!",
        "¡Qué emoción!",
        "¡Esto es increíble!",
        "¡Qué gran jugada!",
        "¡Vamos a ganar!"
    );

    const userNames = [
        "Carlos",
        "María",
        "Juan",
        "Ana",
        "Luis",
        "Elena",
        "Pedro",
        "Sofía",
        "Jorge",
        "Lucía",
        "Miguel",
        "Laura",
        "Andrés",
        "Patricia",
        "Raúl",
        "Carmen",
        "Diego",
        "Marta",
        "Alberto",
        "Isabel"
    ];
    function addRandomMessage() {
        const randomMessageIndex = Math.floor(Math.random() * messages.length);
        const randomUserIndex = Math.floor(Math.random() * userNames.length);
        const message = messages[randomMessageIndex];
        const userName = userNames[randomUserIndex];
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<p><strong>${userName}:</strong> ${message}</p>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    setInterval(addRandomMessage, 2000);
});