import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../assets/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      Most likely, you haven't ordered a pizza yet.
      <br />
      To order a pizza, go to the main page.
    </p>
    <img src={CartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Go back</span>
    </Link>
  </div>
);

export default CartEmpty;
