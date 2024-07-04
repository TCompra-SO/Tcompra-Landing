import React, { useState, useEffect } from 'react';
import { ContainerCss } from '../styles/components/containers/container';
import FormContact from '../modules/contact/FormContact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Umbral ajustado para detectar visibilidad
        triggerOnce: true, // Activar la animación una sola vez
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(inView);
        console.log('inView:', inView); // Registrar después de la actualización del estado

        return () => console.log('isVisible después de la limpieza:', isVisible); // Función de limpieza para el registro
    }, [inView]);
    return (
        <ContainerCss id='Contacts'>
            <motion.div
                ref={ref} // Asignar el ref devuelto por useInView
                initial={{ x: '-100vw' }} // posición inicial fuera de la pantalla a la derecha
                animate={isVisible ? { x: 0 } : { x: '100vw' }} // animar hacia la posición x: 0 (a la izquierda) solo cuando es visible
                transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            >
                {isVisible && <FormContact />} {/* Renderizar FormContact solo cuando es visible */}
            </motion.div>
        </ContainerCss>
    );
};

export default Contact;
