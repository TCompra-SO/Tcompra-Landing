import styled from "styled-components";

interface CardsProps {
  backgroundColor?: string;
  iconColor?: string;
}

const SectionCardsCss = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--bs-gutter-x);
  margin-top: calc(-1 * var(--bs-gutter-y));
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;

  @media (max-width: 768px) {
    display: bloack;
  }
`;

const IconCss = styled.div<{ $iconColor?: string }>`
  margin-bottom: 20px;
  transition: all 0.4s ease-in-out;
  color: ${(props) => props.$iconColor || "var(--theme)"};
  font-size: 60px;
`;

const CardsCss = styled.div<{ $backgroundColor?: string }>`
  width: 23.5%;
  margin-top: 30px;
  padding: 40px 30px;
  background: ${(props) =>
    props.$backgroundColor || "rgba(188, 19, 115, 0.07)"};
  border: 2px solid rgba(81, 8, 57, 0.1);
  border-radius: 1.2rem;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: var(--theme);
    color: var(--white);

    ${IconCss} {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface TitleProps {
  color?: string;
}

const TitleCss = styled.h3<TitleProps>`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: ${({ color }) => color};
`;

const LinkCss = styled.a`
  text-decoration: none;
  outline: none !important;
  cursor: pointer;
  color: var(--header);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--white);
  }
`;

interface ImgProps {
  src: string;
}

const ImageCss = styled.img<ImgProps>`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  content: url(${(props) => props.src});
`;

export { CardsCss, IconCss, TitleCss, LinkCss, ImageCss, SectionCardsCss };
