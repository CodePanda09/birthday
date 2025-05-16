import React, { useState } from 'react'
import pandaLogo from '/panda-logo.png'
import dateCal from '/icons8-birthday-64.png'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const currentDate = "17-05-2025"
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <header className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-gradient-to-r from-black/20 via-black/30 to-black/20 min-h-[80px] sm:min-h-[120px] border-b border-white/10 shadow-lg"
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {/* Left section - Welcome message */}
            <motion.div 
              className="flex-1 text-center sm:text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300
                         drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(255,255,255,0.8)",
                  background: "linear-gradient(45deg, #a855f7, #ec4899, #a855f7)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                Welcome Dear Mistu
              </motion.h1>
            </motion.div>

            {/* Center section - Panda logo and text */}
            <motion.div 
              className="flex-1 flex items-center justify-center space-x-2 sm:space-x-4"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.span 
                className="text-lg sm:text-2xl font-semibold text-white drop-shadow-lg
                         bg-gradient-to-r from-purple-400/20 to-pink-400/20 
                         px-3 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-md
                         border border-white/10"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(236,72,153,0.3)",
                  borderColor: "rgba(255,255,255,0.3)"
                }}
              >
                Miss Cutie Panda
              </motion.span>
              <motion.div 
                className="bg-white/10 p-2 sm:p-3 rounded-full backdrop-blur-md
                        border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                animate={isHovered ? {
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut"
                  }
                } : {}}
              >
                <img 
                  src={pandaLogo}
                  alt="Panda Logo" 
                  className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Right section - Calendar and date */}
            <motion.div 
              className="flex-1 flex items-center justify-center sm:justify-end space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 
                        px-3 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-md border border-white/10"
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(236,72,153,0.2)",
                  borderColor: "rgba(255,255,255,0.3)"
                }}
              >
                <motion.div 
                  className="bg-white/10 p-1 sm:p-2 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={dateCal}
                    alt="Calendar" 
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </motion.div>
                <motion.span 
                  className="text-base sm:text-xl font-semibold text-white drop-shadow-lg"
                  whileHover={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                >
                  {currentDate}
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Header