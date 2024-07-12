import React from "react";
import { ItemTitleCss, ItemLink, ContenItem, SectionItems, ItemText, ItemCircle } from "../../styles/components/howItWorks/itemsTitle";
import AlertLabel from "../../modules/utils/AlertLabel";
import { TitleCss } from "../../styles/Utils/titleCss";


const ItemsContent: React.FC = () => {
    return (
        <SectionItems>

            <ContenItem $textalign="left" $alignitems="flex-start">
                <AlertLabel text="Proceso" />
                <TitleCss>¿Cómo Funciona?</TitleCss>
            </ContenItem>

            <ContenItem>
                <ItemCircle>1</ItemCircle>
                <ItemLink href="">Regístrate Gratis</ItemLink>
                <ItemText>Crea tu cuenta en pocos minutos con unos pocos clics</ItemText>
            </ContenItem>

            <ContenItem>
                <ItemCircle>2</ItemCircle>
                <ItemLink href="">Explora y Publica</ItemLink>
                <ItemText>Encuentra lo que necesitas o publica tus requerimientos</ItemText>
            </ContenItem>

            <ContenItem>
                <ItemCircle>3</ItemCircle>
                <ItemLink href="">Conecta y Vende</ItemLink>
                <ItemText>Conéctate con usuarios y realiza transacciones de forma segura</ItemText>
            </ContenItem>

        </SectionItems>
    );
};

export default ItemsContent;
