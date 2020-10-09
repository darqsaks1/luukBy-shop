import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import shopObj from '../../data/luukby/shop-obj';
import { setHref, setBucket } from '../../actions/actions-creator'
import { SET_PRODUCT_PAGE, SET_BUCKET, SET_CATEGORIES } from '../../actions/actions-types'
import discountIcon from '../../assets/discountIcon.svg'
import bucketIcon from '../../assets/sm-bucket.svg'
import glassesIcon from '../../assets/sm-glasses.svg'
import titleImg from "../../assets/shop-img/tittle.png";
const Shop = () => {

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
    return (
        <div className='shop-section'>
            <div className='shop-title'>
                Главная / Магазин
            </div>
            <div className='shop-wrapper'>
                <div className='shop-categories' >
                    <h3>КАТЕГОРИИ</h3>
                    <div>
                        <ul>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'life')) }}>Красота и здоровье</li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'child')) }}>Товары для спорта</li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'child')) }}>Детские товары</li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'child')) }}>Автотовары </li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'electric')) }}>Гаджеты </li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'gifts')) }}> Подарки</li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'acses')) }}>Сумки</li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, 'child')) }}>Часы </li>
                            <li onClick={() => { dispatch(setHref(SET_CATEGORIES, '')) }}>Все товары </li>
                        </ul>
                    </div>
                </div>
                <div className='shop-products'>
                    <div class='tittles'>
                        <h3>Каталог товаров</h3>
                        <Link to='/bucket'>
                            <div>Перейти в корзину </div>
                        </Link >
                    </div>
                    <div>
                        <div className="products-categories">
                            <div className='products-categories-list'>
                                {renderHitsProdCard()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
