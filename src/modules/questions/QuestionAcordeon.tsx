import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import {
  AccordeonWrapper,
  AccordeonItem,
  AccordeonTitle,
  AccordeonContent,
  IconContainer,
  ExpandIcon,
  AcordeonContentText,
  AcordeonTitleText,
  ListAcordeon,
  ListItemAcordeon,
} from '../../styles/components/questions/QuestionAcordeon'; // Ajusta la ruta según sea necesario
import SideEntrance from '../../components/Motion/SideEntrance';

const QuestionAcordeon: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [activeIndex1, setActiveIndex1] = useState<number>(-1);
  const [activeIndex2, setActiveIndex2] = useState<number>(-1);
  const [activeIndex3, setActiveIndex3] = useState<number>(-1);
  const [activeIndex4, setActiveIndex4] = useState<number>(-1);
  const [activeIndex5, setActiveIndex5] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? 0 : index));

  };

  const toggleAccordion1 = (index: number) => {
    setActiveIndex1(prev => (prev === index ? 0 : index));// Cambia entre 0 y el índice pasado
  };

  const toggleAccordion2 = (index: number) => {
    setActiveIndex2(prev => (prev === index ? 0 : index));// Cambia entre 0 y el índice pasado
  };
  const toggleAccordion3 = (index: number) => {
    setActiveIndex3(prev => (prev === index ? 0 : index));// Cambia entre 0 y el índice pasado
  };

  const toggleAccordion4 = (index: number) => {
    setActiveIndex4(prev => (prev === index ? 0 : index));// Cambia entre 0 y el índice pasado
  };

  const toggleAccordion5 = (index: number) => {
    setActiveIndex5(prev => (prev === index ? 0 : index));// Cambia entre 0 y el índice pasado
  };


  return (
    <AccordeonWrapper>
      <SideEntrance id='1' initialX='-89%'>
        <AccordeonItem>
          <AccordeonTitle onClick={() => toggleAccordion(1)}>
            <AcordeonTitleText>¿Qué es Tcompra?</AcordeonTitleText>
            <IconContainer $isactive={activeIndex}>
              <ExpandIcon $isactive={activeIndex}> <FontAwesomeIcon icon={faChevronDown} rotation={270} /></ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent $isactive={activeIndex}>
            <AcordeonContentText>
              Es una plataforma gratuita donde puedes solicitar u ofrecer bienes y servicios de todo tipo,
              organizados en categorías detalladas para compras al por mayor y menor. Esto permite a los usuarios optimizar
              y controlar sus procesos logísticos de manera eficiente.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </SideEntrance>

      <SideEntrance id='2' initialX='89%'>
        <AccordeonItem>
          <AccordeonTitle onClick={() => toggleAccordion1(1)}>
            <AcordeonTitleText>¿Tcompra es Gratuito?</AcordeonTitleText>
            <IconContainer $isactive={activeIndex1}>
              <ExpandIcon $isactive={activeIndex1}><FontAwesomeIcon icon={faChevronDown} rotation={270} /></ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent $isactive={activeIndex1}>
            <AcordeonContentText>
              Sí. Una vez registrado, Tcompra te ofrece un servicio básico gratuito donde puedes solicitar y ofertar bienes y servicios.
              Además, Tcompra te brinda mejores beneficios a través de sus servicios pagados Premium y Super Premium.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </SideEntrance>

      <SideEntrance id='3' initialX='-89%'>
        <AccordeonItem>
          <AccordeonTitle onClick={() => toggleAccordion2(1)}>
            <AcordeonTitleText>¿Es necesario tener una empresa para poder solicitar u ofrecer servicios?</AcordeonTitleText>
            <IconContainer $isactive={activeIndex2}>
              <ExpandIcon $isactive={activeIndex2}><FontAwesomeIcon icon={faChevronDown} rotation={270} /></ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent $isactive={activeIndex2}>
            <AcordeonContentText>
              No, no necesitas ser una empresa para acceder a Tcompra. Tanto personas naturales como jurídicas pueden registrarse. Simplemente
              proporciona tus datos y listo, podrás ofertar o demandar en la plataforma. Si eres una persona natural, crea tu cuenta personal, y si representas a
              una empresa, asegúrate de que tu cuenta sea de tipo empresarial.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </SideEntrance>

      <SideEntrance id='4' initialX='89%'>
        <AccordeonItem>
          <AccordeonTitle onClick={() => toggleAccordion3(1)}>
            <AcordeonTitleText>¿Qué tipo de productos y servicios encuentro en Tcompra?</AcordeonTitleText>
            <IconContainer $isactive={activeIndex3}>
              <ExpandIcon $isactive={activeIndex3}><FontAwesomeIcon icon={faChevronDown} rotation={270} /></ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent $isactive={activeIndex3}>
            <AcordeonContentText>
              Puedes encontrar todo tipo de publicaciones de otros usuarios y ofrecer o solicitar bienes, servicios, e incluso personal (RR.HH.).
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </SideEntrance>


      <SideEntrance id='5' initialX='89%'>
        <AccordeonItem>
          <AccordeonTitle onClick={() => toggleAccordion4(1)}>
            <AcordeonTitleText>¿Cómo funciona Tcompra?</AcordeonTitleText>
            <IconContainer $isactive={activeIndex4}>
              <ExpandIcon $isactive={activeIndex4}><FontAwesomeIcon icon={faChevronDown} rotation={270} /></ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent $isactive={activeIndex4}>
            <AcordeonContentText>
              El proceso de gestión de Tcompra te permite ver las ofertas recibidas para tus requerimientos a través de cuadros comparativos. Contamos con filtros por ciudad, tiempo de entrega, y más, facilitando la generación de una orden de compra con la mejor opción.
            </AcordeonContentText>
            <AcordeonContentText>
              Una vez finalizado el proceso de venta, tanto el cliente como el ofertante podrán calificarse mutuamente.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </SideEntrance>

      <SideEntrance id='6' initialX='-89%'>
        <AccordeonItem>
          <AccordeonTitle onClick={() => toggleAccordion5(1)}>
            <AcordeonTitleText>¿Qué servicios ofrece Tcompra?</AcordeonTitleText>
            <IconContainer $isactive={activeIndex5}>
              <ExpandIcon $isactive={activeIndex5}><FontAwesomeIcon icon={faChevronDown} rotation={270} /></ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent $isactive={activeIndex5}>
            <ListAcordeon>
              <ListItemAcordeon>
                <FontAwesomeIcon icon={faCheckCircle} /> Permite crear y buscar requerimientos.
              </ListItemAcordeon>
              <ListItemAcordeon>
                <FontAwesomeIcon icon={faCheckCircle} /> Los usuarios pueden publicar requerimientos.
              </ListItemAcordeon>
              <ListItemAcordeon>
                <FontAwesomeIcon icon={faCheckCircle} /> Facilita la recepción y envío de cotizaciones.
              </ListItemAcordeon>
              <ListItemAcordeon>
                <FontAwesomeIcon icon={faCheckCircle} /> Ayuda a elaborar cuadros comparativos para un mejor análisis de las opciones disponibles.
              </ListItemAcordeon>
              <ListItemAcordeon>
                <FontAwesomeIcon icon={faCheckCircle} /> Genera órdenes de compra de manera eficiente.
              </ListItemAcordeon>
              <ListItemAcordeon>
                <FontAwesomeIcon icon={faCheckCircle} /> Permite calificar tanto al cliente como al proveedor.
              </ListItemAcordeon>
            </ListAcordeon>
          </AccordeonContent>
        </AccordeonItem>
      </SideEntrance>

    </AccordeonWrapper>
  );
};

export default QuestionAcordeon;
