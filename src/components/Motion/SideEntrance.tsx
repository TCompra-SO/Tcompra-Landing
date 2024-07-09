import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  initialX: string; // Dirección inicial de entrada en vw, %, etc.
};

const SideEntrance: React.FC<SectionProps> = ({ id, children, initialX }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
      initial={{ x: initialX, opacity: 0 }}
      animate={{ x: hasBeenInView ? '0%' : initialX, opacity: hasBeenInView ? 1 : 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.02,
      }}
      style={{
        width: '100%', // Ancho relativo al viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
        overflowX: 'hidden', // Controla el desbordamiento horizontal solo para esta sección
        padding: '1rem', // Ajusta los rellenos según tus necesidades

      }}
    >
      {children}
    </motion.div>
  );
};

export default SideEntrance;


