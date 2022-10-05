import React from 'react';
import './HomeScreen.css';
import pic from '../images/image-1.jpg';
import pic1 from '../images/small.png';
import pic2 from '../images/Large.png';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { GiSprout } from 'react-icons/gi';

const HomeScreen = () => {
  return (
    <>
      <div className='sub-section-1'>
        <div class='row'>
          <div class='col-xs-7 col-sm-12 col-lg-6'>
            <h3>The furniture brand for the future, with timeless designs</h3>
            <button className='btn-1'>View Collection</button>
            <p className='section1-detail'>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div class='col-image col-xs-7 col-sm-12 col-lg-6'>
            <img className='section1-img' src={pic} alt='section1-img' />
          </div>
        </div>
      </div>
      <div className='sub-section-2'>
        <h3 className='card-heading'>What makes our brand different</h3>
        <div className='row'>
          <div class='card' style={{ width: '18rem' }}>
            <div class='card-body'>
              <TbTruckDelivery className='card-icons' />
              <h5 class='card-title'>Next day as standard</h5>
              <p class='card-text'>
                Order below 3pm and get your order the next day as standard.
              </p>
            </div>
          </div>
          <div class='card' style={{ width: '18rem' }}>
            <div class='card-body'>
              <IoCheckmarkCircleOutline className='card-icons' />
              <h5 class='card-title'>Made by true artisans</h5>
              <p class='card-text'>
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
          </div>
          <div class='card' style={{ width: '18rem' }}>
            <div class='card-body'>
              <AiOutlineCreditCard className='card-icons' />
              <h5 class='card-title'>Unbeatable prices</h5>
              <p class='card-text'>
                For our materials and quality you won't find better prices
                anywhere.
              </p>
            </div>
          </div>
          <div class='card' style={{ width: '18rem' }}>
            <div class='card-body'>
              <GiSprout className='card-icons' />
              <h5 class='card-title'>Recycled packaging</h5>
              <p class='card-text'>
                We use 100% recycled packaging to ensure our footprint is
                manageable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='sub-section-3'>
        <h3 className='card-heading'>New ceramics</h3>
        <div className='row'>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic1} alt='pic-1' />
          </div>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic1} alt='pic-1' />
          </div>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic1} alt='pic-1' />
          </div>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic1} alt='pic-1' />
          </div>
        </div>
      </div>
      <div className='sub-section-4'>
        <h3 className='card-heading'>New ceramics</h3>
        <div className='row'>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic2} alt='pic-2' />
          </div>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic1} alt='pic-1' />
          </div>
          <div class='card' style={{width: '18rem'}}>
            <img class='sub-section-3-img' src={pic1} alt='pic-1' />
          </div>
        </div>
      </div>
      <div class='col-xs-7 col-sm-12 col-lg-6'>
            <h3>The furniture brand for the future, with timeless designs</h3>
            <button className='btn-1'>View Collection</button>
            <p className='section1-detail'>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
      </div>
      <div className='sub-section-1'>
        <div class='row'>
          <div class='col-xs-7 col-sm-12 col-lg-6'>
            <h3>The furniture brand for the future, with timeless designs</h3>
            <button className='btn-1'>View Collection</button>
            <p className='section1-detail'>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div class='col-image col-xs-7 col-sm-12 col-lg-6'>
            <img className='section1-img' src={pic} alt='section1-img' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
