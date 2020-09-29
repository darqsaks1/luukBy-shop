import React from 'react';

import { useSelector } from 'react-redux';
import { Route, BrowserRouter } from "react-router-dom";
import Footer from '../../footer/footer'
import AboutShop from '../../about-shop/about-shop'
import Payment from '../../payment/payment';
import BucketPage from '../../bucket-page/bucket-page';
import ProdLanding from '../../prod-lending/prod-lending';


const PagesRouter = () => {
    const productHref = useSelector(state => state.shop.productHref);
    console.log(productHref)
    return (
        <div >
            <BrowserRouter>
                <Route exact path='/about'>
                    <AboutShop />
                </Route>
                <Route exact path='/bucket'>
                    <BucketPage />
                </Route>
                <Route exact path='/payment'>
                    <Payment />
                </Route>
                <Route exact path={productHref}>
                    <ProdLanding />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default PagesRouter;
