import React, {useEffect} from 'react';
import { DataTypes } from '../data/types';
// import { IProps } from '../shop/ShopConnector';
// import { RouteProps } from 'react-router-dom';

export const DataGetter = (props: any) => {

  useEffect(() => {
    getData()
  });

  const getData = () => {
    const dsData = props.products_params || {};
    const rtData: {[key: string] : any} = {
      _limit: props.pageSize || 5,
      _sort: props.sortKey || "name",
      _page: props.match.params.page || 1,
      category_like: (props.match.params.category || "") === "all" ? "" : props.match.params.category
    }
    if(Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
      props.loadData(DataTypes.PRODUCTS, rtData)
    }
  }

  return <React.Fragment>{props.children}</React.Fragment>
}
