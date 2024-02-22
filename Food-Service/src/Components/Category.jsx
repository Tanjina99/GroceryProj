import React from 'react';
import { IoFishOutline } from "react-icons/io5";
import { TbMeat, TbTruckDelivery } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { MdNewReleases, MdOutlinePayment } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import "../Styles/components/_category.scss";

const Category = () => {
  return (
    <div className='topcategory'>
      <div className='topcategory-wrapper container'>
        <div className='category'>
          <div className='full-product'>
            <div className='middle'>
              <span className='product'><MdOutlinePayment size={25}/></span>
              <div>
                <h4 className='item-name'>Secure Payment</h4>
              </div>
            </div>
          </div>

          <div className='full-product'>
            <div className='middle'>
              <span className='product'><VscFeedback size={25}/></span>
              <div>
                <h4 className="item-name">99 % Customer feedback</h4>
              </div>
            </div>
          </div>

          <div className='full-product'>
            <div className='middle'>
              <span className='product'><BiSolidOffer size={25}/></span>
              <div>
                <h4 className="item-name">Super offer</h4>
              </div>
            </div>
          </div>

          <div className='full-product'>
            <div className='middle'>
              <span className='product'><TbTruckDelivery size={25}/></span>
              <div>
                <h4 className="item-name">Free Delivery from $50</h4>
              </div>
            </div>
          </div>

          <div className='full-product'>
            <div className='middle'>
              <span className='product'><MdNewReleases size={25}/></span>
              <div>
                <h4 className="item-name">New Item</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
