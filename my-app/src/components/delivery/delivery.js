import React from 'react';
import arrowFootr from '../../assets/Group 512.png'
import luukGood from '../../assets/luukGOOD.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import bgIMG from '../../assets/bgIMG.png'
const Delivery = () => {
    return (
        <div className='delivery-sh'>
            <div className='shop-title'>
                Главная / Доставка и оплата
            </div>
            <div className='delivery-container'>
                <div className='delivery-services'>
                    <h3>Доставка и оплата</h3>
                    <div className='services-text'>Заказать у нас легко и безопасно !</div>
                    <div className='cards'>
                        <div className='cards-block'>
                            <img src={icon1} alt='bg' />
                            <div className='title'>  ОПЛАТА ПРИ ПОЛУЧЕНИИ</div>
                            <div className='text'>  Мы не принимаем предоплат.
                            Оплата заказа осуществляется при получении в отделении Белпочты или курьеру в Минске.  </div>
                        </div>
                        <div className='cards-block'>
                            <img src={icon2} alt='bg' />
                            <div className='title'> БЫСТРАЯ ДОСТАВКА</div>
                            <div className='text'> Доставка Белпочтой или курьером по Минску от 1 до 3 рабочих дней  </div>
                        </div>
                        <div className='cards-block'>
                            <img src={icon3} alt='bg' />
                            <div className='title'>ГАРАНТИЯ КАЧЕСТВА</div>
                            <div className='text'> Перед отправкой товары проходят 100% проверку. </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Delivery;