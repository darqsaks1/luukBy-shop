import React from 'react';
import { calculate, returnAnyBucket } from './utilits/utilits'
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_BUCKET } from '../../actions/actions-types';
import { deleteBucket } from '../../actions/actions-creator';
const BucketPage = () => {
    const bucketState = useSelector(state => state.shop.bucketState);
    const dispatch = useDispatch();
    const setBucketArray = () => {
        let filterArray;
        return bucketState.map((item) => {
            return (
                <div>
                    <div className='bucket-card'>
                        <img src={item.image} />
                        <div className='bucket-price'> {item.price}</div>
                        <div className='bucket-name'> {item.name}</div>
                        <div className='delete-card' onClick={() => dispatch(deleteBucket(DELETE_BUCKET, item[0]))}></div>
                    </div>

                </div >
            )
        })


    }

    const getBucketCards = () => {
        if (bucketState.length === 0) {
            return (
                <div>
                    {returnAnyBucket()}
                </div>
            )
        }
        else {
            return (
                <div>
                    {calculate(bucketState)}
                    {setBucketArray()}
                    <button>Оставить заявку</button>
                </div>

            )
        }
    }

    return (
        <div className='bucket-container'>
            {getBucketCards()}

        </div>
    );
}

export default BucketPage;