import styled from "styled-components";
interface CardPackageProps {
  $backgroundcolor?: string;
  color?: string;
}

const CardPackageCss = styled.div<CardPackageProps>`
  //width: 32%;
  margin-top: 30px;
  background-color: ${(props) => props.$backgroundcolor || "var(--white)"};
  box-shadow: 0px 10px 60px rgba(188, 19, 115, 0.1);
  padding: 40px 45px;
  border-radius: 1.2rem;
 
    @media (max-width: 768px) {
    width: 100%;
   
`;

const SectionCardsCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
  font-size: 45px;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    display: block;
    padding: 0em;
  }
`;

const TitlePackageCss = styled.h3<CardPackageProps>`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  color: ${(props) => props.color || "var(--header)"};
`;

const PriceItemsCss = styled.div`
position: relative;
margin-top: 20px;
border-bottom: 1px solid var(--border);
margin-bottom: 1em;
}
`;

// Título
const PriceTitleCss = styled.h2<CardPackageProps>`
  color: ${(props) => props.color || "var(--theme)"};
  font-size: 45px;
  line-height: 120%;
  font-weight: 500;
  margin-bottom: 0.2em;
  margin-top: 0.5em;
`;

// Subíndice
const PriceSubCss = styled.sub<CardPackageProps>`
  color: ${(props) => props.color || "var(--theme)"};
  font-size: 24px;
  bottom: -0.25em;
  position: relative;
  line-height: 0;
  vertical-align: baseline;
`;

// Span
const PriceSpanCss = styled.span<CardPackageProps>`
  font-size: 16px;
  color: ${(props) => props.color || "var(--header)"};
`;

const ListCardCss = styled.ul`
  visibility: visible;
  padding: 0; /* Eliminamos el relleno predeterminado de la lista */
  .svg-inline--fa {
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    color: ${(props) => props.color || "var(--theme)"};
    margin-right: 10px;
  }
`;

const ListItemCardCss = styled.li<CardPackageProps>`
  list-style: none; /* Eliminamos los puntos de viñeta */
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.color || "var(--header)"};

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;

export {
  CardPackageCss,
  SectionCardsCss,
  TitlePackageCss,
  PriceItemsCss,
  PriceTitleCss,
  PriceSubCss,
  PriceSpanCss,
  ListCardCss,
  ListItemCardCss,
};
