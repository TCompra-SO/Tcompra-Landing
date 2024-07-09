import React from "react";
import { SectionCardCss, InfoCardCss, ImgCardCss, ButtonCardCss, CircleContainer, CircleStyled, CircleImage, TextCardCss } from "../../styles/components/howItWorks/itemCard";
import { TitleCss } from "../../styles/Utils/titleCss";
import { faArrowRight } from '../../styles/fontAwesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonPrimary } from "../../styles/components/buttons/buttonPrimary";
import imgLogo from "../../images/utils/favicon.svg"

const CardContent: React.FC = () => {
    return (
        <SectionCardCss>
            <InfoCardCss>
                <TitleCss color="var(--white)">Sumérgete en la Nueva Era de los Negocios</TitleCss>
                <TextCardCss>¡El futuro de los negocios está a solo un clic de distancia!</TextCardCss>
            </InfoCardCss>

            <ImgCardCss>
                <CircleContainer>
                    <CircleStyled $size={200} $border={5} $shadowopacity={0.1} />
                    <CircleStyled $size={175} $border={5} $shadowopacity={0.2} />
                    <CircleStyled $size={150} $border={5} $shadowopacity={0.3} />
                    <CircleStyled $size={125} $border={5} $shadowopacity={0.4} />
                    <CircleImage $imageurl={imgLogo} />
                </CircleContainer>
            </ImgCardCss>

            <ButtonCardCss>
                <ButtonPrimary $bgcolor="transparent" $hovercolor="var(--header)" $hoverbgcolor="var(--white)" $border="var(--white) solid 2px" $hoverborder="var(--white) solid 2px" href="#">Empezar &nbsp;<FontAwesomeIcon icon={faArrowRight} /></ButtonPrimary>
            </ButtonCardCss>
        </SectionCardCss>
    );
};

export default CardContent;
