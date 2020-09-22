import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay  } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay ]);
const SwiperFirstSection = () => {
    return (
        <Swiper
            effect="fade"
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
                <div className='swiper-first-slide first_Sl'>
                  
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
    );
};

export default SwiperFirstSection;