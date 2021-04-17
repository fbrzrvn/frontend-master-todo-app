import styled, { createGlobalStyle } from 'styled-components';
import desktopDark from '../assets/images/bg-desktop-dark.jpg';
import desktopLight from '../assets/images/bg-desktop-light.jpg';
import mobileDark from '../assets/images/bg-mobile-dark.jpg';
import mobileLight from '../assets/images/bg-mobile-light.jpg';
import { COLOR } from './variables';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    background-image: url(${({ theme }) => theme.background});
    background-repeat: no-repeat;
    color: ${COLOR.white};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    line-height: 1;
    padding: 3em 2em;
    transition: all 1s ease;
 }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 540px;
`;

const bgLight = ({ width }) => {
  return width > 375 ? desktopLight : mobileLight;
};
const bgDark = ({ width }) => {
  return width > 375 ? desktopDark : mobileDark;
};

export const lightTheme = {
  body: COLOR.lightBackground,
  background: bgLight,
  listBackground: COLOR.white,
  listItems: COLOR.lightListItems,
  placeholderText: COLOR.lightFooter,
  inputText: COLOR.lightInput,
  checkBorder: COLOR.lightCheckBorder,
  completedItems: COLOR.lightDoneItems,
  footerText: COLOR.lightFooter,
  dropShadow: COLOR.darkShadow,
  hover: COLOR.lightListItems,
};

export const darkTheme = {
  body: COLOR.darkBackground,
  background: bgDark,
  listBackground: COLOR.darkListBackground,
  listItems: COLOR.darkListItems,
  placeholderText: COLOR.darkPlaceholder,
  inputText: COLOR.darkListItems,
  checkBorder: COLOR.darkCheckBorder,
  completedItems: COLOR.darkDoneItems,
  footerText: COLOR.darkFooter,
  dropShadow: COLOR.darkShadow,
  hover: COLOR.lightCheckBorder,
};
