import React from "react";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";

const ServicesTitle: React.FC = () => {
  return (
    <SectionTitleCss>
      <AlertLabel text="Nuestros Servicios" />
      <TitleCss>
        Te Brindamos el Mejor Servicio de Calidad Para tus Requerimientos
      </TitleCss>
    </SectionTitleCss>
  );
};

export default ServicesTitle;
