import { createStore, Store, Action } from 'redux';

import { ShopReducer } from './shopReducer';
import { CartReducer, SportsStore } from './cartReducer';
import { CommonReducer } from './commonReducer';
import { CartActions, DataLoadAction } from './types';

type ActionsType = CartActions | DataLoadAction;

const commonReducer = CommonReducer(ShopReducer, CartReducer);
export const SportsStoreDataStore: Store<SportsStore, Action<ActionsType>> = createStore(commonReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
