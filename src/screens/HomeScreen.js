import React from 'react';
import './HomeScreen.css';
import pic from '../images/image-1.jpg';
import pic1 from '../images/small.png';
import pic2 from '../images/Image-2.png';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { GiSprout } from 'react-icons/gi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeScreen = () => {
  return (
    <>
      <div className='section-1'>
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
      <div className='section-2'>
        <div className='row'>
          <Card style={{ width: '18rem' }} className='card-1'>
            <Card.Body>
              <TbTruckDelivery className='card-icons' />
              <Card.Title>Next day as standard</Card.Title>
              <Card.Text>
                Order below 3pm and get your order the next day as standard.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='card-1'>
            <Card.Body>
              <IoCheckmarkCircleOutline className='card-icons' />
              <Card.Title>Made by true artisans</Card.Title>
              <Card.Text>
                Handmade crafted goods made with real passion and craftsmanship.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='card-1'>
            <Card.Body>
              <AiOutlineCreditCard className='card-icons' />
              <Card.Title>Recycled packaging</Card.Title>
              <Card.Text>
                Order below 3pm and get your order the next day as standard.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='card-1'>
            <Card.Body>
              <GiSprout className='card-icons' />
              <Card.Title>Recycled packaging</Card.Title>
              <Card.Text>
                We use 100% recycled packaging to ensure our footprint is
                manageable.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='section-3'>
        <div className='row'>
          <h3 className='card-heading'>New ceramics</h3>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
        </div>
      </div>
      <div className='section-4'>
        <div className='row'>
          <h3 className='card-heading'>Our popular products</h3>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
          <Card className='section3-card'>
            <Card.Img variant='top' src={pic1} />
          </Card>
        </div>
      </div>
      <div className='section-5'>
        <h3>Join the club and get the benefits</h3>
        <p className='section5-detail'>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className='d-flex flex-column justify-content-around section5-newsletter'>
          <input
            type='text'
            className='form-control'
            placeholder='your@email.com'
          ></input>
          <button className='btn section5-newsletterbtn'>Sign up</button>
        </div>
      </div>
      <div className='section-6'>
        <div class='row'>
          <div class='col-xs-7 col-sm-12 col-lg-6'>
            <h3>
              From a studio in London to a global brand with over 400 outlets
            </h3>
            <p className='section6-detail'>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </p>
            <button className='section6-btn'>View Collection</button>
          </div>
          <div class='col-image col-xs-7 col-sm-12 col-lg-6'>
            <img className='section1-img' src={pic2} alt='section1-img' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
