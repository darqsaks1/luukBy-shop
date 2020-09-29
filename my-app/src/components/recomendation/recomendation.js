import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 
 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
// Import Swiper styles
 
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Recomendation = () => {
    return (
        <div>
            <h2>Рекомендуем!</h2>
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
                <div className='swiper-first-slide'>
                    Slide 1
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide'>
                    Slide 2
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide'>
                    Slide 3
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-first-slide'>
                    Slide 4
            </div>
            </SwiperSlide>

        </Swiper>
        </div>
    );
}

export default Recomendation;
