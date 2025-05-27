import { Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Testimonials = () => {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate visible cards based on screen size
  const [visibleCards, setVisibleCards] = useState(1);
  const totalCards = 3; // Total number of testimonials

  const testimonials = [
    {
      id: 1,
      comment:
        "Aljon is diligent and hardworking. Another good thing about him is that he knows how to listen. Whenever i have requests for revisions, he listens carefully and makes sure to meet expectations.",
      name: "Ethel Magsaysay",
      company: "Double Seven Lapida",
      rating: 4.8,
      contact: "double7lapidamaker@gmail.com",
      image: "/testimonials/DoubleSeven.png",
      label: "Client for Project ED3C System",
    },
    {
      id: 2,
      comment:
        "Aljon have constantly shown that he is a reliable employee by showing up for work each day prepared and with a positive attitude.",
      name: "Rodante R. Reyes",
      company: "Seiwa Kaiun Philippines Inc,",
      rating: 5,
      contact: "dan.reyes@seiwakaiun.com.ph",
      image: "/testimonials/Reyes.jpg",
      label: "IT Manager at Seiwa Kaiun",
    },
    {
      id: 3,
      comment:
        "Aljon is a trusted and proficient backend developer who regularly produces clear, effective code and finds solutions to issues. He is a valuable member of the team because of his cooperative demeanor.",
      name: "Glaiza Lei San Jose",
      company: "CVSU - CCAT Campus",
      rating: 5,
      contact: "glaizaleis@gmail.com",
      image: "/testimonials/",
      label: "Classmate at CCAT",
    },
  ];

  // Update visible cards based on window width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Effect to scroll to the active index with smooth animation (only when pagination is clicked)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / visibleCards;
      const scrollAmount = activeIndex * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, visibleCards]);

  // Calculate the number of pagination indicators needed
  const paginationCount = Math.max(1, totalCards - visibleCards + 1);

  // Function to update active index based on current scroll position
  const updateActiveIndexFromScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth / visibleCards;
    const scrollPosition = container.scrollLeft;

    // Calculate nearest card index
    const nearestIndex = Math.round(scrollPosition / cardWidth);

    // Ensure index is within bounds
    const boundedIndex = Math.max(
      0,
      Math.min(nearestIndex, paginationCount - 1)
    );

    // Update active index without forcing scroll
    if (boundedIndex !== activeIndex) {
      setActiveIndex(boundedIndex);
    }
  };

  // Update active index based on scroll position (for non-drag scrolling)
  const handleScroll = () => {
    if (!scrollContainerRef.current || isDragging) return;
    updateActiveIndexFromScroll();
  };

  // Mouse and touch event handlers for dragging/sliding
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      updateActiveIndexFromScroll();
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            size={16}
            className="text-yellow-400 fill-yellow-400 drop-shadow-lg"
          />
        );
      } else if (i === fullStars && hasPartialStar) {
        const percent = Math.round((rating % 1) * 100);
        stars.push(
          <div key={i} className="relative">
            <Star
              size={16}
              className={`${
                theme === "light" ? "text-gray-300" : "text-gray-600"
              }`}
            />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${percent}%` }}
            >
              <Star
                size={16}
                className="text-yellow-400 fill-yellow-400 drop-shadow-lg"
              />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star
            key={i}
            size={16}
            className={`${
              theme === "light" ? "text-gray-300" : "text-gray-600"
            }`}
          />
        );
      }
    }
    return stars;
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";
  };

  return (
    <div>
      <style jsx>{`
        @keyframes float-testimonial {
          0%,
          100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          25% {
            transform: translateY(-15px) rotateZ(1deg);
          }
          50% {
            transform: translateY(-30px) rotateZ(0deg);
          }
          75% {
            transform: translateY(-15px) rotateZ(-1deg);
          }
        }

        @keyframes float-shape-testimonial {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) rotate(90deg);
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
          }
          75% {
            transform: translateY(-25px) rotate(270deg);
          }
        }

        @keyframes grid-pulse-testimonial {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }

        @keyframes text-glow-testimonial {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(144, 213, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(144, 213, 255, 0.6),
              0 0 40px rgba(144, 213, 255, 0.2);
          }
        }

        @keyframes card-hover-float {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-10px) rotateX(5deg) rotateY(2deg);
          }
        }

        .floating-shape-testimonial {
          position: absolute;
          border-radius: 30% 70% 40% 60%;
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.08),
            rgba(30, 64, 175, 0.12)
          );
          border: 1px solid rgba(144, 213, 255, 0.2);
          backdrop-filter: blur(15px);
          z-index: 1;
        }

        .floating-shape-testimonial:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 8%;
          animation: float-shape-testimonial 10s ease-in-out infinite;
          animation-delay: 0s;
        }

        .floating-shape-testimonial:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 70%;
          right: 12%;
          animation: float-shape-testimonial 8s ease-in-out infinite reverse;
          animation-delay: 2s;
        }

        .floating-shape-testimonial:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 25%;
          left: 12%;
          animation: float-shape-testimonial 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        .floating-shape-testimonial:nth-child(4) {
          width: 50px;
          height: 50px;
          top: 40%;
          right: 25%;
          animation: float-shape-testimonial 6s ease-in-out infinite reverse;
          animation-delay: 1s;
        }

        .grid-background-testimonial {
          background-image: linear-gradient(
              rgba(144, 213, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(144, 213, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          animation: grid-pulse-testimonial 6s ease-in-out infinite;
        }

        .testimonial-card-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.1) 0%,
            rgba(30, 64, 175, 0.05) 50%,
            rgba(0, 0, 0, 0.1) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(144, 213, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .testimonial-card-3d:hover {
          transform: translateY(-15px) rotateX(10deg) rotateY(5deg) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(144, 213, 255, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
          animation: card-hover-float 2s ease-in-out infinite;
        }

        .testimonial-title-3d {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          animation: text-glow-testimonial 4s ease-in-out infinite;
        }

        .pagination-dot-3d {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.3) 0%,
            rgba(30, 64, 175, 0.5) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.4);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pagination-dot-3d:hover {
          transform: translateY(-3px) scale(1.2);
          box-shadow: 0 8px 25px rgba(144, 213, 255, 0.4);
        }

        .avatar-3d {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(144, 213, 255, 0.3);
          transition: all 0.3s ease;
        }

        .avatar-3d:hover {
          transform: translateZ(10px) rotateY(15deg);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(144, 213, 255, 0.5);
        }
      `}</style>

      <div
        className="py-20 px-6 transition-colors duration-300 relative overflow-hidden"
        style={{
          background:
            theme === "light"
              ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
              : "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
        id="testimonials"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 grid-background-testimonial"></div>

        {/* Floating Geometric Shapes */}
        <div className="floating-shape-testimonial"></div>
        <div className="floating-shape-testimonial"></div>
        <div className="floating-shape-testimonial"></div>
        <div className="floating-shape-testimonial"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2
              className={`testimonial-title-3d text-4xl font-bold mb-4 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 3
                }deg) rotateY(${mousePosition.x * 3}deg)`,
                background:
                  theme === "light"
                    ? "linear-gradient(45deg, #1E40AF, #3B82F6, #1E40AF)"
                    : "linear-gradient(45deg, #90D5FF, #ffffff, #90D5FF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Client Testimonials
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-6 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${accentColor}, rgba(144, 213, 255, 0.5))`,
                boxShadow: `0 0 20px ${accentColor}30`,
              }}
            ></div>
            <p
              className={`max-w-2xl mx-auto text-lg ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
              style={{
                transform: `perspective(800px) rotateX(${
                  mousePosition.y * 2
                }deg) rotateY(${mousePosition.x * 2}deg)`,
              }}
            >
              Don't just take my word for it. Here's what clients have to say
              about working with me.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: isDragging ? "grabbing" : "grab",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleDragEnd}
              onMouseUp={handleDragEnd}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleDragEnd}
              onTouchMove={handleTouchMove}
              onTouchCancel={handleDragEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start"
                  style={{
                    animation: `float-testimonial ${
                      8 + index * 2
                    }s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <div
                    className="testimonial-card-3d p-6 rounded-2xl flex flex-col min-h-[400px] select-none"
                    style={{
                      transform: `perspective(1000px) rotateX(${
                        mousePosition.y * 2
                      }deg) rotateY(${mousePosition.x * 2}deg)`,
                    }}
                  >
                    <div className="mb-4">
                      <span
                        className="inline-block px-4 py-2 text-xs font-medium rounded-full backdrop-blur-md"
                        style={{
                          background:
                            theme === "light"
                              ? "linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(59, 130, 246, 0.2))"
                              : "linear-gradient(135deg, rgba(144, 213, 255, 0.1), rgba(30, 64, 175, 0.2))",
                          border: `1px solid ${accentColor}40`,
                          color: accentColor,
                          boxShadow: `0 4px 15px ${accentColor}20`,
                        }}
                      >
                        {testimonial.label}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="avatar-3d w-16 h-16 rounded-lg overflow-hidden border-2 relative flex-shrink-0"
                        style={{
                          borderColor: accentColor,
                          borderImage: `linear-gradient(45deg, ${accentColor}, rgba(144, 213, 255, 0.5)) 1`,
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          draggable="false"
                        />
                        <div
                          className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold absolute top-0 left-0"
                          style={{ display: "none" }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {renderStars(testimonial.rating)}
                        <span
                          className={`ml-2 text-sm font-medium ${
                            theme === "light"
                              ? "text-gray-700"
                              : "text-gray-200"
                          }`}
                        >
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>

                    <blockquote className="flex-grow select-none">
                      <p
                        className={`text-base italic mb-4 leading-relaxed ${
                          theme === "light" ? "text-gray-700" : "text-gray-200"
                        }`}
                        style={{
                          textShadow:
                            theme === "dark"
                              ? "0 1px 3px rgba(0,0,0,0.3)"
                              : "none",
                        }}
                      >
                        "{testimonial.comment}"
                      </p>
                    </blockquote>

                    <div
                      className="mt-auto pt-4 border-t border-opacity-20"
                      style={{ borderColor: accentColor }}
                    >
                      <h4
                        className={`font-bold text-lg mb-1 ${
                          theme === "light" ? "text-gray-900" : "text-white"
                        }`}
                        style={{
                          textShadow:
                            theme === "dark"
                              ? "0 0 10px rgba(144, 213, 255, 0.3)"
                              : "none",
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className={`mb-3 text-sm ${
                          theme === "light" ? "text-gray-600" : "text-gray-300"
                        }`}
                      >
                        {testimonial.company}
                      </p>
                      <a
                        href={`mailto:${testimonial.contact}`}
                        className="hover:underline text-xs transition-all duration-300 break-all"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 10px ${accentColor}40`,
                        }}
                      >
                        {testimonial.contact}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: paginationCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`pagination-dot-3d w-4 h-4 rounded-full transition-all cursor-pointer ${
                    activeIndex === index ? "w-8 h-4" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeIndex === index
                        ? accentColor
                        : theme === "light"
                        ? "rgba(156, 163, 175, 0.5)"
                        : "rgba(75, 85, 99, 0.5)",
                    boxShadow:
                      activeIndex === index
                        ? `0 0 20px ${accentColor}60, 0 4px 15px rgba(0,0,0,0.3)`
                        : "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
