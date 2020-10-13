import React from 'react';
import banner1 from "../../../assets/bgSM.png";
import banner2 from "../../../assets/bgSM1.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";
import { setHref } from '../../../actions/actions-creator'
import { SET_PRODUCT_PAGE } from '../../../actions/actions-types'
import { useSelector, useDispatch } from 'react-redux';

const SmallBanner = () => {
    const productHref = useSelector(state => state.shop.productHref);
    const dispatch = useDispatch();
    return (
        <div className="sm-banner">
            <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight' className='action' delay={200}>
            <Link to='./productLanding'  className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/powerback-fourmah')) }}>
                <img src={banner1} className='banner-s1  desctop' />
                </Link>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' className='action' delay={200}>
            <Link to='./productLanding'  className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/bag-bear')) }}>

                <img src={banner2} className='banner-s2 desctop' />
                </Link>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight' className='action' delay={200}>
            <Link to='./productLanding'  className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/powerback-fourmah')) }}>
  <img src={banner3} className='banner-s1 mobile ' />                </Link>

            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' className='action' delay={200}>
            <Link to='./productLanding'  className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/bag-bear')) }}>
   <img src={banner4} className='banner-s2 mobile' />                </Link>

            </ScrollAnimation>
        </div>
    );
}

export default SmallBanner;
