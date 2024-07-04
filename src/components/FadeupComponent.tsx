// components/FadeUpSection.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeUpSectionProps {
    children: React.ReactNode;
}

const FadeUpComponent: React.FC<FadeUpSectionProps> = ({ children }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: 0.1, once: true }); // Ajustar el umbral a 0.1

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeUpComponent;
