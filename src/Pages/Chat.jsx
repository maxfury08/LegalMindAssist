import React, { useState } from "react";
import ChatBody from "../Components/ChatBody";

const Chat = () => {
    const [messages, setMessages] = useState([
        {
          sender: "bot",
          text: "Hello, welcome to Legal Mind Assist! How can I assist you today?",
        },
      ]);
    const sendMessage = (text) => {
        setMessages([...messages, { sender: "user", text }]);
    
        // Mock bot response
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "In Sri Lanka, the legal age for signing a contract is 18 years.",
            },
          ]);
        }, 1000);
      };
    
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          <div className="w-full max-w-xl bg-black text-white rounded-xl p-4 shadow-lg">
            <ChatBody messages={messages} sendMessage={sendMessage} />
          </div>
        </div>
    </div>
  )
}

export default Chat