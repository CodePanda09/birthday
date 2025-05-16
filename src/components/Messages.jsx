import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const LetterCard = ({ message, recipient }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`envelope-wrapper ${isOpen ? 'flap' : ''}`} onClick={toggleEnvelope}>
      <div className="envelope">
        <div className="letter">
          <div className="text">
            <strong>Dear {recipient},</strong>
            <p>{message}</p>
          </div>
        </div>
      </div>
      <div className="heart"></div>
    </div>
  );
};

const Messages = () => {
  const letters = [
    {
      recipient: "Mistu",
      message: "Your smile lights up my world more than all the stars in the night sky. You're the reason for my happiness and the source of my strength. Keep shining bright! 💖✨"
    },
    {
      recipient: "Cutie",
      message: "Every moment with you is a treasure that I hold dear to my heart. Your kindness and love make this world a better place. Stay amazing! 🌟💝"
    },
    {
      recipient: "Princess",
      message: "You have the most beautiful soul I've ever known. Your presence in my life is the greatest gift I could ask for. Never change! 👑💕"
    },
    {
      recipient: "MisPagal",
      message: "Humesha kush rehna apna khayal rakhna, gussa aur stress ko life mein thoda kam rakhna, humesha apne parents ki respect karna, aur dher sari masti karna 🎵💗"
    }
  ];

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-center mb-8 sm:mb-16 text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400
                   drop-shadow-[0_0_35px_rgba(236,72,153,0.4)]
                   tracking-tight leading-tight"
      >
        Special Messages
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 place-items-center"
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: index * 0.2
              }
            }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <LetterCard recipient={letter.recipient} message={letter.message} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Messages;
