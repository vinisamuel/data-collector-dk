import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CollectCarrier from '../pages/CollectCarrier';
import CollectShipment from '../pages/CollectShipment';
import CollectWarehouse from '../pages/CollectWarehouse';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/login' component={Login} />

    <Route path='/collect-carrier' component={CollectCarrier} />
    <Route path='/collect-shipment' component={CollectShipment} />
    <Route path='/collect-warehouse' component={CollectWarehouse} />

    <Route path='/' exact component={Login} />
  </Switch>
);

export default Routes;
