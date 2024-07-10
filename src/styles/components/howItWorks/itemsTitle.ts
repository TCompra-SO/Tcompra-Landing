import styled from "styled-components";

interface ContenItemProps {
  $textalign?: "left" | "center" | "right";
  $alignitems?: "flex-start" | "center" | "flex-end";
}

const SectionItems = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  padding-bottom: 2em;
  align-items: center !important;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContenItem = styled.div<ContenItemProps>`
  visibility: visible;
  animation-delay: 0.2s;
  text-align: ${({ $textalign }) => $textalign || "center"} !important;
  width: 23.5%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignitems }) => $alignitems || "center"};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemTitleCss = styled.h4`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 500;
  line-height: 137%;
  margin-top: 0.3em;
`;

const ItemLink = styled.a`
  text-decoration: none;
  outline: none !important;
  cursor: pointer;
  color: var(--header);
  transition: all 0.4s ease-in-out;
  font-size: 22px;
  &:hover {
    color: var(--theme);
  }
`;

const ItemText = styled.p`
  font-weight: 500;
  margin: 0px;
  transition: all 0.4s ease-in-out;
  line-height: 28px;
  color: var(--text);
`;

const ItemCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 6px solid #bc1373;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #bc1373;
  font-weight: bold;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export {
  ItemTitleCss,
  ItemLink,
  ContenItem,
  SectionItems,
  ItemText,
  ItemCircle,
};
