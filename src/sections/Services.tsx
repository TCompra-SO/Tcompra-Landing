import React from 'react'
import { ContainerCss } from '../styles/components/containers/container'
import ServicesTitle from '../modules/services/ServicesTitle';
import Cards from '../modules/services/Cards';
import FadeUpComponent from '../components/FadeupComponent';
const Services: React.FC = () => {

    return (

        <ContainerCss id='Services'>
            <FadeUpComponent>
                <ServicesTitle />
            </FadeUpComponent>

            <FadeUpComponent>
                <Cards />
            </FadeUpComponent>
        </ContainerCss>


    )
}

export default Services;