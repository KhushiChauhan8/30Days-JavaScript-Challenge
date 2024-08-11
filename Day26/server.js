const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        const textMessage = message.toString();
        console.log(`Received: ${textMessage}`);
        
        // Broadcast the received message to all clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Client: ${textMessage}`);
            }
        });

        // Check if the message ends with a question mark
        if (textMessage.trim().endsWith('?')) {
            // Respond with a predefined answer
            socket.send("Server: That's an interesting question!");
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
