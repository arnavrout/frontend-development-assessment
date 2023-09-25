import React, {useState} from 'react'
import './Product.css';

import pinkBag from '../images/pink-bag.jpg';
import blueBag from '../images/blue-bag.jpg';
import brownBag from '../images/brown-bag.jpg'

function Product() {

    // state to manage the track of selected bag
  const [selectedBag, setSelectedBag] = useState(0);

  // state to manage load "More Product Info" button open or not
  const [knowMoreOpen, setKnowMoreOpen] = useState(false);

  //managing the three different color bags
  const bags = [
    { imageUrl: pinkBag, backgroundColor: '#FFDDCC'},
    { imageUrl: blueBag, backgroundColor: '#2E4374' },
    { imageUrl: brownBag, backgroundColor: '#884839',},
  ];

  // Function to handle button click and update selected bag
  const handleBagClick = (index) => {
    setSelectedBag(index);
  };

   // Function to toggle the "More Product Info"/"Less Product Info" button
   const toggleKnowMore = () => {
    setKnowMoreOpen(!knowMoreOpen);
  };

  return (
    <div className="product">
    <div className='category'>
        <h1>Bags</h1>
        <div class="description">
        <p>
            Experience timeless elegance with our beautiful collection of women's bags. <br /> 
            At <b> Arnav Bag House Pvt Ltd</b> we combine luxurious design with unmatched craftsmanship.
        </p>
        <button className='info-button' onClick={toggleKnowMore}>
          {knowMoreOpen ? 'Less Product Info' : 'More Product Info'}
        </button>
        {knowMoreOpen && (
          <div className='know-more'>
            <h4>USP: Leather Bag/Handmade Bag/Own Manufacturing</h4>
            <p className='item-info'>&#x2316; Store Location- Delhi/NCR</p>
          </div>
        )}
    </div>
    </div>
    <div className="product-card">
        <div className="card-body">
          {selectedBag !== null && (
            <div className='bag-image'>
            <h3>Crafting Fashion Dreams: Find Your Perfect Women's Bag</h3>
              <img
                src={bags[selectedBag].imageUrl}
                alt={`${bags[selectedBag].color} Bag`}
              />
              <p>Price: ₹99,999</p>
            </div>
          )}
        </div>
        <div className="card-btn">
        <p>Color options</p>
          {bags.map((bag, index) => (
            <button
              key={index}
              onClick={() => handleBagClick(index)}
              className={`bag-button ${selectedBag === index ? 'active' : ''}`}
              style={{ backgroundColor: bag.backgroundColor }}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product