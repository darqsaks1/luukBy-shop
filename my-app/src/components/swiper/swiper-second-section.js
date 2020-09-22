import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SwiperSecondSection = () => {
    return (
        <div>

            <h2>Наши акции!</h2>
            <Swiper
                effect="fade"
                spaceBetween={50}
                slidesPerView={1}

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
};

export default SwiperSecondSection;