import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import guard from '../../assets/guard.svg'
import { NavLink, Link } from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Order = () => {
    const [state, setState] = useState('')
    const dispatch = useDispatch();
    const bucketState = useSelector(state => state.shop.bucketState);
    const productHref = useSelector(state => state.shop.productHref);
    return (
        <div className="order-section">
            <div className='shop-title'>
                Главная  / Корзина /ОФОРМИТЬ ЗАКАЗ
            </div>
            <div className='order-form'>
                <form>
                    <div className='contanct-information'>
                        <div>Контактная информация</div>
                        <p>Ваше имя*</p>
                        <input placeholder='Иван' />
                    </div>
                    <div className='contacts'>
                        <div>
                            <p>Email*</p>
                            <input placeholder='Ваш email' />
                        </div>
                        <div>
                            <p>Телефон*</p>
                            <input placeholder='+375XXXXXXXXX' />
                        </div>
                    </div>
                    <div className='delivery'>
                        <p>Способ доставки</p>
                        <div className='delivery-buttons'>
                            <div className={state === 'почта' ? 'delivery-button  active-dev' : 'delivery-button'} onClick={() => setState('почта')}>
                                <div className='point'>
                                    <div className={state === 'почта' ? ' active-point' : ''} />
                                </div>
                                <div className='text'>
                                    <span>Белпочта</span>
                                    <span>РБ, г. Минск, ул.....................</span>
                                </div>
                            </div>
                            <div className={state === 'курьер' ? 'delivery-button  active-dev' : 'delivery-button'} onClick={() => setState('курьер')}>
                                <div className='point'>
                                    <div className={state === 'курьер' ? ' active-point' : ''} />
                                </div>
                                <div className='text'>
                                    <span>Доставка курьером</span>
                                    <span>Информацию уточняйте у менеджера</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='adress'>
                        <p>Адрес доставки*</p>
                        <input placeholder='Город, улица, дом, офис (подъезд)' />
                    </div>
                    <div class='payment'>
                        <p>Способ доставки</p>
                        <div className='delivery-button active-dev'  >
                            <div className='point'>
                                <div className='active-point' />
                            </div>
                            <div className='text'>
                                <span>Оплата наличными</span>
                                <span>Посмотреть товар, оплатить и забрать</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-area'>
                        <p>Комментарий к заказу</p>
                        <textarea
                            placeholder='Сообщите нам любую дополнительную информацию '
                        />

                    </div>
                    <div className='button-submit'>

                        <button>Отправить заказ</button>
                        <div>

                            <img src={guard} alt='guard' />
                            Даю согласие на обработку персональных данных
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default Order;
