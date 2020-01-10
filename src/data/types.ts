export const DataTypes = {
  PRODUCTS: "products",
  CATEGORIES: "categories"
}

export const ActionTypes = {
  DATA_LOAD: "data_load",
  CART_ADD: 'cart_add',
  CART_UPDATE: 'cart_update',
  CART_DELETE: 'cart_delete',
  CART_CLEAR: 'cart_clear',
}

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export const createAction = <T extends string, P >(type: T, payload: P): Action<T, P> => {
  return { type, payload };
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}
export interface ActionPayload {
  product: Product,
  quantity: number
}

export type DataLoadAction = Action<typeof ActionTypes.DATA_LOAD, any>;
export type CartAddAction = Action<typeof ActionTypes.CART_ADD, ActionPayload>;
export type CartUpdateAction = Action<typeof ActionTypes.CART_UPDATE, ActionPayload>;
export type CartDeleteAction = Action<typeof ActionTypes.CART_DELETE, Product>;
export type CartClearAction = Action<typeof ActionTypes.CART_CLEAR, null>;

export type CartActions = CartAddAction | CartUpdateAction | CartDeleteAction | CartClearAction;