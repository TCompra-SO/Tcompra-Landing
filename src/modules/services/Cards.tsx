import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faHandHolding, faShoppingBasket, faUserTie } from '../../styles/fontAwesome/fontawesome';
import img1 from '../../images/sections/service/01.jpg';
import img2 from '../../images/sections/service/02.jpg';
import img3 from '../../images/sections/service/03.jpg';
import img4 from '../../images/sections/service/04.jpg';
import { IconCss, CardsCss, TitleCss, LinkCss, ImageCss, SectionCardsCss } from "../../styles/components/services/cardsCss";
const Cards: React.FC = () => {
  return (
    <SectionCardsCss>
      <CardsCss>
        <IconCss><FontAwesomeIcon icon={faDolly} /></IconCss>
        <TitleCss><LinkCss>Bienes Compra y Venta</LinkCss></TitleCss>
        <ImageCss src={img1} alt="image" />
      </CardsCss>

      <CardsCss $backgroundColor="var(--theme)">
        <IconCss $iconColor="var(--white)"><FontAwesomeIcon icon={faHandHolding} /></IconCss>
        <LinkCss><TitleCss color="var(--white)">Servicios Especializados</TitleCss></LinkCss>
        <ImageCss src={img2} alt="image" />
      </CardsCss>

      <CardsCss>
        <IconCss><FontAwesomeIcon icon={faShoppingBasket} /></IconCss>
        <LinkCss> <TitleCss>Liquidaciones y/o Stocks</TitleCss></LinkCss>
        <ImageCss src={img3} alt="image" />
      </CardsCss>

      <CardsCss>
        <IconCss><FontAwesomeIcon icon={faUserTie} /></IconCss>
        <LinkCss><TitleCss>Recursos Humanos</TitleCss></LinkCss>
        <ImageCss src={img4} alt="image" />
      </CardsCss>

    </SectionCardsCss>
  );
};

export default Cards;
