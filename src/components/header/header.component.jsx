import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './../../logo.svg';
import SearchBox from './../search-box/search-box.component'
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <SearchBox className='search-box' placeholder="Search todo items..." />
    </div>
  );
}

export default Header;
