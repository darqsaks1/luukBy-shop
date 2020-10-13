import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import shopObj from '../../data/luukby/shop-obj';
import { setHref, setBucket } from '../../actions/actions-creator'
import { SET_PRODUCT_PAGE, SET_BUCKET, SET_CATEGORIES } from '../../actions/actions-types'

import ScrollAnimation from 'react-animate-on-scroll';
const Shop = () => {
    const [cat, setCat] = useState(false)
    const [value, setValue] = useState([{}])
    const [state, setState] = useState(false)
    const productHref = useSelector(state => state.shop.productHref);
    const bucket = useSelector(state => state.shop.bucket);
    const categor = useSelector(state => state.shop.categor);
    const dispatch = useDispatch();
    
    const renderHitsProdCard = () => {
        return shopObj.filter(item => !categor ? item : item.categories === categor).map((item => {

            return (
                <div
                    className='product-card-link-prod'
                    onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, item.hrefLink)) }}
                >

                    <div className='product-card-image-prod'>
                        <img src={item.image} alt='prodimage' className='disc-image' />
                        <div className='sm-buc'
                            onClick={() =>
                                dispatch(setBucket(SET_BUCKET,
                                    {
                                        name: item.name,
                                        price: item.price,
                                        image: item.image,
                                        number: 1,
                                    }))} >
                        </div>
                    </div>
                    <div class=' product-card-text-prod'>
                        <p class='name-card'>{item.name}</p>
                        <p>Цена: <span>{item.price} руб.</span></p>
                    </div>
                    <Link to='/productLanding'>
                        <div class='button-order-text'> ЗАКАЗАТЬ СЕЙЧАС </div>
                    </Link >
                </div>
            )
        }))
    }

    const setCategoriesHidden = () => {
        setCat(true)
    }
    return (
        <div className='shop-section'>
            <div className='shop-title'>
                Главная / Магазин
            </div>
            <div className='shop-wrapper'>
                <div className='cat-check ' onClick={setCategoriesHidden}>
                    Посмотреть категории
                </div>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className='action' delay={100} className='scroll'>
                    <div className={cat === false ? 'shop-categories' : 'shop-categories open1'}  >
                        <h3>КАТЕГОРИИ</h3>
                        <div>
                            <ul>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'life')) }} className={categor === 'life' ? 'active-cat' : ''}>Красота и здоровье</li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'sport')) }} className={categor === 'sport' ? 'active-cat' : ''}>Товары для спорта</li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'child')) }} className={categor === 'child' ? 'active-cat' : ''}>Детские товары</li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'home')) }} className={categor === 'home' ? 'active-cat' : ''}>Товары для дома </li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'auto')) }} className={categor === 'auto' ? 'active-cat' : ''}>Автотовары </li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'electric')) }} className={categor === 'electric' ? 'active-cat' : ''}>Электроника </li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'acsses')) }} className={categor === 'acsses' ? 'active-cat' : ''}>Аксессуары</li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'gifts')) }} className={categor === 'gifts' ? 'active-cat' : ''}> Подарки</li>
                                <li onClick={() => { dispatch(setHref(SET_CATEGORIES, '')) }} className={categor === '' ? 'active-cat' : ''}>Все товары </li>

                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className='shop-products'>
                    <div class='tittles'>
                        <h3>Каталог товаров</h3>
                        <Link to='/bucket'>
                            <div>Перейти в корзину </div>
                        </Link >
                    </div>
                    <div>
                        <div className="products-categories">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className='action' delay={100} className='scroll'>
                                <div className='products-categories-list'>
                                    {renderHitsProdCard()}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
