import React from 'react';
import { Link } from "react-router-dom";
import { setHref } from '../../actions/actions-creator'
import { SET_CATEGORIES } from '../../actions/actions-types'
import { useDispatch, useSelector } from 'react-redux';
const Categories = () => {
    useSelector(state => state.shop.categor); 
    const dispatch = useDispatch();

    return (
        <div className='categories'>
            <p>
                Популярные категории
            </p>
            <p>Выберите интересующий вас раздел</p>
            <div className='categories-section'>
                <div className='categories-block'>
                    <div className='first-cat'>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'sport')) }}>
                            <div className='f-c-1'>
                                < span> Товары для спорта </span>
                            </div >
                        </Link>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'child')) }}>
                            <div className='f-c-2'> < span>Детские товары </span></div>
                        </Link>
                    </div>
                    <div className='second-cat'>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'home')) }}>
                            <div className='s-c-1'> < span>Товары для дома </span></div>
                        </Link>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'life')) }}>  <div className='s-c-2'> < span>Красота и здоровье   </span> </div></Link>
                    </div>

                </div>
                <div className='categories-block'>
                    <div className='first-cat'>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'electric')) }}>     <div className='f-c-3'> <span> Электроника </span></div></Link>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'acsses')) }}>  <div className='f-c-4'><span> Аксессуары </span></div></Link>
                    </div>
                    <div className='second-cat'>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'auto')) }}>     <div className='s-c-3'><span> Автотовары  </span>   </div></Link>
                        <Link to='./shop' onClick={() => { dispatch(setHref(SET_CATEGORIES, 'gifts')) }}>  <div className='s-c-4'><span> Подарки</span> </div></Link>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Categories;
