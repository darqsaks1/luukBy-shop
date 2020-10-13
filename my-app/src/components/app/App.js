import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from '../header/header';
import Title from '../title/title';
import MainSwiper from '../swiper/main-swiper'
import HitProducts from '../hit-products/hit-products'
import Categories from '../categories/categories'
import Banner from '../banner/banner'
import Products from '../products/products'
import Footer from '../footer/footer'
import './App.scss';
import AboutShop from '../about-shop/about-shop'
import ScrollToTop from '../scroll/scroll'
import BucketPage from '../bucket-page/bucket-page';
import ProdLanding from '../prod-lending/prod-lending';
import Shop from '../shop/shop'
import Order from '../order/order'
import Politics from '../politics/politics'
import Сontacts from '../contacts/contacts'
import Delivery from '../delivery/delivery'
const App = () => {
  const productHref = useSelector(state => state.shop.productHref);
  return (
    <div className="App">

      <Header />
      <Title />

      <Switch>
        <ScrollToTop>
          <Route exact path="/">
            <MainSwiper />
            <HitProducts />
            <Categories />
            <Banner />
            <Products />
          </Route>
          <Route exact path='/about'>
            <AboutShop />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/bucket'>
            <BucketPage />
          </Route>

          <Route exact path='/delivery'>
            <Delivery />
          </Route>
          <Route exact path='/productLanding'>
            < ProdLanding />
          </Route>
          <Route exact path='/order'>
            < Order />
          </Route>
          <Route exact path='/politics'>
            < Politics />
          </Route>
          <Route exact path='/contacts'>
            < Сontacts />
          </Route>
        </ScrollToTop>
      </Switch>
      <Footer />
      {/* <div class='test'>
      </div> */}


    </div>
  );
}

export default App;
