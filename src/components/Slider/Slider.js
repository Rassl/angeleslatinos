import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import arl from '../../images/arley.png'
// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={arl} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={arl} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={arl} alt="" />
            </SwiperSlide>
            ...
        </Swiper>
    );
};
