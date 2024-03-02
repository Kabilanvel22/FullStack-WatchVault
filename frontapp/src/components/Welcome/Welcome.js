import React from 'react'
import "./Welcome.css"
import Navbar from '../NavBar/Navbar';
import Contactus from '../Contactus/Contactus';
import Slideshow from '../../SlideShow/Slideshow';


export default function Welcome() {
  return (
    <div id="container">
      <Navbar/>
      <hr/>
     <div className="back">
      <div className="home_head">
          <h2 className="less-margin">A <span className="highlight">wristband</span> that lets you</h2>
          <h2>wear fitness <span className="highlight">your way</span>.</h2>

          <h1 className="look">Find your look</h1>
          <h3>celebrates the craftsmanship, history, and timeless allure of these <br/>miniature mechanical marvels that adorn our wrists and<br/> accompany us through life's moments, big and small.</h3>
      </div>
      <div className="home_image">
              <img src="https://i.pinimg.com/originals/34/2c/e7/342ce7270b2a3a3d7343135a4d185950.jpg"/>
      </div>
       <Slideshow/>
      <div className="home_mid">
              <h1 className="find">Explore more </h1>
              <img src="https://cdn.helioswatchstore.com/production/media/slideshow/cache/1921x411/-loveEarth.jpg" className="home_img"/>
      </div>
      <div className="home_mid1">
      <h1 className="find1">Famous Products</h1>
              <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Feed_05.08c_540x.jpg?v=1641888145" className="find_img"/>
              <h1 className="home_midh3">Explore Ulysse Nardin Watches</h1>
              <h4 className="home_midh4">Buy Ulysse Nardin Swiss watches from Zimson<br/> Watches .Explore the varied collection of Ulysse<br/> Nardin watches for Men and Women. </h4>
      </div>
      <div className="home_mid2">
          <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/18_01_540x.jpg?v=1641888191" className="home_midimg"/>
          <h1 className="home_mid2h1">Tissot Watches</h1>
          <h4 className="home_mid2h4">Explore the best range of Tissot watches with<br/> Zimson Watches. Tissot watches have stylish and<br/> upmarket watches for Men and Women. Explore<br/> the collection now.</h4>
      </div>
      <div className="home_mid3">
          <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Untitled_design_540x.jpg?v=1641890036" className="home_mid3img"/>
          <h1 className="home_mid3h1">Rado Watches</h1>
          <h4 className="home_mid3h4">Discover the best of Rado Watches for men and<br/> women. Rado watches are known for their elegant<br/> designs and materials used in making their<br/> watches . Own a Rado watch now .</h4>
      </div>
      <div className="home_mid4">
            <img src="https://cdn.helioswatchstore.com/production/media/slideshow/cache/1300x300/Desktop-Banner-New.jpg" className="home_mid4img"/>
      </div>
      <div className="home_mid5">
           <h1 className="home_mid5h1">Trending Products</h1>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/t/30/assets/Rolex_logo_full-colour_500x286.png?v=1615537891" className="home_mid5img1"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Hublot.png?v=1588408196%0A" className="home_mid5img2"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Omega.png?v=1588408198%0A" className="home_mid5img3"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/chopard.png?v=1588408197%0A" className="home_mid5img4"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/breiting2.png?v=1592560009" className="home_mid5img5"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Bvlgari.png?v=1588408196%0A" className="home_mid5img6"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/tissot_e848ec8d-6cef-4450-9952-097d413c770a_480x480.png?v=1606737496" className="home_mid5img7"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Rado.png?v=1588408197%0A" className="home_mid5img8"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/longines.png?v=1588408196%0A" className="home_mid5img9"/>
           <img src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/balmain_watches.png?v=1654164588" className="home_mid5img10"/>
      </div>
      <div className="watchcont">
      <Contactus/>
      </div>
      </div>
      </div>
  );
}
