import React, { useState } from 'react';
import '../Styles/components/_allproducts.scss';
import products from '../StaticData/products';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { FaShoppingBag } from 'react-icons/fa'; 

const AllProductsList = () => {
  const [productItems, setProductsItems] = useState(products);

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log(`Product added to cart: ${productId}`);
  };

  return (
    <div className="allproducts"> 
      <div className="allproducts-wrapper container">
        <div className='pop-picks'>
        <h1 className="pop-header flex justify-center">Popular Picks</h1>
        </div>
      </div>

      <div className="all-products container">
        {productItems.map((item, i) => (
          <div key={i} className="products-container">
            <div className="full-cls">
              <div className="card-products">
                <div className="overlay top-left">
                  <span className="outline">
                    <IoHeartCircleOutline />
                  </span>
                  <span className="addcart">
                    <FaShoppingBag onClick={() => handleAddToCart(item.id)} />
                  </span>
                </div>
                <div className="products-img container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="products-name">
                  <h4 className="item-name">{item.name}</h4>
                  <p className='item-details'>${item.price} {item.weight}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsList;
