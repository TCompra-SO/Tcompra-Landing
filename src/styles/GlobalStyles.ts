import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {

    font-family: "Rubik", verdana;
    src: url('utils/fonts/rubik/Rubik-VariableFont_wght.ttf') format('truetype');
     font-display: swap;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  }

:root {
  --body: #fff;
  --black: #000;
  --white: #fff;
  --theme: #bc1373;
  --theme-2: #8760FD;
  --theme-3: #2B2B6B;
  --theme-4: #ECE6FF;
  --header: #000000;
  --base: #bc1373;
  --text: #696969;
  --border: #E6E6E6;
  --border2: #373737;
  --ratting: #F8BC26;
  --bg: #510839;
  --bg2: #0D0D0D;
  --bg3: #121416;
  ---box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.06);
  --theme-blue: #0a2534;

--bs-gutter-x: 1.5rem;
 --bs-gutter-y: 0;

 --text-size:17px;
}

body {
    --fa-style-family-brands: "Rubik";
    font-family: "Rubik", verdana;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
       margin: 0;
    font-family: var(--fa-style-family-brands: "Rubik");
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;

    margin: 0;
    padding: 0;
    overflow-x: hidden; /
}

*, ::after, ::before {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    outline: none !important;
    cursor: pointer;
    color: var(--header);
    transition: all 0.4s ease-in-out;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
    
img, svg {
    vertical-align: middle;
}

html {
  scroll-behavior: smooth;

  margin: 0;
  padding: 0;
  overflow-x: hidden; /
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-size:var(--text-size);
    
}
h4 {
    font-size: 22px;
    font-weight: 500;
    line-height: 137%;
}

li{
  font-size:var(--text-size);
}

//////////////////////////
    
.sticky {
  position: fixed !important;
  top: 0 !important;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.9s;
  background-color: var(--white);
  box-shadow: var(---box-shadow);
  -webkit-transition: all 0.9s;
  transition: all 0.9s;
  -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}
.sticky.header-1 .header-main .sticky-logo .logo-1 {
  display: none;
}
.sticky.header-1 .header-main .sticky-logo .logo-2 {
  display: block;
}
.sticky.header-1 .header-main .main-menu ul li a {
  color: var(--header);
}
.sticky.header-1 .header-right .icon-items .icon {
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background-color: var(--theme);
  border-radius: 50%;
  color: var(--white);
}
.sticky.header-1 .header-right .icon-items .content p {
  color: var(--text);
}
.sticky.header-1 .header-right .icon-items .content h4 a {
  color: var(--header);
}
.sticky.header-1 .header-right .sidebar__toggle {
  color: var(--black);
}
.sticky.header-2 .header-main {
  border: none;
}
.sticky.header-6 {
  box-shadow: var(---box-shadow);
}
.sticky.header-6 .header-main .sticky-logo .logo-2 {
  display: block;
}
.sticky.header-6 .header-main .sticky-logo .logo-1 {
  display: none;
}
.sticky.header-6 .header-main .main-menu ul li a {
  color: var(--header);
}
.sticky.header-6 .header-main .main-menu ul li a:hover {
  color: var(--theme) !important;
}
.sticky.header-6 .header-main .header-right .sidebar__toggle {
  color: var(--header);
}
`;

export default GlobalStyles;
