import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link, Outlet} from 'react-router-dom';

function Nav({onSearch}) {
  // console.log(Logo)
  return (
    <div id='nav'>
      <Link to='/'>
        <div className='navLogo'>
          <img id='logoHenry' src={Logo} alt='Henry logo'/>
          <h2>Henry - Weather App</h2>
        </div>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <Link to='/city'>
        <span>Cities</span>
      </Link>
      <SearchBar onSearch={onSearch}/>
      <Outlet />
    </div>
  );
};

export default Nav;
