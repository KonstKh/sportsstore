import Axios, { Method, AxiosResponse } from 'axios';
import { RestUrls } from './urls';

type SendRequestType = (method: Method, url: string, params: any, data?: any) => Promise<AxiosResponse<any>>;
type GetDataType = (type: string, params: any) => Promise<AxiosResponse<any>>;

export class RestDataSource {
  GetData: GetDataType = async (dataType: string, params: any) => this.SendRequest('get', RestUrls[dataType], params);
  StoreData = (dataType: string, data: any) => this.SendRequest('post', RestUrls[dataType], {}, data);
  SendRequest: SendRequestType = (method: Method, url: string, params: any, data: any) => Axios.request({method, url, params, data});
}
