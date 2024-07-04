import React from "react";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";
import { SectionTittleAreaCss } from "../../styles/components/benefits/sectionTitleAreaCss";
import { ButtonPrimary } from "../../styles/components/buttons/buttonPrimary";
import { SectionContactCss, ImgSectionCss, FormSectionCss, FormContainer, FormRow, FormGroup, Input, TextArea } from "../../styles/components/contact/contactFormCss";
import ImgContact from '../../images/sections/contact/cta-newsletter.jpg'
const FormContact: React.FC = () => {
  return (
    <SectionContactCss>
      <ImgSectionCss imageurl={ImgContact}></ImgSectionCss>

      <FormSectionCss>
        <SectionTitleCss textalign="left" width="100%" margin="0">
          <AlertLabel text="Contactos" />
          
          <SectionTittleAreaCss>
            <TitleCss color="var(--white)" size="36px">
              No dude en Ponerse en Contacto
            </TitleCss>
          </SectionTittleAreaCss>

        </SectionTitleCss>

        <FormContainer>
          <FormRow>
            <FormGroup>
              <Input width="48%" marginright="2%" type="text" placeholder="Nombre" />
              <Input width="48%" marginleft="2%" type="tel" placeholder="Teléfono" />
            </FormGroup>

          </FormRow>
          <FormRow>
            <FormGroup>
              <Input type="email" placeholder="Correo electrónico" />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <TextArea placeholder="Comentario" rows={4} />
            </FormGroup>
          </FormRow>
          <ButtonPrimary hovercolor="var(--header)" hoverbgcolor="var(--white)" border="var(--white) solid 2px" hoverborder="var(--white) solid 2px" href="/">Enviar Mensaje</ButtonPrimary>
        </FormContainer>




      </FormSectionCss>

    </SectionContactCss>


  );
};

export default FormContact;
