import React from 'react';
import { Link } from 'react-router-dom';
import { SportsStore } from '../data/cartReducer';

export const CartSummary = (props: SportsStore) => {

  const getSummary = () => {
    if (props.cartItems > 0) {
      return <span>
        {props.cartItems} item(s), ${props.cartPrice.toFixed(2)}
      </span>
    } else {
      return <span>Your cart: (empty)</span>
    }
  }

  const getLinkClasses = () => {
    return `btn btn-sm btn-dark text-white ${props.cartItems > 0 ? 'disables' : ""}`
  }

  return (
    <div className="float-right">
      <small>
        {getSummary()}
      </small>
      <Link className={getLinkClasses()} to="/shop/cart"><i className="fa fa-shopping-cart"></i></Link>
    </div>
  )
}
