"use client";

import { generateGeminiResponse } from "../../app/actions/gemini";
import { useState } from "react";
import Lottie from "react-lottie-player";
import robot from "../../../public/assets/Images/chatbot.json";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import bot from "../../../public/assets/Images/bot.png";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  subText?: string;
  buttons?: { text: string; url: string }[];
};

export function Chatbot({ isOpen, onClose }: SidebarProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi, I'm your AI Assistant! 👋",
      subText: "How may I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await generateGeminiResponse(message);
      if (response && response.data) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text:"response.data", // Directly use response data (HTML)
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("Invalid response from Gemini");
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "I apologize, but I'm having trouble responding right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const TypingDots: React.FC = () => {
    const [dots, setDots] = useState("");

    React.useEffect(() => {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
      }, 500); // Adjust the speed of dot increment here

      return () => clearInterval(interval);
    }, []);

    return <p>Thinking{dots}</p>;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 right-0 h-full w-[90%] lg:w-[40%] bg-[#171717] shadow-lg"
          >
            <div className="w-full flex flex-col h-full overflow-hidden relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-[#CBFB45] rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="flex-1 overflow-y-auto mt-12 lg:mt-0 p-3 lg:p-6 custom-scrollbar">
                {messages.map((msg, index) => (
                  <div
                    key={msg.id}
                    className={`flex items-center ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    } gap-3 mb-4`}
                  >
                    {msg.type === "bot" && (
                      <div className="w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center flex-shrink-0">
                        {isLoading && index === messages.length - 1 ? (
                          <Lottie
                            loop
                            animationData={robot}
                            play
                            style={{ width: 50, height: 50 }}
                            className=""
                          />
                        ) : (
                          <Image src={bot} alt="bot-image" />
                        )}
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] ${
                        msg.type === "user" ? "" : ""
                      } p-0 lg:p-4 rounded-2xl`}
                    >
                      <div
                        className={`mb-2 text-[12px] lg:text-[16px] ${
                          msg.type === "user"
                            ? "text-white"
                            : "text-[#CBFB45]"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: msg.text, // Render Markdown/HTML content dynamically
                        }}
                      ></div>
                      {msg.subText && (
                        <p className="text-gray-400 whitespace-pre-line text-[10px] lg:text-[14px]">
                          {msg.subText}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                {/* Typing animation for bot */}
                {isLoading && (
                  <div className="flex items-center justify-start gap-3 mb-4">
                    <div className="w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center flex-shrink-0">
                      <Lottie
                        loop
                        animationData={robot}
                        play
                        style={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div className="px-4 py-2 text-[#CBFB45]">
                      <TypingDots />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-zinc-800">
                <div className="flex gap-2 rounded-[50px]">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 border-2 border-[#CBFB45] text-white font-bold placeholder-white px-4 py-3 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#CBFB45] text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    className="bg-[#CBFB45] flex justify-center items-center p-2 hover:bg-zinc-900 transition-colors rounded-full"
                  >
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrowBtn"
                    >
                      <rect x="0.5" width="32" height="32" rx="16" fill="#171717" />
                      <path
                        d="M16.5003 10.6665L15.5603 11.6065L19.2803 15.3332H11.167V16.6665H19.2803L15.5603 20.3932L16.5003 21.3332L21.8337 15.9998L16.5003 10.6665Z"
                        fill="#CBFB45"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
