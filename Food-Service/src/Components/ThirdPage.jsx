import React from 'react'
import "../Styles/components/_thirdpage.scss";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ThirdPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='thirdpage'>
    <div className='thirdpage-wrapper container'>
    <img  className='main-img' src='/Images/first-bgg.webp' alt=''></img> 
    <div className='slider-container'>
      <div className='deals-day'>
        <img src='/Images/dailydeal-logo.gif' alt=''></img>
      </div>
      <Slider {...settings}>
        <div className='img-slide'>
          <img src='/Images/meatandfish/whole-chicken.jpg' alt="Whole chicken" />
          <p>Whole Chicken <br/>$6.99 Lb</p>
        </div>
        <div className='img-slide'>
          <img src='/Images/meatandfish/lobster.webp' alt="Lobster" />
          <p>Lobster <br/>$15 Lb</p>
        </div>
        <div className='img-slide'>
          <img src='/Images/fruits and vegetables/tomatoes.jpg' alt="Tomatoes" />
          <p>Tomatoes <br/>$0.99 Lb</p>
        </div>
        <div className='img-slide'>
          <img src='/Images/ice-cream/haagen.webp' alt="Ice-Cream" />
          <p>Haagen Dazs <br/>$5.99 each</p>
        </div>
      </Slider>
    </div>
  </div>
</div>
  )
}

export default ThirdPage

