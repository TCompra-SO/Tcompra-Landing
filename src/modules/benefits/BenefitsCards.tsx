import React from "react";
import {
    SectionCardCss,
    CardBenefitCss,
    ImgBenefitsCss,
    ContentBenefitCss,
    ContentTitleCss,
    TextContentCss,
} from "../../styles/components/benefits/cardsBenefits"
import img1 from "../../images/sections/benefits/01.jpg"
import img2 from "../../images/sections/benefits/02.jpg"
import img3 from "../../images/sections/benefits/03.jpg"
import img4 from "../../images/sections/benefits/04.jpg"


const BenefitsCards: React.FC = () => {

    return (
        <SectionCardCss>
            <CardBenefitCss>
                <ImgBenefitsCss src={img1} />
                <ContentBenefitCss>
                    <ContentTitleCss>Facilidad de Uso</ContentTitleCss>
                    <TextContentCss>Plataforma intuitiva y fácil de navegar con una interfaz amigable</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

            <CardBenefitCss>
                <ImgBenefitsCss src={img2} />
                <ContentBenefitCss>
                    <ContentTitleCss>Seguridad</ContentTitleCss>
                    <TextContentCss>Tu tranquilidad, nuestra prioridad: datos protegidos con seguridad</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

            <CardBenefitCss>
                <ImgBenefitsCss src={img3} />
                <ContentBenefitCss>
                    <ContentTitleCss>Soporte 24/7</ContentTitleCss>
                    <TextContentCss>Nuestro equipo de soporte está disponible en cualquier momento</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

            <CardBenefitCss>
                <ImgBenefitsCss src={img4} />
                <ContentBenefitCss>
                    <ContentTitleCss>Red Amplia</ContentTitleCss>
                    <TextContentCss>Acceso a una amplia red de compradores, vendedores y Stock´s</TextContentCss>
                </ContentBenefitCss>
            </CardBenefitCss>

        </SectionCardCss>
    );
};

export default BenefitsCards;
