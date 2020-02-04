import { ActionTypes, CartDeleteAction, CartUpdateAction, CartAddAction, CartClearAction, createAction, IProduct } from './types';

export const addToCart = (product: IProduct, quantity: number): CartAddAction => (
  createAction(ActionTypes.CART_ADD, { product, quantity: quantity || 1 })
);

export const updateCartQuantity = (product: IProduct, quantity: number): CartUpdateAction => (
  createAction(ActionTypes.CART_UPDATE, { product, quantity })
);

export const removeFromCart = (product: IProduct): CartDeleteAction => (
  createAction(ActionTypes.CART_DELETE, product)
);

export const clearCart = (): CartClearAction => (
  createAction(ActionTypes.CART_CLEAR, null)
);
