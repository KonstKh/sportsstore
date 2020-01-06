import React, { useEffect } from 'react';
import { loadData } from '../data/actionCreator';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Shop } from './Shop';
import { DataTypes } from '../data/types';

const mapStateToProps = (dataStore: any) => ({ ...dataStore });
const mapDispatchToProps = { loadData };

const filterProducts = (products: any, category: any) => (
  !category || category === 'All'
    ? products
    : products.filter((p: any) => p.category.toLowerCase() === category.toLowerCase())
);

const Connector = (props: any) => {

  useEffect(() => {
    props.loadData(DataTypes.CATEGORIES);
    props.loadData(DataTypes.PRODUCTS);
  });

  return <Switch>
    <Route path="/shop/products/:category?"
      render={(routeProps) => {
        return (<Shop {...props}{...routeProps} products={filterProducts(props && props.products, routeProps.match.params.category)} />)
      }
      } />
    <Redirect to="/shop/products" />
  </Switch>

}

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(Connector);
