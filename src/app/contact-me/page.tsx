import React from "react";
import ContactForm from "../../../components/ContactForm";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
    >
      {/* Gradient overlay for better contrast on the background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div
        style={{ backgroundImage: "url(/atombg-comp.webp)" }}
        className="relative  h-[70%] w-[85%] md:w-[70%] rounded-[30px] bg-gray-800 border-white border-10 shadow-xl overflow-hidden"
      >
        <div className="absolute left-10 bottom-10 w-[80%] md:w-[50%] z-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
