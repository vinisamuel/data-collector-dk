import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectShipment from '../pages/CollectShipment';
import CollectWarehouse from '../pages/CollectWarehouse';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={CollectShipment} />

    <Route path='/collect-shipment' component={CollectShipment} />

    <Route path='/collect-warehouse' component={CollectWarehouse} />
  </Switch>
);

export default Routes;
