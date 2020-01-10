import { ActionTypes, CartDeleteAction, CartUpdateAction, CartAddAction, CartClearAction, createAction, Product } from './types';

export const addToCart = (product: Product, quantity: number): CartAddAction => (
  createAction(ActionTypes.CART_ADD, { product, quantity: quantity || 1 })
);

export const updateCartQuantity = (product: Product, quantity: number): CartUpdateAction => (
  createAction(ActionTypes.CART_UPDATE, { product, quantity })
);

export const removeFromCart = (product: Product): CartDeleteAction => (
  createAction(ActionTypes.CART_DELETE, product)
);

export const clearCart = (): CartClearAction => (
  createAction(ActionTypes.CART_CLEAR, null)
);
