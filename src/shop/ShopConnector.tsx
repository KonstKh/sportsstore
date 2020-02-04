import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
// import * as x from 'react-router';
import { Shop } from './Shop';
import { DataTypes, IProduct, CartAddAction, CartUpdateAction, CartDeleteAction, CartClearAction } from '../data/types';
import * as CartActions from '../data/cardActionCreators';
import * as ShopActions from '../data/actionCreator';
import { CartDetails } from './CartDetails';
import { DataGetter } from '../data/DataGetter';
import { IStoreState } from '../data/cartReducer';
import { Checkout } from './Checkout';
import { Thanks } from './Thanks';

export type StateProps = (store: IStoreState) => IStoreState;
export interface IProps {
  loadData: (dataType: string, params: any) => {
    type: string;
    payload: Promise<{ dataType: string, data: any, total: number, params: any }>
  };
  addToCart: (product: IProduct, quantity: number) => CartAddAction;
  updateCartQuantity: (product: IProduct, quantity: number) => CartUpdateAction;
  removeFromCart: (product: IProduct) => CartDeleteAction;
  clearCart: () => CartClearAction;
  placeOrder: (order: any) => { type: string, payload: Promise<{ dataType: string, data: any }> }
}

const mapStateToProps: StateProps = (dataStore: IStoreState) => ({ ...dataStore });
const mapDispatchToProps: IProps = { ...ShopActions, ...CartActions };

const Connector: React.FC<IProps> = (props: IProps) => {
  // TODO: implement it in nested component or base dependency on different value
  // const res = x.matchPath(window.location.pathname, '/shop/products/:category?');
  // console.log('props', props, res);

  // useEffect(() => {
  //   props.loadData(DataTypes.CATEGORIES);
  //   props.loadData(DataTypes.PRODUCTS);
  //   //@ts-ignore
  // }, [res.params.category]);

  const selectComponent = (routeProps: any) => {
    const wrap = (Component: any, Content: any) =>
      <Component {...props}  {...routeProps}>
        {Content && wrap(Content, null)}
      </Component>
    switch (routeProps.match.params.section) {
      case "products":
        return wrap(DataGetter, Shop);
      case "cart":
        return wrap(CartDetails, null);
      case "checkout":
        return wrap(Checkout, null);
      case "thanks":
        return wrap(Thanks, null);
      default:
        return <Redirect to="/shop/products/all/1" />
    }
  }


  useEffect(() => {
    props.loadData(DataTypes.CATEGORIES, null);
  }, []);

  return (
    <Switch>
      <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={true} />
      <Route path={"/shop/:section?/:category?/:page?"} render={routeProps => selectComponent(routeProps)} />
    </Switch>
  );
}

export const ShopConnector = connect<IStoreState, IProps, {}, IStoreState>(mapStateToProps, mapDispatchToProps)(Connector);
