import React from 'react'
import { motion } from 'framer-motion';
import { ContainerCss } from '../styles/components/containers/container'
import ItemsContent from '../modules/howItWorks/ItemsContent';
import CardContent from '../modules/howItWorks/CardContent';

const HowItWorks = () => {
    return (


        <ContainerCss id='HowItWorks'>
            <motion.div
                initial={{ x: '-100vw' }} // posición inicial fuera de la pantalla a la derecha
                animate={{ x: 0 }} // animar hacia la posición x: 0 (a la izquierda)
                transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            >
                <ItemsContent />
            </motion.div>

            <motion.div
                initial={{ x: '100vw' }} // posición inicial fuera de la pantalla a la derecha
                animate={{ x: 0 }} // animar hacia la posición x: 0 (a la izquierda)
                transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            >
                <CardContent />
            </motion.div>

        </ContainerCss>

    )
}

export default HowItWorks;