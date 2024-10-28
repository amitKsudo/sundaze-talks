from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask import request

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app)

users = {}

@app.route('/')
def index():
    return render_template('chat.html')

@socketio.on('join')
def handle_join(username):
    users[request.sid] = username
    emit('message', f"{username} has joined the chat!", broadcast=True)

@socketio.on('message')
def handle_message(data):
    username = users.get(request.sid, 'Unknown')
    emit('message', f"{username}: {data}", broadcast=True)

@socketio.on('disconnect')
def handle_disconnect():
    username = users.get(request.sid, 'Unknown')
    if username in users.values():
        emit('message', f"{username} has left the chat.", broadcast=True)
        del users[request.sid]

if __name__ == '__main__':
    socketio.run(app)
