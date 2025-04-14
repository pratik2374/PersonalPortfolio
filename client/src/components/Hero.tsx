import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  // Create particles with random properties
  const [particles, setParticles] = useState<any[]>([]);
  
  useEffect(() => {
    // Generate 40 particles with better distribution
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      // Start particles from different horizontal positions
      initialX: Math.random() * -50, // Start before the screen (-60% to -10%)
      y: Math.random() * 100, // Random vertical position
      size: Math.random() * 4 + 1, // Size between 1-5px
      speed: Math.random() * 30 + 15, // Speed between 15-45s to cross
      opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3-0.8
      color: Math.random() > 0.7 ? "#22c55e" : "#ffffff" // 30% green, 70% white particles
    }));
    
    setParticles(newParticles);
  },[]);

  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden">
      {/* Professional background image with darker overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1483356256511-b48749959172?auto=format&fit=crop&q=80')",
          backgroundBlendMode: "soft-light", 
          filter: "brightness(0.7) contrast(1.1)"
        }}
      >
      </div>
      
      {/* Gradient overlay that matches the About Me background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background z-0"></div>
      
      {/* Green accent elements */}
      {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-green-500 z-0"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-green-500 z-0"></div> */}
      
      {/* Animated particles flowing across the screen */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              top: `${particle.y}%`,
              left: "-10px", // Start slightly off-screen
              opacity: particle.opacity,
              boxShadow: particle.color === "#22c55e" ? "0 0 6px #22c55e" : "none"
            }}
            initial={{ x: `${particle.initialX}vw` }}
            animate={{ x: "calc(100vw + 20px)" }} // Move past the right edge
            transition={{
              duration: particle.speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 2 // Staggered start
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm Pratik
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
          I am an aspiring Software Engineer and AI Enthusiast
          </p>
          {/* <p className="text-base md:text-lg text-green-500">
            Building modern, responsive digital experiences
          </p> */}
        </motion.div>
      </div>
      
      {/* Subtle down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-green-500"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}