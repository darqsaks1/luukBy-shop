import React from 'react';
import imgFooter from '../../assets/header-logo/footer.png'
import instagramImg from '../../assets/header-logo/footerInstagram.png'
import { NavLink } from "react-router-dom";
import geolocImg from '../../assets/header-logo/location.png'
import phoneImg from '../../assets/header-logo/footerPhone.png'
import mailImg from '../../assets/header-logo/fuuter.mail.png'
import timeImg from '../../assets/header-logo/erip.png'
import moneyImg from '../../assets/header-logo/money.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-section'>
                <div className='logo-sec'>
               
                        <img src={imgFooter} alt='footer' />
           
                    <p>LUUK.BY - интернет магазин товаров будущего </p>
                    <a href="https://www.instagram.com/luuk.by/">
                        <img src={instagramImg} alt='phone' />
                    </ a>
                </div>
                <div className='section'>
                    <h3>Наш сервиc  </h3>
                    <NavLink to='./contacts'  >
                        Контакты
                </NavLink>
                    <NavLink to='./shop' activeClassName="active-footer">
                        Магазин
                </NavLink>
                    <NavLink to='./bucket' activeClassName="active-footer">
                        Посмотреть заказ
                </NavLink>
                </div>
                <div className='section'>
                    <h3> Информация  </h3>
                    <NavLink to='./about' activeClassName="active-footer">
                        О нас
                     </NavLink>
                    <NavLink to='./contacts' activeClassName="active-footer">
                        Связаться с нами
                        </NavLink>
                    <NavLink to='./delivery' activeClassName="active-footer">
                        Доставка
                         </NavLink>
                </div>
                <div className=' section links'>
                    <h3>Контакты</h3>
                    <div className='list'>
                        <div className='contact '>
                            <img src={geolocImg} alt='icon-footer' />
                            Республика Беларусь
                        </div>
                        <div className='contact '>
                            <img src={phoneImg} alt='icon-footer' />
                            +375(29)885-38-16
                        </div>
                        <div className='contact '>
                            <img src={mailImg} alt='icon-footer' />
                            admin@luuk.by
                        </div>
                        <div className='contact '>
                            <img src={timeImg} alt='icon-footer' />
                           24/7
                        </div>
                        <div className='contact '>
                            <img src={moneyImg} alt='icon-footer' />
                        ЕРИП, Белпочта                       </div>
                    </div>
                </div>
            </div>
            <div className='footer-text'>
                <div> УНП 591249812</div>
                <div className='law'>
                    ВСЕ ПРАВА ЗАЩИЩЕНЫ © 2020: LUUK.BY {'\n'}
                    <NavLink to='./politics'>
                        ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                    </NavLink   >
                    {'\n'}
                    ИП Барановский Эдуард Юрьевич, г.Гродно, ул. Комарова, д. 12, комн. 413 </div>
                <div> Дата включений в торговый реестр: 28.08.2020`</div>
            </div>
        </div>
    );
}

export default Footer;
