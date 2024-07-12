import React from 'react'
import { ContainerCss, ContainerMainCss } from '../styles/components/containers/container'
import FooterTitle from '../modules/footer/FooterTitle'
import FooterMenues from '../modules/footer/FooterMenues'
import GrowFromCenter from '../components/Motion/GrowFromCenter'

GrowFromCenter
const Footer = () => {
    return (


        <ContainerMainCss $backgroundcolor="var(--bg)">
            <GrowFromCenter>
                <ContainerCss>
                    <FooterTitle />
                    <FooterMenues />
                </ContainerCss>
            </GrowFromCenter>
        </ContainerMainCss>

    )
}

export default Footer;