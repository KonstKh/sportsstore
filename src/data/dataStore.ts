import { createStore, applyMiddleware, Store, compose, Reducer } from 'redux';

import { ShopReducer } from './shopReducer';
import { CartReducer, IStoreState } from './cartReducer';
import { CommonReducer } from './commonReducer';
import { CartActions, ShopActions } from './types';

import { asyncAction } from './asyncMiddleware';

export type ActionsType = CartActions & ShopActions;
// let devtools: any = (window as any)['devToolsExtension'] ? (window as any)['devToolsExtension']() : (f:any)=>f;
// const middleware = compose(applyMiddleware(asyncAction), devtools);
const middleware = compose(applyMiddleware(asyncAction), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
const commonReducer: Reducer<IStoreState, ActionsType> = CommonReducer(ShopReducer, CartReducer);
export const SportsStoreDataStore: Store<IStoreState, ActionsType> = createStore(commonReducer, middleware);
