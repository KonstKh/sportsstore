import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { SportsStoreDataStore } from './data/dataStore';
import { ShopConnector } from './shop/ShopConnector';

const App: React.FC = () => {
  return (
    <Provider store={SportsStoreDataStore}>
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
