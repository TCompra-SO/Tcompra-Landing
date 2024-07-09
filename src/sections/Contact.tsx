import React, { useState, useEffect } from 'react';
import { ContainerCss } from '../styles/components/containers/container';
import FormContact from '../modules/contact/FormContact';
import SideEntrance from '../components/Motion/SideEntrance';
import GrowFromCenter from '../components/Motion/GrowFromCenter';
const Contact = () => {

    return (
        <GrowFromCenter>
            <ContainerCss id='Contacts'>
                <FormContact />
            </ContainerCss>
        </GrowFromCenter>
    );
};

export default Contact;
