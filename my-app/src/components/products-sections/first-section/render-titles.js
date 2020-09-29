import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstProdSectionTittleOne from '../../../data/luukby/first-prod-sect/firstDataProdSection'
import FirstProdSectionTittleTwo from '../../../data/luukby/first-prod-sect/SecondDataProdSection'
import { setHref } from '../../../actions/actions-creator'
import { SET_PRODUCT_PAGE } from '../../../actions/actions-types'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const RenderTittles = () => {
    const productHref = useSelector(state => state.shop.productHref);
    const dispatch = useDispatch();
    const renderTitleFirtProdSection = () => {
        return FirstProdSectionTittleOne.map((item => {
            return (
                <Link to='/productLanding'>
                    <div
                        className='product-card-link'
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, item.hrefLink)) }}
                    >
                        <div className='product-card'>
                            {/* <img src={item.image} alt='prodimage' /> */}
                            <h4>  {item.name}</h4>
                            <h3>Цена:{item.price} руб.</h3>
                        </div>
                    </div>
                </Link >


            )
        }))
    }
    const renderTitleSecondProdSection = () => {
        return FirstProdSectionTittleTwo.map((item => {
            return (
                <Link to='/productLanding'>
                    <div
                        className='product-card-link'
                        onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, item.hrefLink)) }}
                    >
                        <div className='product-card'>
                            <img src={item.image} alt='prodimage' />
                            <h4>  {item.name}</h4>
                            <h3>Цена:{item.price} руб.</h3>
                        </div>
                    </div>
                </Link>


            )
        }))
    }
    return (
        <div class='f-p-section'>
            <div className='first-product_container'>
                {renderTitleFirtProdSection()}
            </div >
            <div className='first-product_container'>
                {renderTitleSecondProdSection()}
            </div >
        </div>
    )
}

export default RenderTittles
