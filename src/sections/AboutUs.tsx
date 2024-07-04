import React, { useState } from 'react';
import { ContainerCss } from '../styles/components/containers/container';
import { motion } from 'framer-motion';
import ImagesContent from '../modules/aboutUs/ImagesContent';
import InfoContent from '../modules/aboutUs/InfoContent';
import { AboutUsContainer } from '../styles/components/aboutUs/aboutUsContainer';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {

    return (
        <ContainerCss id='AboutUs'>
            <AboutUsContainer>

                <ImagesContent />
                <InfoContent />


            </AboutUsContainer>
        </ContainerCss>
    );
};

export default AboutUs;
