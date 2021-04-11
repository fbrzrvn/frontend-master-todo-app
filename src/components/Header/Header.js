import React from 'react';
import MoonICon from '../../assets/svg/icon-moon.svg';
import SunICon from '../../assets/svg/icon-sun.svg';
import {
  HeaderH1,
  HeaderWrap,
  ToggleBtn,
  ToggleBtnWrap,
} from './HeaderElements';

const Header = ({ theme, toggleTheme }) => {
  return (
    <HeaderWrap>
      <HeaderH1>TODO</HeaderH1>
      <ToggleBtnWrap onClick={toggleTheme}>
        {theme === 'dark' ? (
          <ToggleBtn src={SunICon} alt="sun-icon" />
        ) : (
          <ToggleBtn src={MoonICon} alt="moon-icon" />
        )}
      </ToggleBtnWrap>
    </HeaderWrap>
  );
};

export default Header;
