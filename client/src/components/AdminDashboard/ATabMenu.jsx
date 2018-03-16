import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SideNav, { Nav, NavText } from 'react-sidenav';

import CreateCenter from './CreateCenter.jsx';


const BaseContainer = props =>
  <div
    style={{
      display: 'inline-block',
      padding: '1%',
      fontFamily: 'Roboto',
      fontSize: 30,
      width: 300
    }}
  >
    {props.children}
  </div>;


const SideNavWithAlerts = () =>
  <SideNav
    hoverBgColor="#4054f3"
    hoverColor="red"
    highlightBgColor="#4054b2"
    defaultSelected="centers"
    highlightColor="#4054b2"
  >
    <div />
    <Nav id="centers">
      <NavText>
        <span style={{ marginLeft: 1 }}><Link to='/admin/centers'>All Center</Link></span>
      </NavText>
    </Nav>
    <Nav id="add">
      <NavText>
        <span style={{ marginLeft: 6 }}><Link to='/admin/add-center'>Add a Center</Link></span>
      </NavText>
    </Nav>

  </SideNav>;


class ATabMenu extends React.Component {
  renderAdd() {
    return <CreateCenter />;
  }

  //   renderModify() {
  //     return <ModifyCenter />;
  //   }


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
            <div style={{ display: 'flex', padding: '10%', background: '#blue' }}>
              <div style={{ width: '80%', height: '60%' }}>
                <img
                  src="http://i63.tinypic.com/hs454x.jpg"
                  style={{ borderRadius: '20px', width: '100%', height: 200 }}
                />
              </div>

            </div>
            <SideNavWithAlerts />
          </BaseContainer>
          <div style={{ padding: 20 }}>
            <Route path={'/admin/add-center'} render={this.renderAdd} />
            <Route path={'/modify'} render={this.renderModify} />
          </div>
        </div>
      </Router>
    );
  }
}

export default ATabMenu;
