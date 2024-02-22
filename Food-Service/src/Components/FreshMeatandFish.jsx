import React from 'react';
import Slider from "react-slick";
import meatandfish from "../StaticData/meatandfish";
import "../Styles/Components/_freshmeatandfish.scss";

const FreshMeatandFish = () => {
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
    <div className='freshmeat'>
      <div className='freshmeat-wrapper'>
        <div className='fishmeat-img'>
          <h1 className='meat-header'>EveryDay Fresh Meat and Fish</h1>
          <img className="fishmeat-icon" src='/Images/fish-meat icon.png' alt='' />
        </div>
        <div className='meat-carousel'>
          <Slider {...settings}>
            {meatandfish.map(product => (
              <div key={product.id} className='meat-item'>
                <img src={product.image} alt={product.name} className="meat-img" />
                <h2 className='meat-name'>{product.name}</h2>
                <p className='meat-details'>${product.price} {product.weight}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreshMeatandFish;
