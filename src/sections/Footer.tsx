import React from 'react'
import { ContainerCss, ContainerMainCss } from '../styles/components/containers/container'
import FooterTitle from '../modules/footer/FooterTitle'
import BenefitsCards from '../modules/benefits/BenefitsCards'
import FooterMenues from '../modules/footer/FooterMenues'
const Footer = () => {
    return (


        <ContainerMainCss backgroundcolor="var(--bg)">
            <ContainerCss>
                <FooterTitle />
                <FooterMenues />
            </ContainerCss>

        </ContainerMainCss>

    )
}

export default Footer;