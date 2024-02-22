import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { RxTriangleDown } from "react-icons/rx";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('Searching for:', searchQuery);
      // You can add your search logic or API call here
    } else {
      console.log('Search query is empty. Please enter a search term.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar-wrapper container'>
        <div className='logo-cls'>
        <a href='/home'>
          <img className='logo-img' src='/Images/logo.png' alt='' />
        </a>
        </div>
        <div className='nav-links'>
          <a href='/home' className='nav-link'>
            Home
          </a>
          <div className='nav-link with-submenu'>
            All Foods
          <ul className='submenu'>
          <li><a href='/category1'>Popular Picks</a></li>
          <li><a href='/category2'>Chocolate & IceCreme Madness</a></li>
          <li><a href='/category3'>EveryDay Fresh Meat and Fish</a></li>
          <li><a href='/category3'>Fresh Vegetables & Fruits</a></li>
          </ul>
          <span className='dropdown-icon'><RxTriangleDown /></span>
          </div>
          <a href='/about' className='nav-link'>
            About
          </a>
          <a href='/contact' className='nav-link'>
            Contact
          </a>
          <a href='/blog' className='nav-link'>
            Blog
          </a>
        </div>
      </div>

      <div className='search-section'>
      <input
        type='text'
        placeholder='Search here'
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} 
      />
      <button onClick={handleSearch}>
        <IoIosSearch />
      </button>
      </div>


      <div className='navbar-icon container'>
      <a href='/wishlist'>
      <span className='iconn'>
        <FaHeart />
      </span>
      </a>
      {/* <a href='/login'>
      <span className='iconn'>
        <FaUser />
      </span>
      </a> */}
      <a href='/cart'>
      <span className='iconn'>
        <FaShoppingCart />
      </span>
      </a>
      </div>
    </div>
  );
};

export default Navbar;
