import React from 'react'
import { motion } from 'framer-motion'

const MainBody = () => {
  // Text animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.8,
      },
    },
  }

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.3,
      },
    },
  }

  const nameText = "Sarmistha"
  
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="flex items-start justify-between">
        {/* Left Section - Birthday Wish and Paragraph */}
        <motion.div 
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, duration: 1.5 }}
          className="flex-1 pr-8"
        >
          {/* Animated Birthday Wish */}
          <motion.h1 
            className="text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
                       drop-shadow-[0_0_35px_rgba(236,72,153,0.3)]
                       mb-8"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 14,
              duration: 1
            }}
          >
            Happy Birthday <br/>
            <motion.div
              className="flex overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {nameText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400
                           text-transparent bg-clip-text"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          {/* Paragraph Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 1.8, duration: 1.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 
                       border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.1)]
                       max-w-2xl"
          >
            <p className="text-white/90 text-lg leading-relaxed">
              {/* Leave empty for user to fill */}
              Happy Birthday, my dearest Mistu! 💖 On this special day, I just want to say how incredibly proud I am of the amazing woman you are. You're not just the most beautiful person I've ever known—inside and out—but also the most fearless, independent, and hardworking soul I've had the joy of being around. You inspire me every day with your strength, your determination, and your ability to shine through anything life throws your way. You truly deserve all the happiness this world has to offer. May this year bring you endless joy, unwavering peace, and success in everything you set your heart to. Keep glowing, keep conquering, and never stop being the incredible Mistu that you are. Happy birthday, queen! 👑✨💐
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, duration: 1.5, delay: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <motion.div 
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 0 80px rgba(255,255,255,0.3)"
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="relative w-[450px] h-[800px] rounded-3xl overflow-hidden
                     border border-white/10 transform-gpu perspective-1000"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"
              whileHover={{
                opacity: 0,
                transition: { duration: 0.3 }
              }}
            />
            <motion.img 
              src="/background-img.jpg" 
              alt="Birthday" 
              className="w-full h-full object-cover"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4 }
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0"
              whileHover={{
                opacity: 1,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default MainBody