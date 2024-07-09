import React from 'react';

import { ImagesCardCss, Img1CardCss, Img2CardCss } from '../../styles/components/aboutUs/imagesCardCss';
import { ImagesSectionCss } from '../../styles/components/aboutUs/imagesSectionCss' // Asegúrate de importar desde la ruta correcta
import img1 from '../../images/sections/aboutUs/01.svg'
import img2 from '../../images/sections/aboutUs/02.svg'

const ImagesContent: React.FC = () => {

    return (

        <ImagesSectionCss>
            <Img1CardCss>
                <ImagesCardCss src={img1} />
            </Img1CardCss>

            <Img2CardCss>
                <ImagesCardCss src={img2} />
            </Img2CardCss>
        </ImagesSectionCss>

    );
};

export default ImagesContent;