import React from 'react';
import { CartDetailsRows } from './CartDetailsRows';
import { Link } from 'react-router-dom';

export const CartDetails = (props: any) => {
  const getLinkClasses = () => `btn btn-secondary m-1 ${props.cartItems === 0 ? "disabled" : ""}`;
  return (
    <div className="m-3">
      <h2 className="text-center">Your Cart</h2>
      <table className="table table-bordered table-stripped">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Products</th>
            <th className="text-right">Price</th>
            <th className="text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <CartDetailsRows
            cart={props.cart}
            cartPrice={props.cartPrice}
            updateQuantity={props.updateCartQuantity}
            removeFromCart={props.removeFromCart}
          />
        </tbody>
      </table>
      <div className="text-center">
        <Link className="btn btn-primary m-1" to="/shop">Continue Shopping</Link>
        <Link className={getLinkClasses()} to="/shop/checkout">Checkout</Link>
      </div>
    </div>
  )
}