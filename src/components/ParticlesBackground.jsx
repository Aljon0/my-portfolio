import React from "react";

// This approach uses a direct embed of the tsParticles library
// since we're having compatibility issues with the React wrapper
const ParticlesBackground = ({ show = true, theme = "dark" }) => {
  React.useEffect(() => {
    if (!show) return;

    // Clean up any existing particles
    if (window.tsParticles) {
      window.tsParticles.destroy();
    }

    // Load the tsParticles library script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js";
    script.async = true;
    
    script.onload = () => {
      // Once loaded, initialize with the hexagon pattern
      window.tsParticles.load("tsparticles", {
        fullScreen: false,
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: theme === "light" ? "#1E40AF" : "#90D5FF"
          },
          shape: {
            type: "polygon",
            polygon: {
              nb_sides: 6
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === "light" ? "#1E40AF" : "#90D5FF",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    };

    document.body.appendChild(script);

    // Cleanup function to remove particles and script
    return () => {
      if (window.tsParticles) {
        window.tsParticles.destroy();
      }
      document.body.removeChild(script);
    };
  }, [show, theme]); // Re-run when show or theme changes

  return (
    <div
      id="tsparticles"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0
      }}
    />
  );
};

export default ParticlesBackground;