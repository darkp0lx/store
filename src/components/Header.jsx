import React,{useContext} from 'react';
import '../styles/components/Header.css';
import {AppContext} from '../context/AppContext'
import { Link } from 'react-router-dom';
const Header = () => {
  const {state}=useContext(AppContext)
  console.log(state);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Katy's</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i class="fas fa-shopping-cart"></i>
        </Link>
        {state.cart.length>0?state.cart.length:""}
      </div>
    </div>
  );
};

export default Header;
