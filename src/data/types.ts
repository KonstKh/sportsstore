export const DataTypes = {
  PRODUCTS: "products",
  CATEGORIES: "categories",
  ORDERS: "orders",
}

export const ActionTypes = {
  DATA_LOAD: "data_load",
  DATA_STORE: 'data_store',
  CART_ADD: 'cart_add',
  CART_UPDATE: 'cart_update',
  CART_DELETE: 'cart_delete',
  CART_CLEAR: 'cart_clear',
  DATA_SET_SORT_PROPERTY: 'data_set_sort',
  DATA_SET_PAGESIZE: 'data_set_pagesize',
}

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export const createAction = <T extends string, P >(type: T, payload: P): Action<T, P> => {
  return { type, payload };
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}
export interface IActionPayload {
  product: IProduct,
  quantity: number
}

export interface IProductParams {
  _limit: number,
  _sort: string,
  _page: number,
  category_like: string,
}
export interface IDataLoad {
  dataType: any,
  data: any,
  total: number,
  pageSize: number,
  // sortKey: number,

  products_total?: number,
  params?: {
    products_params?: IProductParams,
    category_params?: any,
    // pageSize: number,
    // sortKey: string,
  }
}

type SetPageSizeAction = Action<typeof ActionTypes.DATA_SET_PAGESIZE, {pageSize: number}>;
export type DataLoadAction = Action<typeof ActionTypes.DATA_LOAD, IDataLoad>;

export type CartAddAction = Action<typeof ActionTypes.CART_ADD, IActionPayload>;
export type CartUpdateAction = Action<typeof ActionTypes.CART_UPDATE, IActionPayload>;
export type CartDeleteAction = Action<typeof ActionTypes.CART_DELETE, IProduct>;
export type CartClearAction = Action<typeof ActionTypes.CART_CLEAR, any>;

export type CartActions = CartAddAction | CartUpdateAction | CartDeleteAction | CartClearAction;
export type ShopActions = DataLoadAction & SetPageSizeAction;