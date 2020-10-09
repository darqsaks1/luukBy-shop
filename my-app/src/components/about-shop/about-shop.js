import React from 'react';
import arrowFootr from '../../assets/Group 512.png'
import luukGood from '../../assets/luukGOOD.png'
import bgIMG from '../../assets/bgIMG.png'
const AboutShop = () => {
    return (
        <div className='about-sh'>
            <div className='shop-title'>
                Главная / Магазин
            </div>
            <div className='about-container'>
                <h3>Наша миссия</h3>
                <div className='mission-container'>
                    <img src={arrowFootr} alt='arrowFooter' className='luukArrow' />
                    <div className='text'>
                        <p>Эти методы можно использовать для получения дохода. Однако подход разработчика должен соответствовать приложению. Разработчику крайне важно привлечь пользователя и потратить деньги на различные аспекты приложения.</p>
                        <p>Эти методы можно использовать для получения дохода. Однако подход разработчика должен соответствовать приложению. Разработчику крайне важно привлечь пользователя и потратить деньги на различные аспекты приложения.</p>
                        <p>Эти методы можно использовать для получения дохода. Однако подход разработчика должен соответствовать приложению. Разработчику крайне важно привлечь пользователя и потратить деньги на различные аспекты приложения.</p>
                        <img src={luukGood} alt='luukgood' />
                    </div>
                </div>
                <div className='our-services'>
                    <h3>Наш сервис</h3>
                    <div className='services-text'>Наш интернет магазин предлагает вам товар будущего высокого качества, по доступным ценам.</div>
                    <div className='cards'>
                        <div className='cards-block'>
                            <img src={bgIMG} alt='bg' />
                            <div className='title'>  Поддержка клиентов</div>
                            <div className='text'>  -----------.................  </div>
                        </div>
                        <div  className='cards-block'> 
                            <img src={bgIMG} alt='bg' />
                            <div className='title'> Поддержка клиентов</div>
                            <div className='text'>  -----------.................  </div>
                        </div>
                        <div  className='cards-block'>
                            <img src={bgIMG} alt='bg' />
                            <div className='title'>Поддержка клиентов</div>
                            <div className='text'>  -----------.................  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutShop;