import React from 'react'
import { ContainerCss } from '../styles/components/containers/container'
import ServicesTitle from '../modules/services/ServicesTitle';
import Cards from '../modules/services/Cards';
import FadeUp from '../components/Motion/FadeUp'
import SideEntrance from '../components/Motion/SideEntrance';
const Services: React.FC = () => {

    return (

        <ContainerCss id='Title'>
            <FadeUp id='Services'>
                <ServicesTitle />
            </FadeUp>

            <SideEntrance id='Cards' initialX='50%'>
                <Cards />
            </SideEntrance>
        </ContainerCss>


    )
}

export default Services;