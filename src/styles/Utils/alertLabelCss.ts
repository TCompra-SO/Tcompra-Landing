import styled from "styled-components";

const AlertLabelCss = styled.span`
    color: var(--theme);
    margin-bottom: 15px;
    display: inline-flex; /* Usamos flexbox para centrar verticalmente */
    align-items: center; /* Centra verticalmente los elementos */
    font-weight: 500;
    font-size: 18px;
    position: relative;
    background-color: var(--white);
    box-shadow: 0px 10px 60px rgba(188, 19, 115, 0.2);
    padding: 6px 12px;
    border-radius: 10px;
}
`;
const IconAlertCss = styled.img`
padding-right: 0.5rem;

animation: icon-animation 1.3s ease-in-out infinite; /* Duración total de la animación */

@keyframes icon-animation {
    0%, 100% {
        transform: rotate(0deg);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: rotate(15deg); /* Ajusta el ángulo de sacudida */
    }
    20%, 40%, 60%, 80% {
        transform: rotate(-15deg); /* Ajusta el ángulo de sacudida */
    }
}
`;


export { AlertLabelCss, IconAlertCss };
