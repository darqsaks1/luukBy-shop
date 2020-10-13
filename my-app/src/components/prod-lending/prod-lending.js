import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shopObj from '../../data/luukby/shop-obj'
import { SET_BUCKET } from '../../actions/actions-types'
import { setBucket } from '../../actions/actions-creator'
import starSvg from '../../assets/star.svg'
import Recomend from './out-recomend/recomend'
const ProdLanding = () => {

    const productHref = useSelector(state => state.shop.productHref);
    const bucket = useSelector(state => state.shop.bucket);
    const [galImage, setGalImage] = useState(0)
    const [productCount, setProductCount] = useState(1)
    const dispatch = useDispatch();
    const getMainImage = (i) => {
        if (galImage === 0) {
            return shopObj[i].galImage[0]
        }
        if (galImage === 1)
            return shopObj[i].galImage[1]
        if (galImage === 2)
            return shopObj[i].galImage[2]
        if (galImage === 3)
            return shopObj[i].galImage[3]
    }
    const addCount = () => {
        return setProductCount(productCount + 1)

    }
    const removeCount = (i) => {
        return productCount <= 0 ? setProductCount(0) : setProductCount(productCount - 1)
    }
    const renderProductByHref = () => {

        for (let i = 0; i < shopObj.length; i++) {
            if (shopObj[i].hrefLink === productHref) {
                return (
                    <div className='colunm-prod'>
                        <div className='prod-landing-card'>
                            <div className='product-gallery'>
                                <div className='main-image'>
                                    <div style={{ backgroundImage: `url(${getMainImage(i)}` }} />
                                </div>
                                <div className='others-images'>
                                    <div className='sm-gallery-image' onClick={() => setGalImage(1)}>
                                        <div style={{ backgroundImage: `url(${shopObj[i].galImage[1]}` }} />
                                    </div>
                                    <div className='sm-gallery-image gal-margin' onClick={() => setGalImage(2)}>
                                        <div style={{ backgroundImage: `url(${shopObj[i].galImage[2]}` }} />
                                    </div>
                                    <div className='sm-gallery-image  gal-margi' onClick={() => setGalImage(3)} >
                                        <div style={{ backgroundImage: `url(${shopObj[i].galImage[3]}` }} />
                                    </div>
                                </div>
                            </div>
                            <div className='product-description'>
                                <div className='title-name'>
                                    <div className='prod-name'> {shopObj[i].name}</div>
                                    <div className='stars'>
                                        <img src={starSvg} alt='star' />
                                        <img src={starSvg} alt='star' />
                                        <img src={starSvg} alt='star' />
                                        <img src={starSvg} alt='star' />
                                        <img src={starSvg} alt='star' />
                                    </div>
                                </div>
                                <div className='prod-price'>  {shopObj[i].price} руб</div>
                                <div className='prod-subDescr'> {shopObj[i].subDescr}</div>
                                <div className='line' />
                                <div className='product-bucket'>
                                    <div className='counter'>
                                        <div className='minus' onClick={() => removeCount()}></div>
                                        <div className='number'> {productCount}</div>
                                        <div className='plus' onClick={() => addCount()}></div>
                                    </div>
                                    <div className='button-order' onClick={() =>
                                        dispatch(setBucket(SET_BUCKET,
                                            {
                                                id: i,
                                                name: shopObj[i].name,
                                                price: shopObj[i].price,
                                                image: shopObj[i].image,
                                                number: productCount,
                                            }
                                        ))}> В КОРЗИНУ</div>
                                </div>
                            </div>
                        </div >
                        <div className='prod-about'>
                            <div className='descript'>
                                <p>ОПИСАНИЕ</p>
                            </div>
                            <div className='obj-description'>{shopObj[i].description}</div>
                        </div>
                    </div>
                )
            }
            else {
                return <div>suka</div>
            }
        }

    }
    return (
        <div className='landing'>
            <div className='shop-title'>
                Главная / Магазин / Товары
            </div>
            <div className='card-description'>
                {renderProductByHref()}
            </div>
            <div className='our-recomend'>
                <Recomend />
            </div>
        </div>
    );
}

export default ProdLanding;