import React from "react";
import {
    SectionCardCss,
    CardBenefitCss,
    ImgBenefitsCss,
    ContentBenefitCss,
    ContentTitleCss,
    TextContentCss,
} from "../../styles/components/benefits/cardsBenefits"
import img1 from "../../images/sections/benefits/01.svg"
import img2 from "../../images/sections/benefits/02.svg"
import img3 from "../../images/sections/benefits/03.svg"
import img4 from "../../images/sections/benefits/04.svg"


const BenefitsCards: React.FC = () => {

    return (
        <SectionCardCss>
            <CardBenefitCss>
                <ImgBenefitsCss src={img1} width='' height='' alt="img" />
                <ContentBenefitCss>
                    <ContentTitleCss>Facilidad de Uso</ContentTitleCss>
                    <TextContentCss>Plataforma intuitiva y fácil de navegar con una interfaz amigable</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

            <CardBenefitCss>
                <ImgBenefitsCss src={img2} width='' height='' alt="img" />
                <ContentBenefitCss>
                    <ContentTitleCss>Seguridad</ContentTitleCss>
                    <TextContentCss>Tu tranquilidad, nuestra prioridad: datos protegidos con seguridad</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

            <CardBenefitCss>
                <ImgBenefitsCss src={img3} width='' height='' alt="img" />
                <ContentBenefitCss>
                    <ContentTitleCss>Soporte 24/7</ContentTitleCss>
                    <TextContentCss>Nuestro equipo de soporte está disponible en cualquier momento</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

            <CardBenefitCss>
                <ImgBenefitsCss src={img4} width='' height='' alt="img" />
                <ContentBenefitCss>
                    <ContentTitleCss>Red Amplia</ContentTitleCss>
                    <TextContentCss>Acceso a una amplia red de compradores, vendedores y Stock´s</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

        </SectionCardCss>
    );
};

export default BenefitsCards;
