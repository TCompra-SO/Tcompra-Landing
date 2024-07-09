import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionProps = {
  children: React.ReactNode;
};

const GrowFromCenter: React.FC<SectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,  // Ajuste del umbral al 1%
  });

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: hasBeenInView ? 1 : 0.5, opacity: hasBeenInView ? 1 : 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
      style={{
        width: '100%', // Ancho relativo al viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
        overflowX: 'hidden',
        overflowY: 'hidden', // Controla el desbordamiento horizontal solo para esta sección
        padding: '1rem', // Ajusta los rellenos según tus necesidades
        boxSizing: 'border-box',
        
      
        // Asegura que el padding se incluya en el ancho total
      }
      }
    >
      {children}
    </motion.div>
  );
};

export default GrowFromCenter;
