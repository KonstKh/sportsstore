import { ActionsType } from "./dataStore";
import { IDataLoad } from "./types";

const isPromise = (payload: any) => (typeof payload === 'object' || typeof payload === 'function') 
  && (typeof payload.then === 'function');

export const asyncAction = () => (next: any) => (action: ActionsType) => {
  if(action.payload && isPromise(action.payload)) {
    (action.payload as unknown as Promise<IDataLoad>).then((result: any) => next({...action, payload: result}));
  } else {
    next(action);
  }
}
