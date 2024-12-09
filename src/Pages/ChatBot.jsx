// App.js
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ChatBody from "../Components/ChatBody";
import Chat from "./Chat";
import Navbar from "../Components/Navbar";

function ChatBot() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 

  
  return (
    <div className="bg-black">
      <Navbar/>
      <div className="grid grid-cols-4 bg-black min-h-screen">
        
        <div className="px-8 py-8 mt-12 ">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="col-span-3">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
