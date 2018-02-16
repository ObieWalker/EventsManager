import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AuthModal from './AuthModal'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/modal" component={AuthModal} />
    </Switch>
);
export default Main;