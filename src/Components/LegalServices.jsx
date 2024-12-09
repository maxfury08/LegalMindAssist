import React from "react";
import { FaGavel } from "react-icons/fa"; 
import scales from "../assets/scales.png"; 
import legal from "../assets/legal.png"; 

const LegalServices = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-8">
      <div className="grid grid-cols-3 max-w-3xl gap-0 mx-auto items-center">
        <Card title="Ask Your Question" desc="Type your legal query into the chat interface." />   
        <div></div>
        <Card title="Get Instant Advice" desc="Receive accurate legal advice tailored to your needs." />
        <div></div>
        {/* Middle Image */}
        <div className="flex justify-center items-center">
          <img src={scales} alt="Scales of Justice" className="w-[300px]" />
        </div>
        <div></div>
        <Card title="Upload Documents" desc="Submit your legal documents for summarization." />
        <div></div>
       <Card title="Review Summaries" desc="Read clear and concise summaries of your documents." />
      </div>
    </div>
  );
};

export default LegalServices;


function Card({ title, desc }) {
    return(
        <>
        <div className="flex flex-col items-center text-center px-6 ">
          <img src={legal} alt="legal" className="mx-auto" />
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </div>
        </>
    );
}
