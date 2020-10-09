import React from 'react';
import { calculate } from './utilits/utilits'
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket } from '../../actions/actions-creator';
import { DELETE_BUCKET, SET_NUMBER_PLUS, SET_NUMBER_MINUS } from '../../actions/actions-types'
import { setItemBucket } from '../../actions/actions-creator'
import WasteBucket from './utilits/waste-bucket';
import { NavLink, Link } from "react-router-dom";
const BucketPage = () => {
    const bucketState = useSelector(state => state.shop.bucketState);
    const dispatch = useDispatch();
    const renderBucketProducts = () => {
        return bucketState.map((item) => {
            return (
                <div className='bucket-card'>
                    <div className='main-image'>
                        <div style={{ backgroundImage: `url(${item.image}` }} />
                    </div>
                    <div className='bucket-name'> {item.name}</div>
                    <div className='bucket-price'> {item.price} руб</div>
                    <div className='counter'>
                        <div className='minus' onClick={() => dispatch(setItemBucket(SET_NUMBER_MINUS, item))}></div>
                        <div className='number'> {item.number} </div>
                        <div className='plus' onClick={() => dispatch(setItemBucket(SET_NUMBER_PLUS, item))}> </div>
                    </div >
                    <div class='full-price-block'>
                        <div className='full-price'> {item.price * item.number} руб</div>
                    </div>
                    <div className='delete-card' onClick={() => dispatch(deleteBucket(DELETE_BUCKET, item[0]))}></div>
                </div >
            )
        })
    }

    const getBucketCards = () => {
        if (bucketState.length === 0) {
            return (
                <div>
                    <WasteBucket />
                    <div class='bg'></div>
                </div>
            )
        }
        return (
            <div>

                <div className='bucket-order'>
                    {/* {calculate(bucketState)} */}
                    <div className='titles-of-products'>
                        <div className='name-title'>Наименование</div>
                        <div className='price-title'>Цена</div>
                        <div className='count-title'>Кол-во</div>
                        <div className='finnaly-title' >Итого</div>
                    </div>
                    <div className='products'>
                        {renderBucketProducts()}
                    </div>
                </div>
                <div className='od'>
                    <div className='order'>
                        <div className='button-ordered'>
                            <div className='finnaly-order'>
                                <div className='end'>Итого:</div>
                                {calculate(bucketState)}
                            </div>
                            <Link to='/order'>
                                <div className='button-m'>Оформить заказ</div>
                            </Link >
                        </div>
                        <div className='arrow' />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='bucket-container'>
            <div className='shop-title'>
                Главная / Корзина
            </div>
            {getBucketCards()}

        </div>
    );
}

export default BucketPage;