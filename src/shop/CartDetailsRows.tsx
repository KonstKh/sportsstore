import React, { useState } from 'react';
import { Product } from '../data/types';

const CartDetailsRow = (item: any, handleChange: any, removeFromCart: any) => {

  const [quantity, setQuantity] = useState(item.quantity);

  return <tr key={item.product.id}>
    <td>
      <input type="number" value={quantity} onChange={(ev: any) => {
        setQuantity(ev.target.value)
        handleChange(item.product, ev)
      }} />
    </td>
    <td>{item.product.name}</td>
    <td>{item.product.price.toFixed(2)}</td>
    <td>{(quantity * item.product.price).toFixed(2)}</td>
    <td>
      <button className="btn btn-sm danger" onClick={() => removeFromCart(item.product)}>Remove</button>
    </td>
  </tr>
}

export const CartDetailsRows = (props: any) => {

  const handleChange = (product: Product, event: any) => {
    props.updateQuantity(product, event.target.value);
  }

  {
    if (!props.cart || props.cart.length === 0) {
      return <tr><td>Your cart is empty</td></tr>
    } 
    else {
      return <React.Fragment>
        {props.cart.map((item: any) => (CartDetailsRow(item, handleChange, props.removeFromCart)))}
        <tr>
          <th colSpan={3} className="text-right">Total:</th>
          <th colSpan={2}>${props.cartPrice.toFixed(2)}</th>
        </tr>
      </React.Fragment>
    }
  }
}
