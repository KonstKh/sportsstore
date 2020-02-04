import { ActionTypes, CartActions, CartAddAction, IProduct, CartUpdateAction, CartDeleteAction, IActionPayload } from './types';

interface CartItem {
  product: IProduct;
  quantity: number;
}

export type StoreState = Readonly<{
  cart: ReadonlyArray<CartItem>;
  cartItems: number;
  cartPrice: number;
  categories: any,
  products: ReadonlyArray<IProduct>;
  products_total: number;
  pageSize?: number;
  sortKey?: string;
}>

export interface IStoreState {
  cart: CartItem[],
  cartItems: number,
  cartPrice: number,
  categories: any,
  products: IProduct[],
  // categories_total: number,
  products_total: number,
  pageSize: number,
  sortKey: string,
  order: any,
  
}

// todo: don't mutate state
export const CartReducer = (storeData: IStoreState, action: CartActions): IStoreState => {
  let newStore: IStoreState = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const prods = (action as CartAddAction).payload.product;
      const qtty = (action as CartAddAction).payload.quantity;

      let existing = newStore.cart.find((item: CartItem) => item.product.id === prods.id);
      if (existing) { existing.quantity = parseInt(existing.quantity.toString(), 10) + qtty }
      else { newStore.cart = [...newStore.cart, action.payload as IActionPayload] }
      newStore.cartItems += qtty;
      newStore.cartPrice += prods.price * qtty;
      return newStore;
    case ActionTypes.CART_UPDATE:
      newStore.cart.forEach((item: CartItem) => {
        if (item.product.id === (action as CartUpdateAction).payload.product.id) {
          const diff = (action as CartUpdateAction).payload.quantity - item.quantity;
          item.quantity = (action as CartUpdateAction).payload.quantity;
          newStore.cartItems += diff;
          newStore.cartPrice += (item.product.price * diff);
          return action.payload
        } else {
          return item;
        }
      });
      return newStore;

    case ActionTypes.CART_DELETE:
      const itemRemove = newStore.cart.find((item: CartItem) => item.product.id === (action as CartDeleteAction).payload.id);
      if (itemRemove !== undefined) {
        newStore.cartItems -= itemRemove && itemRemove.quantity;
        newStore.cartPrice -= itemRemove.product.price * itemRemove.quantity;
        newStore.cart = newStore.cart.filter((item: CartItem) => item.product.id !== (action as CartDeleteAction).payload.id);
      }
      return newStore;

    case ActionTypes.CART_CLEAR:
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 }
    default:
      return storeData || {};
  }
}
