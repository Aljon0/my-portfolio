import { Maximize2, MessageCircle, Minimize2, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ChatBot = () => {
  const { theme } = useTheme();
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

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { text: data.response, sender: "bot" },
        ]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I couldn't process your request right now. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const FirstTimeGreeting = () => {
    if (!isOpen && messages.length === 1 && showGreeting) {
      return (
        <div
          className={`fixed bottom-20 right-6 w-64 p-4 rounded-lg shadow-lg z-40 animate-fade-in cursor-pointer ${
            theme === "light" ? "bg-white" : "bg-[#333333]"
          }`}
          onClick={hideGreeting}
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
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Hi there! I'm Al-Jon's virtual assistant. How can I help you?
              </p>
              <div className="mt-2 flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
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

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: ${theme === "light" ? "#f1f1f1" : "#2a2a2a"};
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: ${theme === "light" ? "#c1c1c1" : "#555"};
      border-radius: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: ${theme === "light" ? "#a8a8a8" : "#777"};
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

      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-[#90D5FF] text-[#1a1a1a] shadow-lg hover:bg-[#7BC0EA] transition-all duration-300 z-50 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>

      <FirstTimeGreeting />

      {isOpen && (
        <div
          className={`fixed bottom-20 right-6 w-80 sm:w-96 rounded-lg shadow-xl overflow-hidden z-50 transition-all duration-300 flex flex-col ${
            isMinimized ? "h-14" : "h-[500px]"
          } ${
            theme === "light"
              ? "bg-white border border-gray-200"
              : "bg-[#333333] border border-[#444444]"
          }`}
        >
          <div
            className={`px-4 py-3 flex justify-between items-center border-b ${
              theme === "light"
                ? "bg-gray-100 border-gray-200"
                : "bg-[#222222] border-[#444444]"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={AIicon}
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className={`font-semibold ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Al-Jon's Assistant
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleMinimize}
                className={`p-1.5 transition-colors ${
                  theme === "light"
                    ? "text-gray-500 hover:text-gray-700"
                    : "text-gray-400 hover:text-white"
                }`}
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
                className={`p-1.5 transition-colors ${
                  theme === "light"
                    ? "text-gray-500 hover:text-gray-700"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div
                ref={messagesContainerRef}
                className={`flex-1 overflow-y-auto px-4 py-3 custom-scrollbar ${
                  theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
                }`}
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
                          : theme === "light"
                          ? "bg-gray-100 text-gray-800"
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
                    <div
                      className={`p-3 rounded-lg ${
                        theme === "light" ? "bg-gray-100" : "bg-[#444444]"
                      }`}
                    >
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor:
                              theme === "light" ? "#6b7280" : "#d1d5db",
                            animationDelay: "0s",
                          }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor:
                              theme === "light" ? "#6b7280" : "#d1d5db",
                            animationDelay: "0.2s",
                          }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor:
                              theme === "light" ? "#6b7280" : "#d1d5db",
                            animationDelay: "0.4s",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={handleSubmit}
                className={`p-4 border-t ${
                  theme === "light"
                    ? "bg-gray-50 border-gray-200"
                    : "bg-[#222222] border-[#444444]"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me about Al-Jon..."
                    className={`flex-1 p-2.5 rounded-l-md border-none focus:outline-none focus:ring-1 focus:ring-[#90D5FF] ${
                      theme === "light"
                        ? "bg-white text-gray-800 border border-gray-300"
                        : "bg-[#444444] text-white"
                    }`}
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
