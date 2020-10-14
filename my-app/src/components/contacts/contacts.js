import React from 'react';
import arrowFootr from '../../assets/Group 512.png'
import { Link } from "react-router-dom";
import guard from '../../assets/guard.svg'
import geolocImg from '../../assets/header-logo/location1.png'
import phoneImg from '../../assets/header-logo/footerPhone1.png'
import mailImg from '../../assets/header-logo/fuuter.mail1.png'
import timeImg from '../../assets/header-logo/erip1.png'
import moneyImg from '../../assets/header-logo/money1.png'
import php from '../../php/sendReviev.php'
const Contacts = () => {
    return (
        <div className='contacts-container'>
            <div className='shop-title'>
                Главная  / Контакты
            </div>
            <div className='title-block'>
                <h3>Контактная информация</h3>
                <div className='text'>Пишите или звоните нам, проконсультируем по любым вопросам! {'\n'}
                    <span> нам важен каждый клиент</span></div>
                <div className='contacts-block'>
                    <div className='links-block'>
                        <img src={arrowFootr} alt='arrowFooter' className='luukArrow' />
                        <div className='list'>
                            <div className='contact '>
                                <img src={geolocImg} alt='icon-footer' />
                            Республика Беларусь
                           </div>
                            <div className='contact '>
                                <img src={phoneImg} alt='icon-footer' />
                            +375 29 885 38 16
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
                            ЕРИП, Белпочта
                          </div>
                        </div>
                    </div>
                    <div className='inputs-container'>
                        <form action={php} method="post">


                            <div className='inputs-block'>
                                <div>
                                    <p>Имя*</p>
                                    <input placeholder='Иван' name='name' required="required" minlength="3" maxlength="255" />
                                </div>
                                <div>
                                    <p>Email</p>
                                    <input placeholder='Ваш email' name="email" />
                                </div>
                            </div>
                            <div className='text-area'>
                                <p>Комментарий к заказу</p>
                                <textarea
                                    name='comment'
                                    placeholder='Сообщите нам любую дополнительную информацию '
                                />

                            </div>
                            <div className='button-submit'>

                                < button type="submit" name="Submit" >Отправить заказ</button>
                                <div>

                                    <img src={guard} alt='guard' />
                            Даю согласие на обработку персональных данных
                        </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;