import React from 'react';
import {Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import AuthModal from './AuthModal'
import TestComp from './TestComp'
import Login from './Login'
import Signup from './Signup'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/authmodal' component={AuthModal} />
            <Route path='/signup' component={Signup} />
            <Redirect to="/" />
        </Switch>
    </main>
);
export default Main;