import React from 'react'; // Asegúrate de importar desde la ruta correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '../../styles/fontAwesome/fontawesome';
import { ButtonPrimary } from '../../styles/components/buttons/buttonPrimary';
import { ButtonLink } from '../../styles/components/buttons/buttonLink'
import { ContainerSection } from '../../styles/components/home/section'
const ButtonsLink: React.FC = () => {
    return (
        <ContainerSection >
            <ButtonPrimary hovercolor="var(--header)" hoverbgcolor="var(--white)" href="/">Empieza Ahora <FontAwesomeIcon icon={faArrowRight} /></ButtonPrimary>
            <ButtonLink href="#">Descubre Más &nbsp;<FontAwesomeIcon icon={faArrowRight} /></ButtonLink>
        </ContainerSection>
    );
};

export default ButtonsLink;