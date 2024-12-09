import React, { useEffect, useState } from 'react';
import botimage from '../assets/robo.png';
import userimage from '../assets/man.png';

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const initialBotMessage = {
      text: "Hi! Ask me your law question.",
      sender: 'bot'
    };
    setMessages([initialBotMessage]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    try {
      const response = await fetch('http://localhost:8080/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.answer, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' },
      ]);
    }

    setInput('');
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="flex flex-col justify-between min-h-[80vh] bg-black text-white p-4">
      {/* Chat messages container */}
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-2`}
          >
            {message.sender === 'bot' && (
              <div className="w-10 h-10 mr-2">
                <img src={botimage} alt="Bot" className="rounded-full" />
              </div>
            )}
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === 'bot' ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className="w-10 h-10 ml-2">
                <img src={userimage} alt="User" className="rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat input form at the bottom */}
      <form onSubmit={handleSend} className="flex items-center">
        <input
          type="text"
          className="w-full p-2 rounded-full bg-gray-800 text-gray-300"
          placeholder="Type a new message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend(e)}
        />
        <button type="submit" className="ml-2 p-2 rounded-full bg-yellow-500 text-white">
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatBody;
