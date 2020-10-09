import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import prodObj from '../../data/luukby/prodObj';
import { setHref, setBucket } from '../../actions/actions-creator'
import { SET_PRODUCT_PAGE, SET_BUCKET } from '../../actions/actions-types'
import discountIcon from '../../assets/discountIcon.svg'
import bucketIcon from '../../assets/sm-bucket.svg'
import glassesIcon from '../../assets/sm-glasses.svg'
import { Animated } from "react-animated-css";

const Products = () => {
    const [state, setState] = useState(false)

    const productHref = useSelector(state => state.shop.productHref);
    const bucket = useSelector(state => state.shop.bucket);

    const dispatch = useDispatch();

    const renderHitsProdCard = () => {

        return prodObj.map((item => {
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
                                        number: 1
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

    const renderSecondProdCard = () => {

        return prodObj.map((item => {
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
                                        image: item.image
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
        <div className="products-categories">
            <h2> Каталог товаров</h2>
            
            <div className='products-categories-list'>
                {renderHitsProdCard()}
            </div>
            <div className={state === false ? 'new-cards' : 'hidden'} >
                <div className='click-but' onClick={() => { setState(true) }}>
                    ПОКАЗАТЬ ЕЩЁ
                </div>
            </div>
            <div className={state === true ? 'products-categories-list open' : 'hidden'}>
                {renderSecondProdCard()}
            </div>
        </div>
    );
}

export default Products;