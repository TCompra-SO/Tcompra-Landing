import React, { useRef, useState } from "react";
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

  const captcha = useRef<any>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (captcha.current && captcha.current.getValue) {
      const captchaValue = captcha.current.getValue();
      if (captchaValue) {
        console.log('Usuario Verificado');
        // Reiniciar el formulario
        setFormValues({
          name: "",
          phone: "",
          email: "",
          comment: ""
        });
      } else {
        console.log('No se puede verificar el captcha');
      }
    } else {
      console.log('No se puede verificar el captcha');
    }
    console.log('Botón clickeado');
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
          <ContainerContentCss $gap="1em" $alignhorizontal="center" $displayResponsive="flex">
            <ReCAPTCHA sitekey="6LdqJwwqAAAAAOKfcnROjZ85MigtLfwjU4Bhf95f" ref={captcha} />
            <ButtonPrimary
              href=""
              onClick={handleClick}
              $hovercolor="var(--header)"
              $hoverbgcolor="var(--white)"
              $border="var(--white) solid 2px"
              $hoverborder="var(--white) solid 2px"
            >
              Enviar Mensaje
            </ButtonPrimary>
          </ContainerContentCss>
        </FormContainer>
      </FormSectionCss>
    </SectionContactCss>
  );
};

export default FormContact;
