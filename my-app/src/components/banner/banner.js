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

            <div className="banner">
                <div className='bg' >
                    <div>
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className='action' delay={400}>
                            <img src={smileLuuk} alt='smile-luuk' className='smile' />
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
            <SmallBanner />

        </div >
    );
}

export default Banner;
