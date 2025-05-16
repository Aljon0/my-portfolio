/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const LoadingAnimation = ({ onComplete, isLazyLoading = false }) => {
  const { theme } = useTheme();
  const [isComplete, setIsComplete] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('initial'); // 'initial', 'shuffling', 'final'
  const [charIndices, setCharIndices] = useState(Array(7).fill(-1)); // Start with all -1 to show "LOADING"
  const [displayText, setDisplayText] = useState("LOADING");
  const [glitchEffect, setGlitchEffect] = useState(0);
  
  // Define characters to shuffle through
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|}{[]<>?/";
  const initialWord = "LOADING";
  const finalWord = "</AJ>";
  
  // Theme-dependent styles
  const textColor = theme === "light" ? "text-blue-800" : "text-[#90D5FF]";
  const glowColor = theme === "light" 
    ? "shadow-[0_0_15px_rgba(30,64,175,0.7)]" 
    : "shadow-[0_0_15px_rgba(144,213,255,0.7)]";
  const bgColor = theme === "light" 
    ? "bg-gradient-to-br from-gray-100 to-gray-200" 
    : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]";
  const glitchColorA = theme === "light" ? "rgba(30,64,175,0.3)" : "rgba(144,213,255,0.3)";
  const glitchColorB = theme === "light" ? "rgba(219,234,254,0.3)" : "rgba(30,58,138,0.3)";
  
  // Glitch effect styles
  const glitchStyles = [
    { transform: "translate(0)" },
    { transform: "translate(-2px, 2px)", textShadow: `1px 0 0 ${glitchColorA}, -2px 0 0 ${glitchColorB}` },
    { transform: "translate(2px, -2px)", textShadow: `2px 0 0 ${glitchColorB}, -1px 0 0 ${glitchColorA}` },
    { transform: "translate(0)", textShadow: "none" }
  ];
  
  useEffect(() => {
    // For lazy loading components, we use a simpler animation
    if (isLazyLoading) {
      const timeout = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) onComplete();
      }, isLazyLoading ? 800 : 2800);
      
      return () => clearTimeout(timeout);
    }
    
    // Main animation logic with phases
    // Phase 1: Display "LOADING" for a moment
    // Phase 2: Shuffle characters
    // Phase 3: Finally display "</AJ>"
    
    // Start with displaying "LOADING" for 1 second
    setTimeout(() => {
      setAnimationPhase('shuffling');
      
      // Start shuffling
      const shuffleDuration = 1800; // Shuffling phase duration in ms
      const startTime = Date.now();
      
      // Random glitch effect during shuffling
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          setGlitchEffect(Math.floor(Math.random() * 3) + 1);
          setTimeout(() => setGlitchEffect(0), 150);
        }
      }, 300);
      
      // Shuffling animation
      const shuffleInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / shuffleDuration, 1);
        
        // Update character indices based on progress
        const newIndices = Array(finalWord.length).fill(0).map(() => 
          Math.floor(Math.random() * chars.length)
        );
        
        setCharIndices(newIndices);
        
        // Animation complete
        if (progress >= 1) {
          clearInterval(shuffleInterval);
          clearInterval(glitchInterval);
          
          // Final glitch effect
          setTimeout(() => {
            setGlitchEffect(1);
            setTimeout(() => {
              setGlitchEffect(2);
              setTimeout(() => {
                setGlitchEffect(0);
                // Switch to final state with "</AJ>"
                setAnimationPhase('final');
                setDisplayText(finalWord);
                
                setTimeout(() => {
                  setIsComplete(true);
                  if (onComplete) onComplete();
                }, 800);
              }, 150);
            }, 150);
          }, 300);
        }
      }, 60); // Update frequency
      
      return () => {
        clearInterval(shuffleInterval);
        clearInterval(glitchInterval);
      };
    }, 800); // Initial display time
    
  }, [isLazyLoading, onComplete]);
  
  // Generate dot patterns for background
  const dots = Array(20).fill(0).map((_, i) => {
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;
    
    return (
      <motion.div 
        key={i}
        className={`absolute rounded-full ${theme === "light" ? "bg-blue-800/30" : "bg-[#90D5FF]/30"}`}
        style={{ 
          width: size, 
          height: size, 
          left: `${x}%`, 
          top: `${y}%` 
        }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3], 
          scale: [1, 1.5, 1] 
        }}
        transition={{ 
          duration: duration, 
          repeat: Infinity, 
          delay: delay
        }}
      />
    );
  });
  
  // Get current display text
  const getCurrentText = () => {
    if (animationPhase === 'initial') return initialWord;
    if (animationPhase === 'final') return finalWord;
    
    // During shuffling, show random characters
    return charIndices.map((index, position) => {
      return chars[index % chars.length];
    }).join('');
  };
  
  // If this is for lazy loading components, show a simpler version
  if (isLazyLoading) {
    return (
      <motion.div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${bgColor} transition-colors duration-300`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-4">
          <div 
            className={`text-4xl font-bold ${textColor} ${glowColor}`}
            style={glitchStyles[glitchEffect]}
          >
            {animationPhase === 'final' ? finalWord : initialWord}
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor} transition-colors duration-300 overflow-hidden`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {dots}
        <motion.div 
          className={`absolute w-full h-full ${theme === "light" ? "bg-blue-800/5" : "bg-[#90D5FF]/5"}`}
          animate={{ 
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>
      
      {/* Loading container */}
      <div className="relative flex flex-col items-center">
        {/* Glow effect */}
        <motion.div 
          className={`absolute inset-0 blur-xl ${theme === "light" ? "bg-blue-800/20" : "bg-[#90D5FF]/20"} rounded-full`}
          animate={{ 
            scale: [0.9, 1.1, 0.9], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Character container */}
        <div 
          className="flex items-center justify-center relative"
          style={glitchStyles[glitchEffect]}
        >
          <div className={`text-5xl md:text-7xl font-bold ${textColor} ${animationPhase !== 'shuffling' ? glowColor : ''}`}>
            {getCurrentText()}
          </div>
        </div>
        
        {/* Progress indicator */}
        <motion.div 
          className={`h-0.5 mt-6 ${theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"} rounded-full`}
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: isComplete ? "100%" : [0, "60%", "80%", "90%", "95%"],
            opacity: isComplete ? 0 : 0.7
          }}
          transition={{ 
            duration: 2.2, 
            ease: "easeInOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;