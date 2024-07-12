import React from "react";
import { SectionCardsCss, CardPackageCss, TitlePackageCss, PriceItemsCss, PriceTitleCss, PriceSubCss, PriceSpanCss, ListCardCss, ListItemCardCss } from "../../styles/components/packages/PackageCardCss";
import { ButtonPrimary } from "../../styles/components/buttons/buttonPrimary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const CardsPackages: React.FC = () => {
  const items1: string[] = [
    'Bienes Ilimitados',
    'Servicios Ilimitados',
    'Liquidaciones Ilimitados',
    'RR.HH Ilimitados',
    'Ofertas Ilimitados',
    'Chat'
  ];

  const items2: string[] = [
    'Requerimientos Ilimitados',
    'Ofertas Ilimitados',
    'Beneficios Premium',
    'Chat',
    'Certificación de Proveedores',
    'Multiusuarios'
  ];

  const items3: string[] = [
    'Requerimientos Ilimitados',
    'Ofertas Ilimitados',
    'Beneficios Premium',
    'Chat',
    'Certificación de Proveedores',
    'Multiusuarios/Cargos'
  ];

  const cardVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    initial: {
      scale: 1,
    },
  };




  return (
    <SectionCardsCss>

      <motion.div
        className="card"
        variants={cardVariants}
        whileHover="hover"
        initial="initial"
      >
        <CardPackageCss>
          <TitlePackageCss>Plan Free</TitlePackageCss>
          <ButtonPrimary $bgcolor="black" color="white" $padding="20px 8em" $hoverbgcolor="var(--theme)" href="">Elegir Paquete</ButtonPrimary>
          <PriceItemsCss>
            <PriceTitleCss>
              <PriceSubCss>S/.</PriceSubCss>
              Free
              <PriceSpanCss>/Anual</PriceSpanCss>
            </PriceTitleCss>
          </PriceItemsCss>
          <ListCardCss>
            {items1.map((item, index) => (
              <ListItemCardCss key={index} >
                <FontAwesomeIcon icon={faCheck} />
                {item}
              </ListItemCardCss>
            ))}
          </ListCardCss>

        </CardPackageCss>
      </motion.div>

      <motion.div
        className="card"
        variants={cardVariants}
        whileHover="hover"
        initial="initial"
      >
        <CardPackageCss $backgroundcolor="var(--theme)">
          <TitlePackageCss color="var(--white)">Plan Premium</TitlePackageCss>
          <ButtonPrimary href="" $bgcolor="var(--theme)" color="white" $hovercolor="black" $hoverborder="var(--white) solid 2px" $border="var(--white) solid 2px" $padding="20px 8em" $hoverbgcolor="var(--white)">Elegir Paquete</ButtonPrimary>
          <PriceItemsCss>
            <PriceTitleCss color="var(--white)">
              <PriceSubCss color="var(--white)">S/.</PriceSubCss>
              12
              <PriceSpanCss color="var(--white)">/Anual</PriceSpanCss>
            </PriceTitleCss>
          </PriceItemsCss>
          <ListCardCss>
            {items2.map((item, index) => (
              <ListItemCardCss key={index} color="var(--white)">
                <FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />
                {item}
              </ListItemCardCss>
            ))}
          </ListCardCss>
        </CardPackageCss>
      </motion.div>


      <motion.div
        className="card"
        variants={cardVariants}
        whileHover="hover"
        initial="initial"
      >
        <CardPackageCss>
          <TitlePackageCss>Plan Free</TitlePackageCss>
          <ButtonPrimary href="" $bgcolor="black" color="white" $padding="20px 8em" $hoverbgcolor="var(--theme)">Elegir Paquete</ButtonPrimary>
          <PriceItemsCss>
            <PriceTitleCss>
              <PriceSubCss>S/.</PriceSubCss>
              Free
              <PriceSpanCss>/Anual</PriceSpanCss>
            </PriceTitleCss>
          </PriceItemsCss>
          <ListCardCss>
            {items3.map((item, index) => (
              <ListItemCardCss key={index} >
                <FontAwesomeIcon icon={faCheck} />
                {item}
              </ListItemCardCss>
            ))}
          </ListCardCss>
        </CardPackageCss>
      </motion.div>

    </SectionCardsCss>
  );
};

export default CardsPackages;
