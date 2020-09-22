import React, { useEffect } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Header from '../header/header';
import Search from '../search/search';
import TitleCategories from '../categories/title-categories/title-categories';
import BlocksCategories from '../categories/blocks-categories/block-categories'
import HumanCategories from '../categories/human-categories/human-categories'
import SwiperFirstSection from '../swiper/swiper-first-section'
import SwiperSecondSection from '../swiper/swiper-second-section'
import FirstProductSection from '../products-sections/first-section/first-product-section'
import SecondProductSection from '../products-sections/second-prod-section/second-product-section'
import FirstCommercial from '../commercial/first-commercial/first-commercial'
import Recomendation from '../recomendation/recomendation'
import Footer from '../footer/footer'
import './App.scss';
import getApiFromLinkOpttop24 from '../fetch/fetch'
const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Search />
          <TitleCategories />
          <SwiperFirstSection />
          <HumanCategories />
          <FirstProductSection />
          <FirstCommercial />
          <BlocksCategories />
          <SwiperSecondSection />
          <FirstProductSection />
          {/* <SecondProductSection /> */}
          <Recomendation />
          <FirstCommercial />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
