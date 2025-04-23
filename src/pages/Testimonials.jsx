import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data - replace with your actual testimonials
  const testimonials = [
    {
      id: 1,
      comment:
        "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us launch our platform ahead of schedule.",
      name: "Sarah Johnson",
      company: "TechFusion Inc.",
      photo: "/path/to/sarah.jpg",
      rating: 5,
      contact: "sarah@techfusion.com",
    },
    {
      id: 2,
      comment:
        "Exceptional problem-solving skills! They transformed our concept into a fully functional application that exceeded our expectations.",
      name: "Michael Chen",
      company: "Innovate Solutions",
      photo: "/path/to/michael.jpg",
      rating: 5,
      contact: "mchen@innovatesolutions.com",
    },
    {
      id: 3,
      comment:
        "The level of creativity and technical proficiency demonstrated in our project was impressive. I highly recommend their services for any web development needs.",
      name: "Priya Patel",
      company: "Digital Minds",
      photo: "/path/to/priya.jpg",
      rating: 4,
      contact: "priya@digitalminds.io",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : theme === "light"
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`min-h-screen py-24 px-6 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-[#90D5FF] mx-auto mb-8"></div>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Don't just take my word for it. Here's what clients have to say
            about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 md:-left-12 z-10">
            <button
              onClick={prevTestimonial}
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === "light"
                  ? "bg-white text-gray-800 hover:bg-gray-200 shadow-md"
                  : "bg-[#333333] text-white hover:bg-[#444444] shadow-md"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 md:-right-12 z-10">
            <button
              onClick={nextTestimonial}
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === "light"
                  ? "bg-white text-gray-800 hover:bg-gray-200 shadow-md"
                  : "bg-[#333333] text-white hover:bg-[#444444] shadow-md"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Card */}
          <div
            className={`p-8 rounded-xl shadow-lg transition-all duration-500 ${
              theme === "light"
                ? "bg-white"
                : "bg-[#2a2a2a] border border-gray-700"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#90D5FF] shadow-md">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <blockquote>
                  <p
                    className={`text-lg italic mb-6 ${
                      theme === "light" ? "text-gray-700" : "text-gray-200"
                    }`}
                  >
                    "{testimonials[currentIndex].comment}"
                  </p>
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h4
                      className={`font-bold text-lg ${
                        theme === "light" ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {testimonials[currentIndex].name}
                    </h4>
                    <p
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <a
                      href={`mailto:${testimonials[currentIndex].contact}`}
                      className="text-[#90D5FF] hover:underline text-sm"
                    >
                      {testimonials[currentIndex].contact}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-[#90D5FF]"
                    : theme === "light"
                    ? "bg-gray-300 hover:bg-gray-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
