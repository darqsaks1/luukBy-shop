import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const MainSwiper = () => {
    return (
        <Swiper

            spaceBetween={50}
            slidesPerView={1}
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false
            // }}
            navigation
            pagination={{ clickable: true }}


        >
            <div class="swiper-button-prev swiper-button-black"></div>

            <div class="swiper-button-next swiper-button-black"></div>
            <SwiperSlide>
                <div className='swiper-first-slide first_Sl'>
                    <h1>ЗАГОЛОВОК</h1>
                    <p>Новое поступление товаров, мода 2020 задает новый, сособенный стиль</p>
                    <div>Приобрести</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide'>
                    <h1>ЗАГОЛОВОК</h1>
                    <p>Новое поступление товаров, мода 2020 задает новый, сособенный стиль</p>
                    <div>Приобрести</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide'>
                    <h1>ЗАГОЛОВОК</h1>
                    <p>Новое поступление товаров, мода 2020 задает новый, сособенный стиль</p>
                    <div>Приобрести</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide'>
                    <h1>ЗАГОЛОВОК</h1>
                    <p>Новое поступление товаров, мода 2020 задает новый, сособенный стиль</p>
                    <div>Приобрести</div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default MainSwiper;