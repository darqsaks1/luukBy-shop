import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './context/navState';

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 0;
  padding: 12px;
  margin-top:8px;
  background: none;  z-index: 294;
  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
   
 
    span:nth-of-type(1) {
      width: 34px;
      border-radius: 20px;
    }
    span:nth-of-type(2) {
      width: 60px;
      border-radius: 20px;
    }
    span:nth-of-type(3) {
      width: 0px;
     
  }
  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }
    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }
    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 60px;
    }
  }
`;

const Bar = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  background-color: #fff;
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;