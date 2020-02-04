import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPageSize, setSortProperty } from '../data/actionCreator';

const mapStateToProps = (dataStore: any) => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore: any, actionCreators: any, router: any) => ({
  ...dataStore, ...router, ...actionCreators, 
  currentPage: Number(router.match.params.page),
  pageCount: Math.ceil((dataStore.products_total || dataStore.pageSize || 5)/(dataStore.pageSize || 5)),
  navigateToPage: (page: number) => router.history.push(`/shop/products/${router.match.params.category}/${page}`),
});

export const ProductPageConnector = (PageComponent: any) => withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent));
