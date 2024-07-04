import React from 'react';
import { InfoSectionCss } from '../../styles/components/aboutUs/infoSectionCss';
import InfoTextCss from '../../styles/components/aboutUs/infoTextCss';
import { InfoListCss, ListItem } from '../../styles/components/aboutUs/infoListCss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AlertLabel from '../utils/AlertLabel';
import { TitleCss } from '../../styles/Utils/titleCss';
import { ContainerContentCss } from '../../styles/components/containers/container';
const InfoContent: React.FC = () => {
  const items: string[] = [
    'Intercambia Bienes y Servicios',
    'Encuentra tu mejor Proveedor',
    'Mejora tu cadena Logistica',
  ];

  return (
    <InfoSectionCss>

      <ContainerContentCss alignhorizontal='flex-start'>
        <AlertLabel text="Nosotros" />
      </ContainerContentCss>
      <TitleCss>Únete a nosotros y descubre cómo puedes transformar tus ideas</TitleCss>
      <InfoTextCss>
        La primera plataforma en Perú dirigida al mercado latinoamericano, con el objetivo de impulsar el desarrollo de más micro y pequeñas empresas (Mypes) y emprendimientos propios. Con esta plataforma, nos comprometemos a facilitar conexiones efectivas y promover el crecimiento y la innovación en el mundo de los negocios.
      </InfoTextCss>
      <InfoListCss>
        {items.map((item, index) => (
          <ListItem key={index} >
            <FontAwesomeIcon icon={faCheck} />
            {item}
          </ListItem>
        ))}
      </InfoListCss>
    </InfoSectionCss>
  );
};

export default InfoContent;
