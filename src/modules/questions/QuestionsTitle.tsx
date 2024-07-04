import React from "react";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";

const QuestionsTitle: React.FC = () => {
  return (
    <SectionTitleCss>
      <AlertLabel text="Dudas y Cuestiones" />
      <TitleCss>
      Preguntas Frecuentes
      </TitleCss>
    </SectionTitleCss>
  );
};

export default QuestionsTitle;