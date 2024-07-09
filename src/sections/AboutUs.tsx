import React from 'react';
import { ContainerCss } from '../styles/components/containers/container';
import ImagesContent from '../modules/aboutUs/ImagesContent';
import InfoContent from '../modules/aboutUs/InfoContent';
import { AboutUsContainer } from '../styles/components/aboutUs/aboutUsContainer';
import SideEntrance from '../components/Motion/SideEntrance';
import GrowFromCenter from '../components/Motion/GrowFromCenter';
const AboutUs = () => {

    return (
        <ContainerCss id='AboutUs'>
            <AboutUsContainer>
                <SideEntrance id='infoAbout' initialX='-50%'>
                    <ImagesContent />
                </SideEntrance>

                <SideEntrance id='infoAbout' initialX='89%'>
                    <InfoContent />
                </SideEntrance>

            </AboutUsContainer>
        </ContainerCss>
    );
};

export default AboutUs;
