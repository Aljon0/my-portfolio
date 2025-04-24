import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { Star } from "lucide-react";

const Testimonials = () => {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate visible cards based on screen size
  const [visibleCards, setVisibleCards] = useState(1);
  const totalCards = 8; // Total number of testimonials

  // Sample testimonials data with varying lengths but optimized for card height
  const testimonials = [
    {
      id: 1,
      comment:
        "Aljon is diligent and hardworking. Another good thing about him is that he knows how to listen. Whenever i have requests for revisions, he listens carefully and makes sure to meet expectations.",
      name: "Ethel Magsaysay",
      company: "Double Seven Lapida",
      rating: 4.8, // Updated from 5 to 4.8
      contact: "double7lapidamaker@gmail.com",
    },
    {
      id: 2,
      comment:
        "Exceptional problem-solving skills! They transformed our concept into a fully functional application that exceeded our expectations.",
      name: "Michael Chen",
      company: "Innovate Solutions",
      rating: 5,
      contact: "mchen@innovatesolutions.com",
    },
    {
      id: 3,
      comment:
        "The level of creativity and technical proficiency demonstrated in our project was impressive. I highly recommend their services for any web development needs.",
      name: "Priya Patel",
      company: "Digital Minds",
      rating: 4,
      contact: "priya@digitalminds.io",
    },
    {
      id: 4,
      comment:
        "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us launch our platform ahead of schedule.",
      name: "Sarah Johnson",
      company: "TechFusion Inc.",
      rating: 5,
      contact: "sarah@techfusion.com",
    },
    {
      id: 5,
      comment:
        "Delivered our e-commerce project on time and under budget. Communication was clear throughout the entire process.",
      name: "James Wilson",
      company: "Retail Connect",
      rating: 5,
      contact: "jwilson@retailconnect.com",
    },
    {
      id: 6,
      comment:
        "Incredible attention to detail and responsive to feedback. The final product exceeded our expectations in both functionality and design.",
      name: "Lisa Rodriguez",
      company: "Creative Labs",
      rating: 5,
      contact: "lisa@creativelabs.co",
    },
    {
      id: 7,
      comment:
        "Their technical knowledge and problem-solving approach saved our project. Would definitely work with them again on future initiatives.",
      name: "David Kim",
      company: "InnoTech Solutions",
      rating: 4,
      contact: "dkim@innotech.net",
    },
    {
      id: 8,
      comment:
        "Expert implementation of our requirements, with thoughtful suggestions that improved the final product. A true professional.",
      name: "Emma Thompson",
      company: "Global Media",
      rating: 5,
      contact: "emma@globalmedia.org",
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

  // Effect to scroll to the active index
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

  // Update active index based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current || isDragging) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth / visibleCards;
    const scrollPosition = container.scrollLeft;

    // Calculate the new index based on scroll position
    const newIndex = Math.round(scrollPosition / cardWidth);

    // Ensure the index is within bounds
    const boundedIndex = Math.max(0, Math.min(newIndex, paginationCount - 1));

    if (boundedIndex !== activeIndex) {
      setActiveIndex(boundedIndex);
    }
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
    const walk = (x - startX) * 2; // Speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    handleScroll();
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

  return (
    <div
      className={`py-20 px-6 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white"
      }`}
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
          <div className="w-24 h-1 bg-[#90D5FF] mx-auto mb-6"></div>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Don't just take my word for it. Here's what clients have to say
            about working with me.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Scrolling container with drag events */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleTouchMove}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 snap-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <div
                  className={`p-5 rounded-xl shadow-lg transition-all duration-300 flex flex-col h-96 ${
                    theme === "light"
                      ? "bg-white hover:shadow-xl"
                      : "bg-[#2a2a2a] border border-gray-700 hover:bg-[#333333]"
                  }`}
                >
                  {/* Photo and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#90D5FF] shadow-md">
                      {/* Replace with actual image */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="flex-grow">
                    <p
                      className={`text-base italic mb-4 ${
                        theme === "light" ? "text-gray-700" : "text-gray-200"
                      }`}
                    >
                      "{testimonial.comment}"
                    </p>
                  </blockquote>

                  {/* Client details */}
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
                      className="text-[#90D5FF] hover:underline text-sm"
                    >
                      {testimonial.contact}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination indicators with cursor pointer */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: paginationCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#90D5FF] w-6"
                    : theme === "light"
                    ? "bg-gray-300 hover:bg-gray-400"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
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
