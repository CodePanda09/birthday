import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const ImageGallery = () => {
  const images = [
    { id: 1, url: '/img1.jpg', title: 'Mis Attitude' },
    { id: 2, url: '/img2.jpg', title: 'Mis Pagal' },
    { id: 3, url: '/img3.jpg', title: 'Mis with bindi' },
    { id: 4, url: '/img4.jpg', title: 'Mis Beautiful' },
    { id: 5, url: '/img5.jpg', title: 'Mis Beautiful returns' },
    { id: 6, url: '/img6.jpg', title: 'Mis with Beautiful hairs' },
    { id: 7, url: '/img7.jpg', title: 'Last met' },
    { id: 8, url: '/img8.jpg', title: 'Mis colagte smile' },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 2,
    768: 2,
    640: 1,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="py-8 sm:py-16 px-4 sm:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-center mb-8 sm:mb-16 text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400
                   drop-shadow-[0_0_35px_rgba(236,72,153,0.4)]
                   tracking-tight leading-tight"
      >
        Beautiful Memories 
      </motion.h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-3 sm:gap-6 w-full max-w-7xl mx-auto"
        columnClassName="masonry-column"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6"
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 0 60px rgba(236,72,153,0.4)"
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className="relative group rounded-2xl overflow-hidden 
                       bg-gradient-to-br from-pink-500/10 to-purple-500/10 
                       backdrop-blur-sm border border-white/10"
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover scale-105 transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Title always at bottom, appears on any hover */}
                <div
                  className="absolute bottom-0 left-0 w-full p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center"
                >
                  <span className="text-white font-bold text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    {image.title}
                  </span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 
                         mix-blend-overlay pointer-events-none"
              />
            </motion.div>
          </motion.div>
        ))}
      </Masonry>
    </motion.section>
  );
};

export default ImageGallery;