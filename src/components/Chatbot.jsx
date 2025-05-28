import {
  Bot,
  Maximize2,
  MessageCircle,
  Minimize2,
  Send,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

// Mock theme context and Mistral service for demo
const useTheme = () => ({ theme: "dark" });
const getMistralResponse = async (input, history) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Thanks for asking "${input}"! This is a demo response from Al-Jon's virtual assistant. I can help you learn more about Al-Jon's projects, skills, and experience as a Full Stack Developer specializing in AI-integrated web solutions.`;
};

const ChatBot = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm Al-Jon's virtual assistant. How can I help you?",
      sender: "bot",
      fullText: "Hi there! I'm Al-Jon's virtual assistant. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

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

  const typeMessage = (response) => {
    setIsTyping(true);
    const currentMessages = [...messagesRef.current];
    const newMessage = { text: "", sender: "bot", fullText: response };
    setMessages([...currentMessages, newMessage]);

    const messageLength = response.length;
    let charsPerTick = 1;
    if (messageLength > 100) charsPerTick = 3;
    if (messageLength > 200) charsPerTick = 5;
    if (messageLength > 400) charsPerTick = 8;

    const intervalTime = 2;
    let charIndex = 0;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = setInterval(() => {
      if (charIndex <= response.length) {
        const nextIndex = Math.min(charIndex + charsPerTick, response.length);
        const currentText = response.substring(0, nextIndex);
        charIndex = nextIndex;

        const updatedMessages = [...messagesRef.current];
        if (updatedMessages.length > 0) {
          updatedMessages[updatedMessages.length - 1].text = currentText;
          setMessages(updatedMessages);
        }

        scrollToBottom();

        if (charIndex >= response.length) {
          clearInterval(typingIntervalRef.current);
          setIsTyping(false);
        }
      }
    }, intervalTime);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { text: input, sender: "user" };
    const currentMessages = [...messagesRef.current];
    const updatedMessages = [...currentMessages, userMessage];

    setMessages(updatedMessages);
    messagesRef.current = updatedMessages;
    setInput("");
    setLoading(true);

    try {
      const conversationHistory = updatedMessages.filter(
        (msg) => msg.sender === "user" || msg.sender === "bot"
      );
      const response = await getMistralResponse(input, conversationHistory);
      setLoading(false);
      typeMessage(response);
    } catch (error) {
      console.error("Error getting response:", error);
      setLoading(false);
      const errorMessage =
        "Sorry, I couldn't process your request right now. Please try again later.";
      typeMessage(errorMessage);
    }
  };

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const BotIcon = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full">
      <Bot size={20} className="text-gray-900" />
    </div>
  );

  const FirstTimeGreeting = () => {
    if (!isOpen && messages.length === 1 && showGreeting) {
      return (
        <div
          className="fixed bottom-20 right-6 w-72 p-5 rounded-2xl shadow-2xl z-40 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={hideGreeting}
          style={{
            background:
              "linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(35, 35, 35, 0.98) 100%)",
            border: "1px solid rgba(144, 213, 255, 0.3)",
            backdropFilter: "blur(15px)",
            boxShadow: `
              0 12px 40px rgba(0, 0, 0, 0.6),
              0 6px 20px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 30px rgba(144, 213, 255, 0.1)
            `,
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
              <BotIcon />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-200 leading-relaxed">
                Hi there! I'm Al-Jon's virtual assistant. How can I help you?
              </p>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openChatFromGreeting();
                  }}
                  className="text-xs text-blue-300 hover:text-blue-200 hover:underline transition-colors duration-200 font-medium"
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

  return (
    <>
      <style jsx>{`
        @keyframes float-3d {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateX(5deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-15px) rotateX(0deg) rotateY(2deg);
          }
          75% {
            transform: translateY(-8px) rotateX(-3deg) rotateY(-1deg);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(144, 213, 255, 0.3),
              0 0 40px rgba(144, 213, 255, 0.2),
              inset 0 0 20px rgba(144, 213, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(144, 213, 255, 0.5),
              0 0 60px rgba(144, 213, 255, 0.3),
              inset 0 0 30px rgba(144, 213, 255, 0.2);
          }
        }

        .chat-button-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9) 0%,
            rgba(30, 64, 175, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
            0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 20px rgba(144, 213, 255, 0.3);
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          animation: float-3d 6s ease-in-out infinite;
        }

        .chat-button-3d:hover {
          transform: translateY(-8px) rotateX(10deg) rotateY(5deg) scale(1.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
            0 10px 30px rgba(144, 213, 255, 0.4),
            0 0 40px rgba(144, 213, 255, 0.6),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
        }

        .chat-container-3d {
          background: linear-gradient(
            135deg,
            rgba(15, 15, 15, 0.95) 0%,
            rgba(25, 25, 25, 0.98) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.8),
            0 12px 40px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 50px rgba(144, 213, 255, 0.2);
          backdrop-filter: blur(20px);
          transform-style: preserve-3d;
        }

        .chat-header-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.9) 0%,
            rgba(35, 35, 35, 0.95) 100%
          );
          border-bottom: 1px solid rgba(144, 213, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .message-user-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9) 0%,
            rgba(30, 64, 175, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform: translateZ(5px);
          transition: all 0.3s ease;
        }

        .message-user-3d:hover {
          transform: translateZ(10px) translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(144, 213, 255, 0.3);
        }

        .message-bot-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateZ(5px);
          transition: all 0.3s ease;
        }

        .message-bot-3d:hover {
          transform: translateZ(10px) translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4),
            0 0 15px rgba(144, 213, 255, 0.2);
        }

        .input-container-3d {
          background: linear-gradient(
            135deg,
            rgba(25, 25, 25, 0.9) 0%,
            rgba(40, 40, 40, 0.95) 100%
          );
          border-top: 1px solid rgba(144, 213, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .input-field-3d {
          background: linear-gradient(
            135deg,
            rgba(40, 40, 40, 0.9) 0%,
            rgba(55, 55, 55, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .input-field-3d:focus {
          border-color: rgba(144, 213, 255, 0.6);
          box-shadow: 0 0 20px rgba(144, 213, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateZ(5px);
        }

        .send-button-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.9) 0%,
            rgba(30, 64, 175, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.4);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .send-button-3d:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(144, 213, 255, 0.4);
        }

        .typing-cursor::after {
          content: "▋";
          animation: blink 1s infinite;
          color: rgba(144, 213, 255, 0.8);
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 30, 30, 0.5);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.6),
            rgba(30, 64, 175, 0.6)
          );
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.8),
            rgba(30, 64, 175, 0.8)
          );
        }

        .markdown-content {
          font-size: 0.875rem;
          line-height: 1.25rem;
          max-width: none;
        }

        .markdown-content p {
          margin: 0;
        }

        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3,
        .markdown-content h4,
        .markdown-content h5,
        .markdown-content h6 {
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .markdown-content ul,
        .markdown-content ol {
          margin: 0.25rem 0;
          padding-left: 1rem;
        }

        .markdown-content li {
          margin: 0.125rem 0;
        }

        .markdown-content code {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
        }

        .markdown-content pre {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: 0.375rem;
          overflow-x: auto;
          margin: 0.5rem 0;
        }

        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
        }
      `}</style>

      <button
        onClick={toggleChat}
        className="chat-button-3d fixed bottom-6 right-6 p-3 rounded-full cursor-pointer text-gray-900 z-50 flex items-center justify-center w-16 h-16"
      >
        <MessageCircle size={28} />
      </button>

      <FirstTimeGreeting />

      {isOpen && (
        <div
          className={`chat-container-3d fixed bottom-20 right-6 w-80 sm:w-96 rounded-2xl overflow-hidden z-50 transition-all duration-500 flex flex-col ${
            isMinimized ? "h-16" : "h-[500px]"
          }`}
        >
          <div className="chat-header-3d px-5 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <BotIcon />
              </div>
              <h3 className="font-bold text-gray-100 text-lg">
                Al-Jon's Assistant
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleMinimize}
                className="p-2 transition-all duration-200 cursor-pointer text-gray-400 hover:text-blue-300 hover:scale-110"
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
                className="p-2 transition-all duration-200 cursor-pointer text-gray-400 hover:text-red-400 hover:scale-110"
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
                className="flex-1 overflow-y-auto px-5 py-4 custom-scrollbar space-y-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)",
                }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0 self-end shadow-md">
                        <BotIcon />
                      </div>
                    )}
                    <div
                      className={`p-4 rounded-2xl max-w-[80%] ${
                        message.sender === "user"
                          ? "message-user-3d text-gray-900"
                          : "message-bot-3d text-gray-100"
                      }`}
                    >
                      <div
                        className={`markdown-content ${
                          index === messages.length - 1 &&
                          message.sender === "bot" &&
                          isTyping
                            ? "typing-cursor"
                            : ""
                        }`}
                      >
                        <Markdown>
                          {message.text}
                        </Markdown>
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0 self-end shadow-md">
                      <BotIcon />
                    </div>
                    <div className="message-bot-3d p-4 rounded-2xl">
                      <div className="flex space-x-2">
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "rgba(144, 213, 255, 0.8)",
                            animationDelay: "0s",
                          }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "rgba(144, 213, 255, 0.8)",
                            animationDelay: "0.2s",
                          }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full animate-bounce"
                          style={{
                            backgroundColor: "rgba(144, 213, 255, 0.8)",
                            animationDelay: "0.4s",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="input-container-3d p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                    placeholder="Ask me about Al-Jon..."
                    className="input-field-3d flex-1 p-3 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none"
                    disabled={loading || isTyping}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !input.trim() || isTyping}
                    className="send-button-3d p-3 rounded-xl text-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;