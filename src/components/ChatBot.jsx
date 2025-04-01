import { Maximize2, MessageCircle, Minimize2, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm Al-Jon's virtual assistant. How can I help you?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const AIicon = "/AI-Icon.jpeg";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isMinimized]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const hideGreeting = () => {
    setShowGreeting(false);
  };

  const openChatFromGreeting = () => {
    setShowGreeting(false);
    toggleChat();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Mock API response - replace with your actual API call
      setTimeout(() => {
        // Simulated response based on questions
        let response = "";
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("project") || lowerInput.includes("work")) {
          response =
            "Al-Jon has worked on several projects, including an E-Commerce Platform, Security Dashboard, Portfolio Website, and Task Management App. All of these are built with React, Node.js, and Tailwind CSS.";
        } else if (
          lowerInput.includes("skill") ||
          lowerInput.includes("tech")
        ) {
          response =
            "Al-Jon's technical expertise spans across multiple domains of web development and security. He works with technologies like React, Node.js, Vue.js, Express, and has security experience including Penetration Testing and Authentication Systems.";
        } else if (
          lowerInput.includes("contact") ||
          lowerInput.includes("email") ||
          lowerInput.includes("reach")
        ) {
          response =
            "You can contact Al-Jon via email at aljon.media0@gmail.com or by phone at +63 906 920 8512. He's based in General Trias, Cavite, Philippines.";
        } else if (
          lowerInput.includes("location") ||
          lowerInput.includes("based") ||
          lowerInput.includes("live")
        ) {
          response = "Al-Jon is based in General Trias, Cavite, Philippines.";
        } else if (
          lowerInput.includes("hello") ||
          lowerInput.includes("hi") ||
          lowerInput.includes("hey")
        ) {
          response =
            "Hello! I'm Al-Jon's virtual assistant. How can I help you today?";
        } else if (
          lowerInput.includes("background") ||
          lowerInput.includes("experience")
        ) {
          response =
            "Al-Jon has a background in both development and security. He brings a unique perspective to projects, ensuring they're not only functional but also user-friendly and secure.";
        } else {
          response =
            "Thanks for your message. I'm Al-Jon's virtual assistant. If you have questions about his projects, skills, or would like to get in touch, feel free to ask!";
        }

        setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I couldn't process your request right now.",
          sender: "bot",
        },
      ]);
      setLoading(false);
    }
  };

  // Initial chat bubble for first-time users (like Messenger)
  const FirstTimeGreeting = () => {
    if (!isOpen && messages.length === 1 && showGreeting) {
      return (
        <div
          className="fixed bottom-20 right-6 w-64 bg-[#333333] p-4 rounded-lg shadow-lg z-40 animate-fade-in cursor-pointer"
          onClick={hideGreeting} // Just hide the greeting when clicked
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={AIicon}
                alt="AI Assistant"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white text-sm">
                Hi there! I'm Al-Jon's virtual assistant. How can I help you?
              </p>
              <div className="mt-2 flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent's onClick from firing
                    openChatFromGreeting();
                  }}
                  className="text-xs text-[#90D5FF] hover:underline"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Custom scrollbar styles using CSS
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #2a2a2a;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #777;
    }
    
    .animate-fade-in {
      animation: fadeIn 0.3s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>

      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-[#90D5FF] text-[#1a1a1a] shadow-lg hover:bg-[#7BC0EA] transition-all duration-300 z-50 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>

      {/* First time greeting bubble */}
      <FirstTimeGreeting />

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-20 right-6 w-80 sm:w-96 bg-[#333333] rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-300 ${
            isMinimized ? "h-14" : "h-[#500px]"
          }`}
        >
          {/* Chat header - Now always visible */}
          <div className="bg-[#222222] px-4 py-3 flex justify-between items-center border-b border-[#444444]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={AIicon}
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-white">Al-Jon's Assistant</h3>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleMinimize}
                className="p-1.5 text-gray-400 hover:text-white transition-colors"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? (
                  <Maximize2 size={18} />
                ) : (
                  <Minimize2 size={18} />
                )}
              </button>
              <button
                onClick={toggleChat}
                className="p-1.5 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages area with custom scrollbar */}
              <div
                ref={messagesContainerRef}
                className="h-72 overflow-y-auto px-4 py-3 bg-[#2a2a2a] custom-scrollbar"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-3 flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 self-end">
                        <img
                          src={AIicon}
                          alt="AI Assistant"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg max-w-[75%] ${
                        message.sender === "user"
                          ? "bg-[#90D5FF] text-[#1a1a1a]"
                          : "bg-[#444444] text-white"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="mb-3 flex justify-start">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0 self-end">
                      <img
                        src={AIicon}
                        alt="AI Assistant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 rounded-lg bg-[#444444] text-white">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                          style={{ animationDelay: "0s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <form
                onSubmit={handleSubmit}
                className="p-4 bg-[#222222] border-t border-[#444444]"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me about Al-Jon..."
                    className="flex-1 p-2.5 rounded-l-md bg-[#444444] text-white border-none focus:outline-none focus:ring-1 focus:ring-[#90D5FF]"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="p-2.5 rounded-r-md bg-[#90D5FF] text-[#1a1a1a] hover:bg-[#7BC0EA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
