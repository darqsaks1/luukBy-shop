import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
// Import Swiper styles
import shopObj from '../../../data/luukby/shop-obj';
import { setHref, setBucket } from '../../../actions/actions-creator'
import { SET_PRODUCT_PAGE, SET_BUCKET } from '../../../actions/actions-types'
import discountIcon from '../../../assets/discountIcon.svg'
import bucketIcon from '../../../assets/sm-bucket.svg'
import glassesIcon from '../../../assets/sm-glasses.svg'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Recomend = () => {
    const productHref = useSelector(state => state.shop.productHref);
    const bucket = useSelector(state => state.shop.bucket);
    const dispatch = useDispatch();
    const renderHitsProdCard = () => {
        return shopObj.map((item => {
            return (
                <SwiperSlide>

                    <div key={Math.random(shopObj.length)}
                        className='product-card-link'
                        onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, item.hrefLink)) }}
                    >
                        <div className='product-card-image'>
                            <img src={discountIcon} alt='disc' className='discount' />
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
                        <div className=' product-card-text'>
                            <p className='name-card'>{item.name}</p>
                            <p>Цена: <span>{item.price} руб.</span></p>
                        </div>
                        <Link to='/productLanding'>
                            <div className='button-order-text'> ЗАКАЗАТЬ СЕЙЧАС </div>
                        </Link >
                    </div>
                </SwiperSlide >
            )
        }))
    }
    return (
        <div className="hits-categories">
            <h2> Наши рекомендации</h2>
            <div className='human-categories-list'>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={4}
                    navigation
                    breakpoints={{
                        1440: {

                            slidesPerView: 4,
                        },
                        1300: {

                            slidesPerView: 4,
                        },
                        1201: {

                            slidesPerView: 4,
                        },
                        950: {

                            slidesPerView: 3,

                        },
                        609: {

                            slidesPerView: 2,
                        },
                        320: {

                            slidesPerView: 1,
                        },
                    }}
                >
                    <div className="swiper-button-prev swiper-button-black"></div>

                    <div className="swiper-button-next swiper-button-black"></div>
                    {renderHitsProdCard()}
                </Swiper>

            </div>
        </div>
    );
}

export default Recomend;