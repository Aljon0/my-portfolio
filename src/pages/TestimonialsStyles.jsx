import React from "react";

const TestimonialsStyles = () => (
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

    @keyframes nav-button-glow {
      0%,
      100% {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
          0 0 20px rgba(144, 213, 255, 0.2);
      }
      50% {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4),
          0 0 30px rgba(144, 213, 255, 0.4);
      }
    }

    @keyframes nav-button-pulse {
      0%,
      100% {
        transform: translateZ(0px) scale(1);
      }
      50% {
        transform: translateZ(10px) scale(1.05);
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
        linear-gradient(90deg, rgba(144, 213, 255, 0.05) 1px, transparent 1px);
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

    .nav-button-3d {
      background: linear-gradient(
        135deg,
        rgba(144, 213, 255, 0.15) 0%,
        rgba(30, 64, 175, 0.25) 50%,
        rgba(0, 0, 0, 0.1) 100%
      );
      border: 1px solid rgba(144, 213, 255, 0.4);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(144, 213, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      transform-style: preserve-3d;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .nav-button-3d:hover {
      transform: translateY(-5px) translateZ(15px) scale(1.1);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
        0 0 40px rgba(144, 213, 255, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.2);
      animation: nav-button-glow 2s ease-in-out infinite;
    }

    .nav-button-3d:active {
      transform: translateY(-2px) translateZ(10px) scale(1.05);
      animation: nav-button-pulse 0.2s ease-in-out;
    }

    .nav-button-3d:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      transform: none;
      animation: none;
    }

    .nav-button-3d:disabled:hover {
      transform: none;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(144, 213, 255, 0.2);
      animation: none;
    }
  `}</style>
);

export default TestimonialsStyles;
