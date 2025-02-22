import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MoreHorizontal, Phone, Video, Heart } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "client";
  content: string;
  timestamp: string;
  isLiked?: boolean;
}

// Predefined conversation flow
const conversationScript = [
  {
    type: "client",
    content: "👋 Hey! Thanks for your interest in our summer collection!"
  },
  {
    type: "user",
    content: "Hi! I saw your new dress collection on Instagram 😊"
  },
  {
    type: "client",
    content: "That's great! Yes, we just launched our new summer line 🌸"
  },
  {
    type: "user",
    content: "The blue floral dress caught my eye. Is it available in size M?"
  },
  {
    type: "client",
    content: "Yes! The Blue Paradise Dress is available in M. It's one of our bestsellers! 💫"
  },
  {
    type: "user",
    content: "Perfect! What's the price?"
  },
  {
    type: "client",
    content: "It's $79.99, and we're running a 20% off promotion this week! 🎉"
  },
  {
    type: "user",
    content: "That's a great deal! How long is shipping?"
  },
  {
    type: "client",
    content: "We offer free express shipping! You'll receive it in 2-3 business days 🚚✨"
  },
  {
    type: "user",
    content: "Amazing! I'll place my order right now!"
  },
  {
    type: "client",
    content: "Wonderful! Don't forget to use code SUMMER20 for your discount 🌟 Let me know if you need anything else!"
  }
];

const AutomatedInstagramChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Auto-scroll when messages update
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Start the conversation
    const interval = setInterval(() => {
      if (currentMessageIndex < conversationScript.length) {
        const newMessage = {
          id: Date.now().toString(),
          type: conversationScript[currentMessageIndex].type,
          content: conversationScript[currentMessageIndex].content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, newMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        // Smoothly transition to restart
        setTimeout(() => {
          setMessages([]);
          setCurrentMessageIndex(0);
        }, 2000); // Shorter pause before restart for better flow
      }
    }, 2000); // Send a new message every 2 seconds

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  const toggleLike = (messageId: string) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === messageId ? { ...msg, isLiked: !msg.isLiked } : msg
      )
    );
  };

  return (
    <div className="max-w-[420px] h-[600px] mx-auto bg-white shadow-xl flex flex-col rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-[2px]">
              <div className="w-full h-full rounded-full bg-white p-[2px]">
                <img
                  src="https://ui-avatars.com/api/?name=Fashion+Store&background=random"
                  alt="Store"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/32x32.png?text=FS`;
                  }}
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white">Fashion Store</h3>
              <p className="text-xs text-white/80">Active now</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-white hover:opacity-80 cursor-pointer" />
          <Video className="w-6 h-6 text-white hover:opacity-80 cursor-pointer" />
          <MoreHorizontal className="w-6 h-6 text-white hover:opacity-80 cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-4 py-3 bg-[#FAFAFA] bg-opacity-95 backdrop-blur-[2px] relative">
        {/* Instagram-style subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-gray-100/30 pointer-events-none" />
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] flex flex-col ${message.type === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`px-4 py-3 rounded-3xl ${
                      message.type === "user"
                        ? "bg-[#0095F6] text-white"
                        : "bg-white text-gray-900 shadow-sm border border-gray-100"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                    {message.type === "user" && (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleLike(message.id)}
                        className="focus:outline-none"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            message.isLiked ? "fill-[#FD1D1D] text-[#FD1D1D]" : "text-gray-400 hover:text-gray-600"
                          }`}
                        />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 py-3 border-t bg-white sticky bottom-0">
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-[#FAFAFA] px-4 py-2.5 rounded-full text-sm text-gray-500 border border-gray-200 focus-within:border-[#0095F6] transition-colors cursor-text">
            Message...
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedInstagramChat;