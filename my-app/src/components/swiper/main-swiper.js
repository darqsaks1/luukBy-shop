import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { setHref } from '../../actions/actions-creator'
import { SET_PRODUCT_PAGE } from '../../actions/actions-types'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import SwiperImgOne1440px from "../../assets/swiper/swiper1.png"
import SwiperImgOne1024px from "../../assets/swiper/1024/swiper-1-2.png"
import SwiperImgOne768px from "../../assets/swiper/1024/swiper-1-3.png"
import SwiperImgOne480px from "../../assets/swiper/1024/swiper-1-4.png"
import SwiperImgOne390px from "../../assets/swiper/1024/swiper-1-5.png"
import Swiper2_1 from "../../assets/swiper/1024/swiper-2-1.png"
import Swiper2_2 from "../../assets/swiper/1024/swiper-2-2.png"
import Swiper2_3 from "../../assets/swiper/1024/swiper-2-3.png"
import Swiper2_4 from "../../assets/swiper/1024/swiper-2-4.png"
import Swiper2_5 from "../../assets/swiper/1024/swiper-2-5.png"
import Swiper3_1 from "../../assets/swiper/1024/swiper-3-1.png"
import Swiper3_2 from "../../assets/swiper/1024/swiper-3-2.png"
import Swiper3_3 from "../../assets/swiper/1024/swiper-3-3.png"
import Swiper3_4 from "../../assets/swiper/1024/swiper-3-4.png"
import Swiper3_5 from "../../assets/swiper/1024/swiper-3-5.png"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { useSelector, useDispatch } from 'react-redux';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const MainSwiper = () => {
    const productHref = useSelector(state => state.shop.productHref);
    const dispatch = useDispatch();
    return (
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
            <div className="swiper-button-prev swiper-button-black"></div>

            <div className="swiper-button-next swiper-button-black"></div>
            <SwiperSlide>
                <div className='swiper-first-slide first_S1'>
                    <img src={SwiperImgOne1440px} className='swiper1-1440px' />
                    <img src={SwiperImgOne1024px} className='swiper1-1024px' />
                    <img src={SwiperImgOne768px} className='swiper1-768px' />
                    <img src={SwiperImgOne480px} className='swiper1-480px' />
                    <img src={SwiperImgOne390px} className='swiper1-390px' />
                    <Link to='./productLanding' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/mujskoi-klatch')) }}>
                        <div>Приобрести</div>
                    </Link>
                </div>
                <div className='swiper-first-slide first_S1-1'>
                    <Link to='./productLanding' className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/mujskoi-klatch')) }}>
                        <img src={SwiperImgOne1440px} className='swiper1-1440px' />
                        <img src={SwiperImgOne1024px} className='swiper1-1024px' />
                        <img src={SwiperImgOne768px} className='swiper1-768px' />
                        <img src={SwiperImgOne480px} className='swiper1-480px' />
                        <img src={SwiperImgOne390px} className='swiper1-390px' />

                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide first_S2'>
                    <img src={Swiper2_1} className='swiper1-1440px' />
                    <img src={Swiper2_2} className='swiper1-1024px' />
                    <img src={Swiper2_3} className='swiper1-768px' />
                    <img src={Swiper2_4} className='swiper1-480px' />
                    <img src={Swiper2_5} className='swiper1-390px' />
                    <Link to='./productLanding' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/sumkaa-klatch')) }}>
                        <div>Приобрести</div>
                    </Link>
                </div>
                <div className='swiper-first-slide first_S2-2'>
                    <Link to='./productLanding' className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, '/mujskoi-klatch')) }}>
                        <img src={Swiper2_1} className='swiper1-1440px' />
                        <img src={Swiper2_2} className='swiper1-1024px' />
                        <img src={Swiper2_3} className='swiper1-768px' />
                        <img src={Swiper2_4} className='swiper1-480px' />
                        <img src={Swiper2_5} className='swiper1-390px' />

                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide first_S3'>
                    <img src={Swiper3_1} className='swiper1-1440px' />
                    <img src={Swiper3_2} className='swiper1-1024px' />
                    <img src={Swiper3_3} className='swiper1-768px' />
                    <img src={Swiper3_4} className='swiper1-480px' />
                    <img src={Swiper3_5} className='swiper1-390px' />
                    <Link to='./productLanding' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, 'steclo')) }}>
                        <div>Приобрести</div>
                    </Link>
                </div>
                <div className='swiper-first-slide first_S3-3'>
                    <Link to='./productLanding' className='big-link' onClick={() => { dispatch(setHref(SET_PRODUCT_PAGE, 'steclo')) }}>
                        <img src={Swiper3_1} className='swiper1-1440px' />
                        <img src={Swiper3_2} className='swiper1-1024px' />
                        <img src={Swiper3_3} className='swiper1-768px' />
                        <img src={Swiper3_4} className='swiper1-480px' />
                        <img src={Swiper3_5} className='swiper1-390px' />

                    </Link>
                </div>
            </SwiperSlide>


        </Swiper>
    );
};

export default MainSwiper;