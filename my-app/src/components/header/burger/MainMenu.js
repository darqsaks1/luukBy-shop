
import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './hooks/hooks.js';
import { MenuContext } from './context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';

const Navbar = styled.div`

  display: none;
  /* position: fixed; */
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
   
  color: rgb(248, 248, 248);
  min-width: 0px;   
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
   
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500; 
  @media (max-width: 620px) {
      display: block;
  }
`;

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <header ref={node} className='header-none'>
            <Navbar>
                <HamburgerButton />
            </Navbar>
            <SideMenu />
        </header>
    );
};

export default MainMenu;
