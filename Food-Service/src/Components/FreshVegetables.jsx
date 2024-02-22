import React from 'react';
import Slider from 'react-slick';
import fruitvegetable from '../StaticData/fruitvegetable';
import "../Styles/components/_freshvegetables.scss"

const FreshVegetables = () => {
  const settings = {
    dots: true, // Correct spelling
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className='freshvege'>
      <div className='freshvege-wrapper'>
        <div className='freshvege-mix'>
          <h1 className='freshvege-header'>Fresh Vegetables & Fruits</h1>
          <img className="vege-icon" src='/Images/vege-icon.jpg' alt='' />
        </div>

        <div className='vege-caroseul'>
        <Slider {...settings}>
          {fruitvegetable.map((item) => (
            <div key={item.id} className='vegefruit-item'>
              <img src={item.image} alt={item.name} className='vegefruit-img'/>
              <h3 className='vegefruit-name'>{item.name}</h3>
              <p className='vegefruit-price'>${item.price} {item.weight}</p>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreshVegetables;
