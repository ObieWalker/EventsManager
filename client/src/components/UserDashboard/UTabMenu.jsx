import React from 'react';
import { matchPath } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SideNav, { Nav, NavText } from 'react-sidenav';

import BookCenter from './BookCenter.jsx';
import ViewEvents from './ViewEvents.jsx';

const match = matchPath('/user-dashboard', {
  path: '/',
  exact: true,
  strict: false
});

const BaseContainer = props =>
  <div
    style={{
      display: 'inline-block',
      paddingTop: 16,
      paddingBottom: 10,
      fontFamily: 'Roboto',
      fontSize: 30,
      width: 300
    }}
  >
    {props.children}
  </div>;

const SideNavWithAlerts = () =>
  <SideNav
    hoverBgColor="#232a2f"
    hoverColor="red"
    highlightBgColor="#222120"
    defaultSelected="booking"
    highlightColor="#FFF"
  >
    <div />

    <Nav id="booking">
      <NavText>
        <span style={{ marginLeft: 6 }}><Link to = '/'>Book a Center</Link></span>
      </NavText>
    </Nav>
    <Nav id="events">
      <NavText>
        <span style={{ marginLeft: 2 }}><Link to='view'>View My Events</Link></span>
      </NavText>

    </Nav>
    <Nav id="centers">
      <NavText>
        <span style={{ marginLeft: 2 }}><Link to='/centers'>View Centers</Link></span>
      </NavText>

    </Nav>

  </SideNav>;


class UTabMenu extends React.Component {
  renderBook() {
    return <BookCenter />;
  }

  renderView() {
    return <ViewEvents />;
  }


  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>


          <BaseContainer
            style={{
              fontSize: 12,
              background: '#2d353c',
              color: '#a8acb1',
              paddingTop: 0
            }}
          >
            <div style={{ display: 'flex', padding: 16, background: '#1a2229' }}>
              <div style={{ width: '100%', height: 250 }}>
                <img
                  src="http://i63.tinypic.com/hs454x.jpg"
                  style={{ borderRadius: '20px', width: '100%', height: 250 }}
                />
              </div>

            </div>
            <SideNavWithAlerts />
          </BaseContainer>
          <div style={{ padding: 20 }}>
            <Route path = {`${match.url}/book`} render={this.renderBook} />
            <Route path={'/view'} render={this.renderView} />
            <Route path={`${match.url}/centers`} render={this.renderCenters} />
          </div>
        </div>
      </Router>
    );
  }
}

export default UTabMenu;
