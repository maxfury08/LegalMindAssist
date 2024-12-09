import React from "react";
import icon from "../assets/icon.png";
import Text from "./Text";
const Features = () => {
  return (
    <div id="features" className="px-16 pb-12 text-center">
      <div>
        <Text text="Key Features" />
        <p className=" text-gray-300 mx-auto max-w-3xl">
          Transforming Legal Assistance with AI Get instant legal advice and
          document summaries with our advanced AI chatbot. Whether you need help
          with civil, criminal, corporate, or family law, Legal Mind Assist is
          here to guide you through every step.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-4 justify-between">
        <Card
          title="AI Chatbot"
          desc="Get instant legal advice and document summaries with our advanced AI chatbot. Whether you need help with civil, criminal, corporate, or family law, Legal Mind Assist is here to guide you through every step."
        />
        <Card
          title="AI Chatbot"
          desc="Get instant legal advice and document summaries with our advanced AI chatbot. Whether you need help with civil, criminal, corporate, or family law, Legal Mind Assist is here to guide you through every step."
        />
        <Card
          title="AI Chatbot"
          desc="Get instant legal advice and document summaries with our advanced AI chatbot. Whether you need help with civil, criminal, corporate, or family law, Legal Mind Assist is here to guide you through every step."
        />
        <Card
          title="AI Chatbot"
          desc="Get instant legal advice and document summaries with our advanced AI chatbot. Whether you need help with civil, criminal, corporate, or family law, Legal Mind Assist is here to guide you through every step."
        />
      </div>
    </div>
  );
};

export default Features;

export const Card = ({ title, desc }) => {
  return (
    <div className="px-8">
      <img src={icon} alt="icon" className="mx-auto" />
      <h1 className="text-yellow-200 my-3">{title}</h1>
      <p className="text-white text-sm">{desc}</p>
    </div>
  );
};
