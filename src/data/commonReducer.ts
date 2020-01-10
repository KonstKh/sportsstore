import { SportsStore } from "./cartReducer";
import { CartActions, DataLoadAction } from './types';
import { CartReducer} from './cartReducer';
import { ShopReducer } from './shopReducer';

type ReducersType = typeof CartReducer | typeof ShopReducer;
type Actions = CartActions | DataLoadAction;

//todo: set storeData type
export const CommonReducer = (...reducers: ReducersType[]) => (storeData: any, action: Actions): SportsStore => {
  for(let i = 0; i < reducers.length; i++) {
    let newStore = reducers[i](storeData, action);
    if(newStore !== storeData) {
      return newStore;
    }
  }
  return storeData;
}
