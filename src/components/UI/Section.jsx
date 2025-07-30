import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  id 
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    green: 'theme-bg-primary-light'
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-8 md:py-16 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;