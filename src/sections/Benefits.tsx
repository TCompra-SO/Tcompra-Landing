import React from 'react'
import { motion } from 'framer-motion';
import { ContainerCss, ContainerMainCss } from '../styles/components/containers/container'
import BenefitsTitle from '../modules/benefits/BenefitsTitle'
import BenefitsCards from '../modules/benefits/BenefitsCards'
const Benefits = () => {
    return (


        <ContainerMainCss backgroundcolor="var(--theme)" id='Benefits'>
            <motion.div
                initial={{ x: '-100vw' }} // posición inicial fuera de la pantalla a la derecha
                animate={{ x: 0 }} // animar hacia la posición x: 0 (a la izquierda)
                transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            >
                <ContainerCss>
                    <BenefitsTitle />
                    <BenefitsCards />
                </ContainerCss>
            </motion.div>
        </ContainerMainCss>

    )
}

export default Benefits;