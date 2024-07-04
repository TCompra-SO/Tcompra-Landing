import React from 'react'
import { ContainerCss } from '../styles/components/containers/container'
import PackagesTitle from '../modules/packages/PackagesTitle';
import CardsPackages from '../modules/packages/CardsPackages';


const Packages = () => {
    return (


        <ContainerCss>
           <PackagesTitle />
           <CardsPackages />
        </ContainerCss>

    )
}

export default Packages;