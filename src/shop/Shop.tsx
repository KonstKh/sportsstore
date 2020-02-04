import React from 'react';
import { CategoryNavigation } from './CategoryNavigation';
import { ProductList } from './ProductList';
import { CartSummary} from './CartSummary';
import { ProductPageConnector } from './ProductPageConnector';
import { PaginationControls } from '../components/PaginationControls';

// import { RouteProps } from 'react-router-dom';
// import { IProps, StateProps } from './ShopConnector';
// import { IStoreState } from '../data/cartReducer';
// import { SportsStore } from '../data/cartReducer';

const ProductPages = ProductPageConnector(PaginationControls);

export const Shop = (props: any) => {
  
  const handleAddToCart = (...args: any) => {
    props.addToCart(...args);
    props.history.push("/shop/cart")
  }

  return(
  <div className="container-fluid">
    <div className="row">
      <div className="col bg-dark text-white">
        <div className="navbar-brand">SPORTS STORE</div>
        <CartSummary {...props} />
      </div>
    </div>
    <div className="row">
      <div className="col-3 p-2">
        <CategoryNavigation baseUrl="/shop/products" categories={props.categories} />
      </div>
      <div className="col-9 p-2">
        <ProductPages />
        <ProductList products={props.products} addToCart={handleAddToCart} />
      </div>
    </div>
  </div>
)}