import React from 'react';
import {Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import AuthModal from './AuthModal'
import Login from './Login'
import Register from './Register'
import ContactUs from './ContactUs'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/authmodal' component={AuthModal} />
            <Route path='/register' component={Register} />
            <Route path='/contactus' component={ContactUs} />         
            {/* <Redirect to="/" /> */}
        </Switch>
    </main>
);
export default Main;