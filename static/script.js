const socket = io();
let username;

document.getElementById('username_button').onclick = function() {
    username = document.getElementById('username_input').value.trim();
    const errorMessageDiv = document.getElementById('username_error');
    
    if (username) {
        errorMessageDiv.innerText = "";
        errorMessageDiv.style.display = 'none';
        
        socket.emit('join', username);
        document.getElementById('username-container').style.display = 'none';
    } else {
        errorMessageDiv.innerText = "Please enter a valid username.";
        errorMessageDiv.style.display = 'block';
    }
};

document.getElementById('send_button').onclick = function() {
    if (!username) {
        const errorMessageDiv = document.getElementById('username_error');
        errorMessageDiv.innerText = "Please set a username before sending messages.";
        errorMessageDiv.style.display = 'block';
        return;
    }

    const message = document.getElementById('message_input').value;
    if (message.trim()) {
        socket.emit('message', message);
        document.getElementById('message_input').value = '';
    }
};

socket.on('message', function(data) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'receiver');
    messageDiv.innerText = data;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
