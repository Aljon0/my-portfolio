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
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  // Calculate visible cards based on screen size
  const [visibleCards, setVisibleCards] = useState(1);
  const totalCards = 8; // Total number of testimonials

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
  // (This is used for updating the dots indicator, not for stopping scrolling)
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
    // Use a smaller multiplier for even smoother movement
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default touch behavior
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    // Use a smaller multiplier for even smoother movement
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add momentum scrolling effect when drag ends
  const handleDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      // Only update the active index for pagination indicators
      updateActiveIndexFromScroll();

      // For smooth deceleration, we're letting the natural scroll behavior
      // take over without forcing a snap
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        );
      } else if (i === fullStars && hasPartialStar) {
        // Partial star
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
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        );
      } else {
        // Empty star
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

  // Add error handling for images
  const handleImageError = (e) => {
    // Fallback to initial if image fails to load
    e.target.onerror = null;
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";
  };

  return (
    <div
      className={`py-20 px-6 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white"
      }`}
      id="testimonials"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Client Testimonials
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: accentColor }}
          ></div>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
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
              WebkitUserSelect: "none", // Safari
              MozUserSelect: "none", // Firefox
              msUserSelect: "none", // IE/Edge
              userSelect: "none", // Standard syntax
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
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-start transition-transform duration-300"
              >
                <div
                  className={`p-5 rounded-xl shadow-lg transition-all duration-300 flex flex-col h-96 select-none ${
                    theme === "light"
                      ? "bg-white hover:shadow-xl"
                      : "bg-[#2a2a2a] border border-gray-700 hover:bg-[#333333]"
                  }`}
                >
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        theme === "light"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gradient-to-r from-[#3a3a3a] to-[#444444] text-[#90D5FF]"
                      }`}
                    >
                      {testimonial.label}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-full overflow-hidden border-2 shadow-md relative"
                      style={{ borderColor: accentColor }}
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
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <blockquote className="flex-grow select-none">
                    <p
                      className={`text-base italic mb-4 ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      "{testimonial.comment}"
                    </p>
                  </blockquote>

                  <div className="mt-auto">
                    <h4
                      className={`font-bold text-lg ${
                        theme === "light" ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`mb-2 ${
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      {testimonial.company}
                    </p>
                    <a
                      href={`mailto:${testimonial.contact}`}
                      className={`hover:underline text-sm`}
                      style={{ color: accentColor }}
                    >
                      {testimonial.contact}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: paginationCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activeIndex === index
                    ? "w-6"
                    : theme === "light"
                    ? "bg-gray-300 hover:bg-gray-400"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                style={{
                  backgroundColor:
                    activeIndex === index ? accentColor : undefined,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
