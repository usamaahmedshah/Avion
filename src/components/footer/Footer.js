import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer id='footerbg' className='p-4 text-light footerbg'>
        <div className='row bg-dark text-light footer'>
          <div className='col-xs-7 col-sm-12 col-lg-2'>
            <h4>Menu</h4>
            <br></br>
            <ul>
              <li>
                <Link to='#'>New Arrivals</Link>
              </li>
              <li>
                <Link to='#'>Best Sellers</Link>
              </li>
              <li>
                <Link to='#'>Recently viewed</Link>
              </li>
              <li>
                <Link to='#'>Popular this week</Link>
              </li>
              <li>
                <Link to='#'>All products</Link>
              </li>
            </ul>
          </div>
          <div className='col-xs-7 col-sm-12 col-lg-2'>
            <h4>Categories</h4>
            <br></br>
            <ul>
              <li>
                <Link to='#'>Crockery</Link>
              </li>
              <li>
                <Link to='#'>Furniture</Link>
              </li>
              <li>
                <Link to='#'>Homeware</Link>
              </li>
              <li>
                <Link to='#'>Plant pots</Link>
              </li>
              <li>
                <Link to='#'>Chairs</Link>
              </li>
              <li>
                <Link to='#'>Crockery</Link>
              </li>
            </ul>
          </div>
          <div className='col-xs-7 col-sm-12 col-lg-2'>
            <h4>Our company</h4>
            <br></br>
            <ul>
              <li>
                <Link to='#'>About us</Link>
              </li>
              <li>
                <Link to='#'>Vacancies</Link>
              </li>
              <li>
                <Link to='#'>Contact us</Link>
              </li>
              <li>
                <Link to='#'>Privacy</Link>
              </li>
              <li>
                <Link to='#'>Returns policy</Link>
              </li>
            </ul>
          </div>
          <div className='col-xs-7 col-sm-12 col-lg-4'>
            <h4>Join our mailing list</h4>
            <br></br>
            <div className='d-flex flex-column justify-content-around newsletter'>
              <input
                type='text'
                className='form-control'
                placeholder='your@email.com'
              ></input>
              <button className='btn signup-btn'>Sign up</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
