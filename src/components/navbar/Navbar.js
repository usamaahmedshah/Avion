import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topbar = () => {
  return (
    /*<>
      <div className='container'>
        <div className='topbar'>
          <ul>
            <li className='search'>
              <AiOutlineSearch />
            </li>
            <li>
              <p className='header'>Avion</p>
            </li>
            <li className='cart'>
              <AiOutlineShoppingCart />
            </li>
            <li className='profile'>
              <CgProfile />
            </li>
            <hr/>
          </ul>
        </div>
        <nav className='menu'>
          <ul>
            <li>
              <a href='#'></a>Plantpots
            </li>
            <li>
              <a href='#'></a>Ceramics
            </li>
            <li>
              <a href='#'></a>Tables
            </li>
            <li>
              <a href='#'></a>Chairs
            </li>
            <li>
              <a href='#'></a>Crockery
            </li>
            <li>
              <a href='#'></a>Tableware
            </li>
            <li>
              <a href='#'></a>Cutlery
            </li>
          </ul>
        </nav>
      </div>
    </>*/
    <>
      <div className='Header'>
        {/* TOP ADDRESS NAV BAR */}
        <div className='header-1'>
          <div className='inner-header-1'>
            <div className='header-1-text'>
              <AiOutlineSearch />
            </div>
          </div>
          <div className='inner-header-3'>
            <div className='header-3-text'>Avion</div>
          </div>
          <div className='inner-header-2'>
            <AiOutlineShoppingCart />
            <CgProfile />
          </div>
        </div>
        <div className='navbar'>
          <Navbar variant='light' expand='lg'>
            <Container>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='navbar-1'>
                  <Nav.Link href='#home'>Plant Pots</Nav.Link>
                  <Nav.Link href='#link'>Ceramics</Nav.Link>
                  <Nav.Link href='#home'>Tables</Nav.Link>
                  <Nav.Link href='#home'>Chairs</Nav.Link>
                  <Nav.Link href='#home'>Crockery</Nav.Link>
                  <Nav.Link href='#home'>Tableware</Nav.Link>
                  <Nav.Link href='#home'>Cutilery</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Topbar;
