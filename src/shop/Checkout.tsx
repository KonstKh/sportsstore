import React from 'react';
import { ValidatedForm } from '../forms/ValidatedForm';

export const Checkout = (props: any) => {
  const defaultAttrs = { type: 'text', required: true };
  const formModel = [
    { label: "Name"},
    { label: "Email", attrs: { type: 'email' }},
    { label: "Address"},
    { label: "City" },
    { label: "Zip/Postal Code", name: 'zip' },
    { label: "Country"}
  ];

  const handleSubmit = (formData: any) => {
    const order = { ...formData, products: props.cart.map((item: any) => ({ quantity: item.quantity, product_id: item.product.id }))};
    props.placeOrder(order);
    props.clearCart();
    props.history.push('/shop/thanks');
  }
  const handleCancel = () => {
    props.history.push('/shop/cart');
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
        </div>
      </div>
      <div className="row">
        <div className="col m-2">
          <ValidatedForm formModel={ formModel }
          defaultAttrs={ defaultAttrs}
          submitCallback={handleSubmit}
          cancelCallback={handleCancel}
          submitText="Place order"
          cancelText="Return to cart" />
        </div>
      </div>
    </div>
  )
}