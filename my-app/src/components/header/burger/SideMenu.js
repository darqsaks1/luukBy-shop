import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './context/navState';
import luukHader from '../../../assets/luukHeader.png'
import { Link } from "react-router-dom"
import NavState from './context/navState';
import ScrollAnimation from 'react-animate-on-scroll';
import useOnClickOutside from './hooks/hooks'
const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:flex-end !important;
  width: 60%;
  height: 1000px;;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 53px;
  padding-right: 0px;
  align-items: stretch;
  background: rgba(51, 51, 51, 0.9);
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.div`
  position: relative;
  display: flex;
  text-align: left;
  width:100%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 16px;
  line-height: 19px;
  flex-direction: column;
  justify-content:center;
  align-items: flex-start !important;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  border-bottom: 0.8px solid #888888;
  :hover {
    background-position: 90% 50%;
  }
`;

export const MenuLinkLow = styled.div`
  position: relative;
  display: flex;
  text-align: left;
  width:100%;
  padding-top: 25px;
  padding-bottom: 25px;
 
  
  flex-direction: column;
  justify-content:center;
  align-items: flex-start !important;
 
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #888888;
  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <NavState>
        <Link to='./' className='burger-link' >
          <MenuLink href="/" >Главная</MenuLink>
        </Link>
      </NavState>
      <NavState>
        <Link to='./shop' className='burger-link'>
          <MenuLink>Магазин</MenuLink>
        </Link>
      </NavState>
      <Link to='./about' className='burger-link'>
        <MenuLink>О нас</MenuLink>
      </Link>
      <Link to='./delivery' className='burger-link'>
        <MenuLink>Доставка</MenuLink>
      </Link>
      <Link to='./contacts' className='burger-link'>
        <MenuLink>Контакты</MenuLink>
      </Link>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className='action' delay={400}>
        <img src={luukHader} alt='img' className='luukHedaer' />
      </ScrollAnimation>
    </>
  ),
};