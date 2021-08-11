import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectShipment from '../components/CollectShipment';
import CollectWarehouse from '../components/CollectWarehouse';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={CollectShipment} />

    <Route path='/collect-shipment' component={CollectShipment} />

    <Route path='/collect-warehouse' component={CollectWarehouse} />
  </Switch>
);

export default Routes;
