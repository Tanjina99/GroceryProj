import React from 'react';
import chocoData from "../StaticData/choco";
import Slider from "react-slick";
import "../Styles/components/_choco.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Choco = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='choco'>
      <div className='choco-wrapper'>
        <div className='img-header container'>
          <h1 className='header-cho'>Chocolate & IceCreme Madness</h1>
          <img className="choco-img" src='/Images/choco/choco-bg.jpg' alt='' />
        </div>

        <div className='choco-items'>
          <Slider {...settings}>
            {chocoData.map(chocoItem => (
              <div key={chocoItem.id} className='choco-item'>
                <img src={chocoItem.image} alt={chocoItem.name} className="choco-img" />
                <h2 className='choco-name'>{chocoItem.name}</h2>
                <p className='choco-price'>${chocoItem.price.toFixed(2)}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Choco;
