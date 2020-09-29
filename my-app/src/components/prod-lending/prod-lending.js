import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FirstProdSectionTittleOne from '../../data/luukby/first-prod-sect/firstDataProdSection'
import { Swiper, SwiperSlide } from 'swiper/react';

import { SET_BUCKET } from '../../actions/actions-types'
import { setBucket } from '../../actions/actions-creator'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
// Import Swiper styles

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const ProdLanding = () => {
    const productHref = useSelector(state => state.shop.productHref);
    const bucket = useSelector(state => state.shop.bucket);
    const dispatch = useDispatch();




    const getHref = () => {
        for (let i = 0; i < FirstProdSectionTittleOne.length; i++) {

            if (FirstProdSectionTittleOne[i].hrefLink === productHref) {

                return (
                    <div className='prod-landing-card'>
                        <img src={FirstProdSectionTittleOne[i].image} />
                        <div className='prod-name'> {FirstProdSectionTittleOne[i].name}</div>
                        <div className='prod-description'> {FirstProdSectionTittleOne[i].description}</div>
                        <div className='prod-price'> цена {FirstProdSectionTittleOne[i].price} руб</div>
                        <div className='gal-swiper-container'>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <div className='gal-swiper'>
                                        <img src={FirstProdSectionTittleOne[i].galImage[0]} alt='prod-swiper' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='gal-swiper'>
                                        <img src={FirstProdSectionTittleOne[i].galImage[1]} alt='prod-swiper' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='gal-swiper'>
                                        <img src={FirstProdSectionTittleOne[i].galImage[2]} alt='prod-swiper' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='gal-swiper'>
                                        <img src={FirstProdSectionTittleOne[i].galImage[3]} alt='prod-swiper' />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <button onClick={() =>
                            dispatch(setBucket(SET_BUCKET,
                               {
                                    name: FirstProdSectionTittleOne[i].name,
                                    price: FirstProdSectionTittleOne[i].price,
                                    image: FirstProdSectionTittleOne[i].image
                                }
                            ))}> В КОРЗИНУ</button>
                    </div>
                )
            }
        }

    }
    return (
        <div className='landing'>
            {getHref()}
        </div>
    );
}

export default ProdLanding;