import React from 'react'
import { Section } from '../styles/components/home/section'
import { ContainerCss, ContainerContentCss } from '../styles/components/containers/container'
import imgBack from '../images/sections/home/back-01.jpg'
import Header1 from '../modules/home/Header1'
import Header2 from '../modules/home/Header2'
import ButtonsLink from '../modules/home/ButtonsLink'
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <Section src={imgBack} id='Homes'>

      <ContainerCss>
        <motion.div
          initial={{ y: '-100vh' }} // posición inicial fuera de la pantalla arriba
          animate={{ y: 0 }} // animar hacia la posición y: 0 (abajo)
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          <ContainerContentCss marginbottom='4em' margintop='4em'>
            <Header1 />
            <Header2 />
            <ButtonsLink />
          </ContainerContentCss>
        </motion.div>
      </ContainerCss>

    </Section>
  )
}

export default Home