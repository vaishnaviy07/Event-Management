import React, { useState } from 'react';
import './Chatbot.css';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [chatResponse, setChatResponse] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    const handleSendMessage = async () => {
        setLoading(true); // Set loading to true when sending the message
        try {
            const response = await fetch('http://localhost:3000/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setChatResponse(data.response);
        } catch (error) {
            console.error('Error sending message:', error);
            setChatResponse('An error occurred. Please try again.'); // Display error message
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    return (
        <div className="chatbot-container">
            <h2>Event Chatbot</h2>
            <input
                className="chatbot-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about popular events..."
            />
            <button
                className="chatbot-button"
                onClick={handleSendMessage}
                disabled={loading} // Disable button while loading
            >
                {loading ? 'Sending...' : 'Send'} {/* Change button text while loading */}
            </button>
            <p className="chatbot-response">Response: {chatResponse}</p>
        </div>
    );
};

export default ChatBot;
