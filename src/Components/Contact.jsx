import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Text from "./Text";

const Contact = () => {
  return (
    <div id="contact" className=" mx-auto py-12 mb-8
    ">
          <div className="max-w-3xl mx-auto">
      <div className="text-center my-4">
        <Text text="Contact us" />
        <p className=" text-white">
          Have questions or need further assistance? Reach out to us at
          [email@example.com] or follow us on our social media channels. Your
          privacy is important to us. Read our [Privacy Policy] and [Terms of
          Service]
        </p>
      </div>
      <div className="flex mt-8">
        <button className=" flex items-center gap-3 py-2 px-6 rounded-full bg-white text-black font-semibold text-sm md:text-lg">
          Try for free
          <FaAngleRight className="text-black text-2xl" />
        </button>
        <button className=" flex items-center gap-3 py-2 px-6 rounded-full  text-gray-400 font-semibold text-sm md:text-lg">
          Request a Demo
          <FaAngleRight className=" text-2xl" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Contact;
