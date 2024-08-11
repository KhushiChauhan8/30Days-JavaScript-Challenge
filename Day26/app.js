const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    const message = event.data;
    console.log('Message from server:', message);
    displayMessage(message);
};

socket.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

socket.onerror = (error) => {
    console.log('WebSocket error:', error);
};

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = document.getElementById('chat-input').value;
    if (message) {
        socket.send(message);
        document.getElementById('chat-input').value = '';  // Clear the input
    }
}

function displayMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;  // Display the message as text
    chatWindow.appendChild(newMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;  // Scroll to the bottom
}
