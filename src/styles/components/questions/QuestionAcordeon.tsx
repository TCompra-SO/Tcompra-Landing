// AccordionStyles.ts
import styled from 'styled-components';

export const AccordeonWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media(max-width:768px){
    width:100%;
  }
`;

export const AccordeonItem = styled.div`

  overflow: hidden;
  color: var(--header);
  border-radius: 1rem;
  border: 2px solid rgba(16, 24, 40, 0.1);
  background: #F9FAFB;
  transition: background-color 0.3s ease;
  width:100%;
`;

export const AccordeonTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: var(--header);
  font-size: 20px;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  font-size: 22px;
  font-weight: 500;
  line-height: 137%;
`;

interface AccordeonContentProps {
  $isactive: number; // Ajusta la interfaz para aceptar booleano o string
}

export const AccordeonContent = styled.div<AccordeonContentProps>`
  height: ${({ $isactive }) => ($isactive === 1 ? 'auto' : '0')};
  overflow: hidden;
  transition: height 0.5s ease, padding 0.5s ease;
  padding: ${({ $isactive }) => ($isactive === 1 ? '15px' : '0 15px')};
`;

interface IconContainerProps {
  $isactive: number;
}

export const IconContainer = styled.div<IconContainerProps>`
  background-color: ${({ $isactive }) => ($isactive === 1 ? 'var(--theme)' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  padding:4px 4px 4px 4px;
`;
interface ExpandIconProps {
  $isactive: number;
}
export const ExpandIcon = styled.div<ExpandIconProps>`
  color: ${({ $isactive }) => ($isactive === 1 ? 'var(--white)' : 'var(--theme)')};
  font-size: 1em;
  transition: transform 0.5s ease;
  transform: ${({ $isactive }) => ($isactive === 1 ? 'rotate(90deg)' : 'rotate(0deg)')};
  padding:2px 2px 2px 2px;
`;

export const AcordeonContentText = styled.p`
  padding-right: 0.5em;
  padding-left: 0.5em;
  color: var(--text);
  background: #F9FAFB;
  border-radius: 1rem;
`;

export const AcordeonTitleText = styled.h4`
  font-weight: 500;
  color: var(--header);
  letter-spacing: -0.2px;
  border: 0;
  border-radius: 1rem;
  box-shadow: none;
  background: #F9FAFB;
  margin: 0;
  font-size: 20px;
  border: none;
`;

export const ListAcordeon = styled.ul`
  visibility: visible;
  padding: 0;
  .svg-inline--fa {
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    color: var(--theme); 
    margin-right: 10px;
  }
`;

export const ListItemAcordeon = styled.li`
  color: var(--text);
  background: #F9FAFB;
  border-radius: 1rem;
  margin-bottom: 1em;
`;
