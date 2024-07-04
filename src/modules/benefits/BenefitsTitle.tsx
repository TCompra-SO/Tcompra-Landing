import React from "react";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";
import { SectionTittleAreaCss } from "../../styles/components/benefits/sectionTitleAreaCss";
import { ButtonPrimary } from "../../styles/components/buttons/buttonPrimary";
const BenefitsTitle: React.FC = () => {
  return (

    <SectionTitleCss textalign="left" margin="0" width="100%">
      <AlertLabel text="Beneficios" />
      <SectionTittleAreaCss>

        <TitleCss color="var(--white)">
          ¿Por Qué Elegirnos?
        </TitleCss>
        <ButtonPrimary hovercolor="var(--header)" hoverbgcolor="var(--white)" border="var(--white) solid 2px" hoverborder="var(--white) solid 2px" href="/">Empieza Ahora </ButtonPrimary>
      </SectionTittleAreaCss>
    </SectionTitleCss>

  );
};

export default BenefitsTitle;
