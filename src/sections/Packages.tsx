import React from 'react'
import { ContainerCss } from '../styles/components/containers/container'
import PackagesTitle from '../modules/packages/PackagesTitle';
import CardsPackages from '../modules/packages/CardsPackages';
import SideEntrance from '../components/Motion/SideEntrance';
import FadeUp from '../components/Motion/FadeUp';
import GrowFromCenter from '../components/Motion/GrowFromCenter';

const Packages = () => {
    //<SideEntrance id="section1" initialX="89%">
    return (


        <ContainerCss>
            <FadeUp id='Title'>
           <PackagesTitle />
           </FadeUp>
           <GrowFromCenter >
           <CardsPackages />
           </GrowFromCenter>
        </ContainerCss>
     
    )
}

export default Packages;