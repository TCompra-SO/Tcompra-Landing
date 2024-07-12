// VideoComponentStyles.ts
import styled from "styled-components";

interface ContentProps {
  $marginTop?: string;
  $marginBottom?: string;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.$marginTop || "0"}; /* Margen superior, por defecto 0 */
  margin-bottom: ${(props) => props.$marginBottom || "1.5em"}; /* Margen inferior, por defecto 1.5em */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  margin-bottom: 16px;
`;

interface IframeProps {
  width: string;
  height: string;
  autoplay?: boolean; // Parámetro autoplay opcional
}

export const StyledIframe = styled.iframe<IframeProps>`
  width: ${(props) => props.width || "560px"};
  height: ${(props) => props.height || "315px"};
  border: 0;
  allow: accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
  allowFullScreen;
  z-index: 99;

  ${(props) => props.autoplay && "autoplay"}; // Condición para añadir autoplay
`;