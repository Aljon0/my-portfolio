import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import TestimonialsStyles from "./TestimonialsStyles";

const Testimonials = () => {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Effect to scroll to the active index with smooth animation
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

  // Navigation functions
  const goToNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, paginationCount - 1));
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
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
      <TestimonialsStyles />

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
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20">
              <button
                onClick={goToPrevious}
                className="nav-button-3d w-14 h-14 rounded-xl flex items-center justify-center"
                disabled={activeIndex === 0}
                style={{
                  color: accentColor,
                  transform: `perspective(1000px) rotateX(${
                    mousePosition.y * 1
                  }deg) rotateY(${mousePosition.x * 1}deg)`,
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="drop-shadow-lg" />
              </button>
            </div>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20">
              <button
                onClick={goToNext}
                className="nav-button-3d w-14 h-14 rounded-xl flex items-center justify-center"
                disabled={activeIndex === paginationCount - 1}
                style={{
                  color: accentColor,
                  transform: `perspective(1000px) rotateX(${
                    mousePosition.y * 1
                  }deg) rotateY(${mousePosition.x * 1}deg)`,
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="drop-shadow-lg" />
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
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
