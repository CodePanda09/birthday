import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-16 px-4 sm:px-8 relative overflow-hidden bg-transparent">
      {/* Remove the dark gradient overlay and replace with a subtle transparent one */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent backdrop-blur-sm" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left content section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            {/* Happy Birthday - Bold */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400
                       drop-shadow-[0_0_35px_rgba(236,72,153,0.4)]
                       tracking-tight leading-tight"
              style={{
                textShadow: '0 0 30px rgba(236,72,153,0.3)'
              }}
            >
              Happy Birthday
            </motion.h2>

            {/* Once Again - Medium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-transparent bg-clip-text 
                       bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300
                       drop-shadow-[0_0_25px_rgba(236,72,153,0.3)]"
              style={{
                textShadow: '0 0 20px rgba(236,72,153,0.2)'
              }}
            >
              Once Again
            </motion.div>

            {/* Stay happy... - Small-medium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl font-normal text-white/90
                       drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              style={{
                textShadow: '0 0 15px rgba(255,255,255,0.2)'
              }}
            >
              Stay Happy and Stay Blessed
            </motion.div>

            {/* Decorative elements - Enhanced fade animation */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {[...Array(3)].map((_, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0.3 }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                  style={{ 
                    boxShadow: '0 0 20px rgba(236,72,153,0.4)'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right cake gif section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.3
            }}
            className="flex-1 flex justify-center items-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                filter: 'brightness(1.1)',
                transition: { duration: 0.3 }
              }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden
                       bg-gradient-to-br from-pink-400/10 to-purple-400/10
                       backdrop-blur-md border border-white/10
                       shadow-[0_0_30px_rgba(236,72,153,0.3)]"
            >
              <img 
                src="/Cake-unscreen.gif"
                alt="Birthday Cake"
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;