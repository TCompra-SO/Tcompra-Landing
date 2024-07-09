import React from "react";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";

const PackagesTitle: React.FC = () => {
  return (
    <SectionTitleCss>
      <AlertLabel text="Planes y Precios" />
      <TitleCss>
      Ofrecemos un Paquete de Precios Increíbles
      </TitleCss>
    </SectionTitleCss>
  );
};

export default PackagesTitle;
