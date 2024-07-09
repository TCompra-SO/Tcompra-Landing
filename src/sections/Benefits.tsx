import React from 'react'
import { motion } from 'framer-motion';
import { ContainerCss, ContainerMainCss } from '../styles/components/containers/container'
import BenefitsTitle from '../modules/benefits/BenefitsTitle'
import BenefitsCards from '../modules/benefits/BenefitsCards'
import SideEntrance from '../components/Motion/SideEntrance';
import GrowFromCenter from '../components/Motion/GrowFromCenter';
const Benefits = () => {
    return (


        <ContainerMainCss $backgroundcolor="var(--theme)" id='Benefits'>

            <ContainerCss>
                <SideEntrance id='Benefits' initialX='-89%'>
                    <BenefitsTitle />
                </SideEntrance>


                <GrowFromCenter>
                    <BenefitsCards />
                </GrowFromCenter>

            </ContainerCss>

        </ContainerMainCss>

    )
}

export default Benefits;