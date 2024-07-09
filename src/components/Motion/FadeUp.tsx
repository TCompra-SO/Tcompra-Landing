import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const FadeUp: React.FC<SectionProps> = ({ id, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,  // Ajuste del umbral al 10%
  });

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: hasBeenInView ? '0%' : '100%', opacity: hasBeenInView ? 1 : 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.01,
      }}
      style={{
        width: '100%', // Ancho relativo al viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
        overflowX: 'hidden', // Controla el desbordamiento horizontal solo para esta sección
        padding: '1rem', // Ajusta los rellenos según tus necesidades
        boxSizing: 'border-box', // Asegura que el padding se incluya en el ancho total
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;

