import { ActionTypes, DataTypes } from './types';
import { IStoreState } from './cartReducer';

export const ShopReducer = (storeData: IStoreState, action: any): IStoreState => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
      }
    case ActionTypes.DATA_SET_PAGESIZE:
      return { ...storeData, pageSize: action.payload };
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return { ...storeData, sortKey: action.payload };
    case ActionTypes.DATA_STORE:
      if (action.payload.dataType === DataTypes.ORDERS) {
        return { ...storeData, order: action.payload.data }
      }
    default:
      return storeData || {};
  }
}
