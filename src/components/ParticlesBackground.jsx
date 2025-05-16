import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ show = true, theme = "dark" }) => {
  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: theme === "light" ? "#1E40AF" : "#90D5FF", // Changed to dark blue for light mode
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: theme === "light" ? 0.3 : 0.5, // Reduced opacity for light mode
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: theme === "light" ? "#1E40AF" : "#90D5FF", // Changed to dark blue for light mode
          opacity: theme === "light" ? 0.3 : 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    }),
    [theme]
  );

  if (!show) return null;
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};
export default ParticlesBackground;