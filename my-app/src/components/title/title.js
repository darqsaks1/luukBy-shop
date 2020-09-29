import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logoLuukBy from '../../assets/logo.svg'
import bucketImg from '../../assets/bucket.svg'
import searchImg from '../../assets/search.svg'
import { NavLink, Link } from "react-router-dom";
const Title = () => {
    const dispatch = useDispatch();
    const bucketState = useSelector(state => state.shop.bucketState);
    const productHref = useSelector(state => state.shop.productHref);
    return (
        <div className="title-container">
            <div className="image-logo">
                <img src={logoLuukBy} alt='logo' />
            </div>
            <div className="title-list">
                <div>
                    <NavLink to='./' activeClassName="active"
                    >
                        ГЛАВНАЯ
                    </NavLink>
                </div>
                <div>
                    <NavLink to='./about' activeClassName="active"
                    >
                        МАГАЗИН
                    </NavLink>
                </div>
                <div>
                    <NavLink to='./about' activeClassName="active"
                    >
                        O НАС
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/delivery' activeClassName='active'  >
                        ДОСТАВКА
                    </NavLink>
                </div>

                <div>
                    <NavLink to='/contacts' activeClassName='active'  >
                        КОНТАКТЫ
                    </NavLink>

                </div>
            </div>
            <div className='bucket-list'>
                <div className='search-icon-wrapper'>
                    <img src={searchImg} alt='searh-icon' />
                </div>
                <Link to='/bucket'>
                    <div className='bucket-icon-wrapper'>
                        <img src={bucketImg} alt='searh-icon' />
                        <p> {bucketState.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Title;
