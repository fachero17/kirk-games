function sendMessage() {
    const messageInput = document.querySelector('.mensaje');
    const messageText = messageInput.value;
    const userName = "Usuario :"; // Aquí puedes obtener el nombre del usuario dinámicamente
    if (messageText.trim() !== "") {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('chat_message');
        messageContainer.innerHTML = `<strong>${userName}</strong> ${messageText}`;
        document.getElementById('chat_messages').appendChild(messageContainer);
        messageInput.value = '';
    }
}

document.querySelector('.send_button').addEventListener('click', sendMessage);

document.querySelector('.mensaje').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});