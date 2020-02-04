import { IStoreState } from "./cartReducer";
import { CartActions, ShopActions } from './types';
import { CartReducer} from './cartReducer';
import { ShopReducer } from './shopReducer';

type ReducersType = typeof CartReducer | typeof ShopReducer;

//todo: set storeData type
export const CommonReducer = (...reducers: ReducersType[]) => (storeData: any, action: CartActions & ShopActions): IStoreState => {
  for(let i = 0; i < reducers.length; i++) {
    let newStore = reducers[i](storeData, action);
    if(newStore !== storeData) {
      return newStore;
    }
  }
  return storeData;
}
