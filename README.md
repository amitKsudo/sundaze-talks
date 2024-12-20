# Sundaze Talks

Sundaze Talks is a real-time chat application that utilizes Flask and Socket.IO for seamless communication. This app features end-to-end encryption notes and allows users to set their usernames.

## Features

- Real-time messaging
- User authentication with usernames
- End-to-End encryption indication

## Technologies Used

- Flask: A micro web framework for Python
- Flask-SocketIO: Enables real-time communication between clients and the server
- HTML/CSS: For the frontend design
- JavaScript: For client-side interactions
- Poppins: Google font for stylish typography

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Python 3.x
- pip (Python package installer)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amitKsudo/sundaze-talks.git
   cd sundaze-talks

2. **Install the required libraries:**

    ```bash
    pip install flask flask-socketio

## Running the Application

1. **Start the Flask server:**
    ```bash
    python app.py

2. **Open your browser and navigate to:**

    http://localhost:5000

## Directory Structure

```bash
sundaze-talks/
│
├── static/
│   ├── images/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── chat.html
│
└── app.py
