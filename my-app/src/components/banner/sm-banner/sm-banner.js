import React from 'react';
import banner1 from "../../../assets/bgSM.png";
import banner2 from "../../../assets/bgSM1.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
const SmallBanner = () => {
    return (
        <div className="sm-banner">
            <img src={banner1} className='banner-s1  desctop' />
            <img src={banner2} className='banner-s2 desctop' />
            <img src={banner3} className='banner-s1 mobile ' />
            <img src={banner4} className='banner-s2 mobile' />
        </div>
    );
}

export default SmallBanner;
