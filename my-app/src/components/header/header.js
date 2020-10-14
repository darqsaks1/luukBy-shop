import React from 'react';
import phoneImg from '../../assets/header-logo/mobile.svg'
import instagramImg from '../../assets/header-logo/instagrma.svg'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import MainMenu from './burger/MainMenu'
import NavState from './burger/context/navState';
const Header = () => {
    const dispatch = useDispatch();
    const bucket = useSelector(state => state.shop.bucket);

    return (
        <div>
            <div className="header">
                <NavState>
                    <MainMenu />
                </NavState>
                <div className='header-list'>
                    <div>
                        <Link to='./'>
                            Минск
                    </Link>
                    </div>
                    <div>
                        <Link to='./shop'>
                            Скидки
                    </Link>
                    </div>
                    <div>
                        <a href='#hits'>
                            Акции
                    </a>
                    </div>
                    <div>
                        <Link to='/delivery'>
                            Оплата
                    </Link>
                    </div>
                </div>
                <div className='links-page'>
                    <a href="tel:+375(29)111-11-11" className='phone-link'>
                        <img src={phoneImg} alt='phone' />
                        <p>+375(29)885-38-16</p>
                    </ a>
                    <a href="https://www.instagram.com/luuk.by/">
                        <img src={instagramImg} alt='phone' />
                    </ a>
                </div>
            </div >
        </div>
    );
}

export default Header;
