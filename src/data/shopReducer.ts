import { ActionTypes, DataLoadAction } from './types';
import { SportsStore } from './cartReducer';

export const ShopReducer = (storeData: SportsStore, action: DataLoadAction): SportsStore => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data
      }
  
    default:
      return storeData || {};
  }
}
