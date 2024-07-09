import React, { useState } from "react";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";
import { SectionTitleCss } from "../../styles/Utils/sectionTitleCss";
import { SectionTittleAreaCss } from "../../styles/components/benefits/sectionTitleAreaCss";
import { ButtonPrimary } from "../../styles/components/buttons/buttonPrimary";
import {
  SectionContactCss,
  ImgSectionCss,
  FormSectionCss,
  FormContainer,
  FormRow,
  FormGroup,
  Input,
  TextArea
} from "../../styles/components/contact/contactFormCss";
import ImgContact from "../../images/sections/contact/cta-newsletter.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { ContainerContentCss } from "../../styles/components/containers/container";

interface FormContactProps {
  // Puedes mantener cualquier otra prop necesaria aquí
}

const FormContact: React.FC<FormContactProps> = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, a través de una API)
    console.log("Formulario enviado:", formValues);

    // Limpia el formulario después de enviarlo si es necesario
    setFormValues({
      name: "",
      phone: "",
      email: "",
      comment: ""
    });
  };

  return (
    <SectionContactCss>
      <ImgSectionCss $imageurl={ImgContact}></ImgSectionCss>

      <FormSectionCss>
        <SectionTitleCss $textalign="left" width="100%" $margin="0">
          <AlertLabel text="Contactos" />
          <SectionTittleAreaCss>
            <TitleCss color="var(--white)" size="36px">
              No dude en Ponerse en Contacto
            </TitleCss>
          </SectionTittleAreaCss>
        </SectionTitleCss>

        <form onSubmit={handleFormSubmit}>
          <FormContainer>
            <FormRow>
              <FormGroup>
                <Input
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  width="48%"
                  $marginright="2%"
                  type="text"
                  placeholder="Nombre"
                />
                <Input
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  width="48%"
                  $marginleft="2%"
                  type="tel"
                  placeholder="Teléfono"
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Input
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Correo electrónico"
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <TextArea
                  name="comment"
                  value={formValues.comment}
                  onChange={handleInputChange}
                  placeholder="Comentario"
                  rows={4}
                />
              </FormGroup>
            </FormRow>
            <ContainerContentCss>
              <ReCAPTCHA sitekey="6LdqJwwqAAAAAOKfcnROjZ85MigtLfwjU4Bhf95f" />
              <ButtonPrimary href="" type="submit" $hovercolor="var(--header)" $hoverbgcolor="var(--white)" $border="var(--white) solid 2px" $hoverborder="var(--white) solid 2px">
                Enviar Mensaje
              </ButtonPrimary>
            </ContainerContentCss>
          </FormContainer>
        </form>
      </FormSectionCss>
    </SectionContactCss>
  );
};

export default FormContact;