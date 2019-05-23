import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact panth='/cart' component={CartPage} />
    </Switch>
)

export default Router;