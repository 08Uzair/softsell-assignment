"use client";

import React, { useState } from "react";
// import { Chatbot } from "./Chatbot";
import Lottie from 'react-lottie-player';
import robot from '../../../public/assets/Images/robot.json';
import { Chatbot } from "./Chatbot";

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className=" p-2 lg:p-5 bg-[#232323] rounded-full" onClick={() => setIsOpen(true)}>
      <Lottie
            loop
            animationData={robot}
            play
            style={{ width: 80, height: 80 }}
            className='w-12 h-12 lg:w-16 lg:h-16'
          />
      </button>
      <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ChatbotButton;
