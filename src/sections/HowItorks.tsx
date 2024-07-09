import React from 'react'

import { ContainerCss } from '../styles/components/containers/container'
import ItemsContent from '../modules/howItWorks/ItemsContent';
import CardContent from '../modules/howItWorks/CardContent';
import SideEntrance from '../components/Motion/SideEntrance';
const HowItWorks = () => {
    return (


        <ContainerCss id='HowItWorks'>
        
        <SideEntrance id='Items' initialX='89%'>
                <ItemsContent />
         
                </SideEntrance>
                <SideEntrance id='card' initialX='-89%'>
                <CardContent />
        </SideEntrance>

        </ContainerCss>

    )
}

export default HowItWorks;