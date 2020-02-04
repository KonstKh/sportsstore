import { ActionTypes, IProductParams, DataTypes } from './types';
// import { data as phData } from './placeholderData';
import { RestDataSource } from '../data/restDataSource';

const dataSource = new RestDataSource();

export interface IPayload {
  dataType: string,
  data: any,
  total: number,
  params: IProductParams,
}

type LoadData = (dataType: string, params: any) => { type: string, payload: Promise<IPayload> };

export const loadData: LoadData = (dataType: string, params: any) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType, params)
    .then(res => {
      return ({ dataType, data: res.data, total: Number(res.headers["x-total-count"]), params })
    })
});

export const setPageSize = (newSize: number) => ({ type: ActionTypes.DATA_SET_PAGESIZE, payload: newSize });

export const setSortProperty = (newProp: string) => ({ type: ActionTypes.DATA_SET_SORT_PROPERTY, payload: newProp });

export const placeOrder = (order: any) => ({
  type: ActionTypes.DATA_STORE,
  payload: dataSource.StoreData(DataTypes.ORDERS, order).then(res => ({ dataType: DataTypes.ORDERS, data: res.data}))
});
