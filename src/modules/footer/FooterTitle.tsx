import React from "react";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";
import { SectionTittleAreaCss } from "../../styles/components/benefits/sectionTitleAreaCss";
import { ButtonPrimary } from "../../styles/components/buttons/buttonPrimary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '../../styles/fontAwesome/fontawesome';
import { ImgLogo } from '../../styles/Utils/logo';
import LogoWhite from '../../images/logo/logo-white.svg';
import { FooterTitleCss } from "../../styles/components/footer/footerTitleCss";

import { LinkMenuCss } from "../../styles/components/footer/footerMenuesCss"
const BenefitsTitle: React.FC = () => {
    return (

        <SectionTitleCss $textalign="left" $margin="0" width="100%">
            <FooterTitleCss>
                <SectionTittleAreaCss>

                    <LinkMenuCss href="#"><ImgLogo src={LogoWhite} alt="Logo" /></LinkMenuCss>
                    <ButtonPrimary $hovercolor="var(--header)" $hoverbgcolor="var(--white)" href="/">Empezar &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></ButtonPrimary>

                </SectionTittleAreaCss>

            </FooterTitleCss >
        </SectionTitleCss >

    );
};

export default BenefitsTitle;
