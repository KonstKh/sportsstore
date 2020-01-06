import { createStore } from 'redux';
import { ShopReducer } from './shopReducer';

export const SportsStoreDataStore = createStore(ShopReducer, 
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
