import React from 'react';
import FirstProdSectionTittleOne from '../../../data/luukby/first-prod-sect/firstDataProdSection'
import FirstProdSectionTittleTwo from '../../../data/luukby/first-prod-sect/SecondDataProdSection'
const renderTittles = () => {
    return (
        <div>
            <div class='first-product_container'>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleOne[0].image} alt='prodimage' />
                        <h4>  {FirstProdSectionTittleOne[0].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleOne[0].price} руб.</h3>
                    </div>
                </a>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleOne[1].image} alt='prodimage' />
                        <h4>  {FirstProdSectionTittleOne[1].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleOne[1].price} руб.</h3>
                    </div>
                </a>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleOne[2].image} alt='prodimage' />
                        <h4>  {FirstProdSectionTittleOne[2].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleOne[2].price} руб.</h3>
                    </div>
                </a>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleOne[3].image} alt='prodimage' />
                        <h4>{FirstProdSectionTittleOne[3].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleOne[3].price} руб.</h3>
                    </div>
                </a>
            </div>
            <div class='first-product_container'>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleTwo[0].image} alt='prodimage' />
                        <h4>  {FirstProdSectionTittleTwo[0].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleTwo[0].price} руб.</h3>
                    </div>
                </a>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleTwo[1].image} alt='prodimage' />
                        <h4>  {FirstProdSectionTittleTwo[1].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleTwo[1].price} руб.</h3>
                    </div>
                </a>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleTwo[2].image} alt='prodimage' />
                        <h4>  {FirstProdSectionTittleTwo[2].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleTwo[2].price} руб.</h3>
                    </div>
                </a>
                <a>
                    <div className='product-card'>
                        <img src={FirstProdSectionTittleTwo[3].image} alt='prodimage' />
                        <h4>{FirstProdSectionTittleTwo[3].name}</h4>
                        <h3>Цена:{FirstProdSectionTittleTwo[3].price} руб.</h3>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default renderTittles
