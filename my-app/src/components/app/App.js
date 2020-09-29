import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from '../header/header';
import Title from '../title/title';
import TitleCategories from '../categories/title-categories/title-categories';
import BlocksCategories from '../categories/blocks-categories/block-categories'
import HumanCategories from '../categories/human-categories/human-categories'
import MainSwiper from '../swiper/main-swiper'
import SwiperSecondSection from '../swiper/swiper-second-section'
import FirstProductSection from '../products-sections/first-section/first-product-section'
import SecondProductSection from '../products-sections/second-prod-section/second-product-section'
import FirstCommercial from '../commercial/first-commercial/first-commercial'
import Recomendation from '../recomendation/recomendation'
import Footer from '../footer/footer'
import './App.scss';


import AboutShop from '../about-shop/about-shop'
import Payment from '../payment/payment';
import BucketPage from '../bucket-page/bucket-page';
import ProdLanding from '../prod-lending/prod-lending';
import PagesRouter from './router/pages-router'

const App = () => {
  const productHref = useSelector(state => state.shop.productHref);

  return (
    <div className="App">

      <Header />
      <Title />

      <Switch>
        <Route exact path="/">

          <MainSwiper />
          <HumanCategories />
          <FirstProductSection
          />
          <FirstCommercial />
          <BlocksCategories />
          {/* <SwiperSecondSection /> */}
          <FirstProductSection />
          {/* <SecondProductSection /> */}
          <Recomendation />
          <FirstCommercial />
        </Route>
        <Route exact path='/about'>
          <AboutShop />
        </Route>
        <Route exact path='/bucket'>
          <BucketPage />
        </Route>
        <Route exact path='/payment'>
          <Payment />
        </Route>
        <Route exact path='/productLanding'>
          < ProdLanding />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
