import "animate.css/animate.min.css";
import React from 'react';
import SmallBanner from './sm-banner/sm-banner'
import z1 from "../../assets/z1.svg";
import { Animated } from "react-animated-css";
import bannerImg from '../../assets/banner.png'
import skidkiImg from '../../assets/70.svg'
import actionsImg from '../../assets/actions.svg'
import childImg from '../../assets/child.png'
import seventeen from '../../assets/skidki.svg'
import fiveteen from '../../assets/50.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import smileLuuk from '../../assets/smile-luuk.svg'
const Banner = () => {
    return (
        <div>
            {/* <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration='2000' animationInDelay='1000' isVisible={true}> */}
            <div className="banner">
                <div className='bg' >
                    <div>
                        <ScrollAnimation animateIn='bounceInLeft' className='action' delay={400}>
                            <img src={smileLuuk} alt='smile-luuk' className='smile' />
                        </ScrollAnimation>
                    </div>
                    {/* <ScrollAnimation animateIn='bounce' className='action' delay={400}>
                        <img src={actionsImg} alt='smile-luuk' className='actions' />
                    </ScrollAnimation>
                    <img src={childImg} alt='smile-luuk' className='child' />
                    <ScrollAnimation animateIn='bounce' className='bounc' delay={400}>
                        <img src={seventeen} alt='smile-luuk' className='seventeen' />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounce' className='skidki' delay={400}>
                        <img src={skidkiImg} alt='smile-luuk' className='skidkiImg' />
                    </ScrollAnimation>
                    <img src={fiveteen} alt='smile-luuk' className='fiveteen' /> */}
                </div>
            </div>
            <SmallBanner />
            {/* </Animated> */}
        </div >
    );
}

export default Banner;
