import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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

const QuestionAcordeon: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordeonWrapper>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
        <AccordeonItem>
          <AccordeonTitle isactive={activeIndex === 0 ? true : false} onClick={() => toggleAccordion(0)}>
            <AcordeonTitleText>¿Qué es Tcompra?</AcordeonTitleText>
            <IconContainer isactive={activeIndex === 0}>
              <ExpandIcon isactive={activeIndex === 0}>&gt;</ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent isactive={activeIndex === 0}>
            <AcordeonContentText>
              Es una plataforma gratuita donde puedes solicitar u ofrecer bienes y servicios de todo tipo,
              organizados en categorías detalladas para compras al por mayor y menor. Esto permite a los usuarios optimizar
              y controlar sus procesos logísticos de manera eficiente.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </motion.div>

      <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
        <AccordeonItem>
          <AccordeonTitle isactive={activeIndex === 1} onClick={() => toggleAccordion(1)}>
            <AcordeonTitleText>¿Tcompra es Gratuito?</AcordeonTitleText>
            <IconContainer isactive={activeIndex === 1}>
              <ExpandIcon isactive={activeIndex === 1}>&gt;</ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent isactive={activeIndex === 1}>
            <AcordeonContentText>
              Sí. Una vez registrado, Tcompra te ofrece un servicio básico gratuito donde puedes solicitar y ofertar bienes y servicios.
              Además, Tcompra te brinda mejores beneficios a través de sus servicios pagados Premium y Super Premium.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
        <AccordeonItem>
          <AccordeonTitle isactive={activeIndex === 2} onClick={() => toggleAccordion(2)}>
            <AcordeonTitleText>¿Es necesario tener una empresa para poder solicitar u ofrecer servicios?</AcordeonTitleText>
            <IconContainer isactive={activeIndex === 2}>
              <ExpandIcon isactive={activeIndex === 2}>&gt;</ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent isactive={activeIndex === 2}>
            <AcordeonContentText>
              No, no necesitas ser una empresa para acceder a Tcompra. Tanto personas naturales como jurídicas pueden registrarse. Simplemente
              proporciona tus datos y listo, podrás ofertar o demandar en la plataforma. Si eres una persona natural, crea tu cuenta personal, y si representas a
              una empresa, asegúrate de que tu cuenta sea de tipo empresarial.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </motion.div>

      <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
        <AccordeonItem>
          <AccordeonTitle isactive={activeIndex === 3} onClick={() => toggleAccordion(3)}>
            <AcordeonTitleText>¿Qué tipo de productos y servicios encuentro en Tcompra?</AcordeonTitleText>
            <IconContainer isactive={activeIndex === 3}>
              <ExpandIcon isactive={activeIndex === 3}>&gt;</ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent isactive={activeIndex === 3}>
            <AcordeonContentText>
              Puedes encontrar todo tipo de publicaciones de otros usuarios y ofrecer o solicitar bienes, servicios, e incluso personal (RR.HH.).
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </motion.div>

      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
        <AccordeonItem>
          <AccordeonTitle isactive={activeIndex === 4} onClick={() => toggleAccordion(4)}>
            <AcordeonTitleText>¿Cómo funciona Tcompra?</AcordeonTitleText>
            <IconContainer isactive={activeIndex === 4}>
              <ExpandIcon isactive={activeIndex === 4}>&gt;</ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent isactive={activeIndex === 4}>
            <AcordeonContentText>
              El proceso de gestión de Tcompra te permite ver las ofertas recibidas para tus requerimientos a través de cuadros comparativos. Contamos con filtros por ciudad, tiempo de entrega, y más, facilitando la generación de una orden de compra con la mejor opción.
            </AcordeonContentText>
            <AcordeonContentText>
              Una vez finalizado el proceso de venta, tanto el cliente como el ofertante podrán calificarse mutuamente.
            </AcordeonContentText>
          </AccordeonContent>
        </AccordeonItem>
      </motion.div>

      <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}>
        <AccordeonItem>
          <AccordeonTitle isactive={activeIndex === 5} onClick={() => toggleAccordion(5)}>
            <AcordeonTitleText>¿Qué servicios ofrece Tcompra?</AcordeonTitleText>
            <IconContainer isactive={activeIndex === 5}>
              <ExpandIcon isactive={activeIndex === 5}>&gt;</ExpandIcon>
            </IconContainer>
          </AccordeonTitle>
          <AccordeonContent isactive={activeIndex === 5}>
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
      </motion.div>

    </AccordeonWrapper>

  );
}

export default QuestionAcordeon;
