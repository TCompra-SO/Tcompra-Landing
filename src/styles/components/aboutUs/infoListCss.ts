import styled from 'styled-components';



const InfoListCss = styled.ul`
  visibility: visible;
  padding: 0;
  .svg-inline--fa {
    font-family: "Font Awesome 5 Pro";
font-weight: 900;
    color: var(--theme); 
    margin-right: 10px;
}
`;

const ListItem = styled.li`
  list-style: none; 
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;


export { InfoListCss,ListItem };
