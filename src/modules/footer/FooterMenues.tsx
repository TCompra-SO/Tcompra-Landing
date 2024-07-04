import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowRight } from '../../styles/fontAwesome/fontawesome';
import {
    ContentMenuCss,
    ContentSocialIconsCss,
    MenuTitleCss,
    TextContentCss,
    SectionMenuesCss,
    ContactLinkCss,
    ListItemCss,
    ListItemsCss,
    LinkMenuCss,
    IconContentSocialCss,
    ImgIcon
} from "../../styles/components/footer/footerMenuesCss"
import facebookIcon from "../../images/utils/icons/facebook-f.svg";
import instagramIcon from "../../images/utils/icons/instagram.svg";
import youtubeIcon from "../../images/utils/icons/youtube.svg";
import linkedinIcon from "../../images/utils/icons/linkedin-in.svg";
import ImgUp from "../../images/utils/icons/angles-up-solid.svg"
import { SectionEnd, WidgetEnd, TextEnd, ItemUpCss, ImgUpCss } from "../../styles/components/footer/footerEndCss"
const FooterMenues: React.FC = () => {
    return (
        <SectionMenuesCss>
            <ContentMenuCss>
                <MenuTitleCss>Nosotros</MenuTitleCss>
                <TextContentCss>Sumérgete en la nueva era de los negocios con nuestra innovadora plataforma.</TextContentCss>
                <ContentSocialIconsCss>
                    <LinkMenuCss href="https://www.facebook.com/Tcompra/"><IconContentSocialCss><ImgIcon src={facebookIcon} /></IconContentSocialCss></LinkMenuCss>
                    <LinkMenuCss href="https://www.instagram.com/tcompralatam/"><IconContentSocialCss><ImgIcon src={instagramIcon} /></IconContentSocialCss></LinkMenuCss>
                    <LinkMenuCss href="https://www.youtube.com/channel/UCMllmt4Yz6googZOS9qPlLA"><IconContentSocialCss><ImgIcon src={youtubeIcon} /></IconContentSocialCss></LinkMenuCss>
                    <LinkMenuCss href="https://www.linkedin.com/company/tcompra"><IconContentSocialCss><ImgIcon src={linkedinIcon} /></IconContentSocialCss></LinkMenuCss>
                </ContentSocialIconsCss>
            </ContentMenuCss>

            <ContentMenuCss>
                <MenuTitleCss>Políticas</MenuTitleCss>
                <ListItemsCss>
                    <ListItemCss><LinkMenuCss href=""><FontAwesomeIcon icon={faArrowRight} />Política De Privacidad</LinkMenuCss></ListItemCss>
                    <ListItemCss><LinkMenuCss href=""><FontAwesomeIcon icon={faArrowRight} />Términos Y Condiciones</LinkMenuCss></ListItemCss>
                    <ListItemCss><LinkMenuCss href=""><FontAwesomeIcon icon={faArrowRight} />Liquidaciones</LinkMenuCss></ListItemCss>
                </ListItemsCss>
            </ContentMenuCss>

            <ContentMenuCss>
                <MenuTitleCss>Ayuda</MenuTitleCss>
                <ListItemsCss>
                    <ListItemCss><LinkMenuCss href=""><FontAwesomeIcon icon={faArrowRight} /> Preguntas Frecuentes</LinkMenuCss></ListItemCss>
                    <ListItemCss><LinkMenuCss href=""><FontAwesomeIcon icon={faArrowRight} /> ¿Cómo Comprar/Vender?</LinkMenuCss></ListItemCss>
                    <ListItemCss><LinkMenuCss href=""><FontAwesomeIcon icon={faArrowRight} /> Videos</LinkMenuCss></ListItemCss>
                </ListItemsCss>
            </ContentMenuCss>

            <ContentMenuCss>
                <MenuTitleCss>Contactos</MenuTitleCss>
                <TextContentCss> <ContactLinkCss href="mailto:contacto@plataforma.com"><FontAwesomeIcon icon={faEnvelope} />info@tcompra.com</ContactLinkCss></TextContentCss>
                <TextContentCss> <ContactLinkCss href=""><FontAwesomeIcon icon={faPhone} color="black" />(+51) 987456321</ContactLinkCss></TextContentCss>

            </ContentMenuCss>

            <SectionEnd>
                <WidgetEnd><TextContentCss> <ContactLinkCss href="">Blog</ContactLinkCss></TextContentCss></WidgetEnd>
                <WidgetEnd><LinkMenuCss href="#Homes"><ItemUpCss><ImgUpCss src={ImgUp} /></ItemUpCss></LinkMenuCss></WidgetEnd>
                <WidgetEnd><TextContentCss>© 2024 Tcompra.com. Todos los derechos reservados.</TextContentCss></WidgetEnd>
            </SectionEnd>
        </SectionMenuesCss>

    );
};

export default FooterMenues;
