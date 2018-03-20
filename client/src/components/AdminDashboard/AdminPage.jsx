import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav, { Nav, NavText } from 'react-sidenav';

import CreateCenter from './CreateCenter.jsx';
import Centers from './AdminCenters.jsx';


const BaseContainer = props =>
  <div
    style={{
      display: 'inline-block',
      padding: '1%',
      fontFamily: 'Roboto',
      fontSize: 20,
      width: '20%'
    }}
  >
    {props.children}
  </div>;


const SideNavWithAlerts = () =>
  <SideNav
    hoverBgColor="#4054f3"
    hoverColor="red"
    highlightBgColor="#4054b2"
    highlightColor="#4054b2"
  >
    <Nav id="centers">
      <NavText>
        <span ><Link to='/admin/centers'>All Center</Link></span>
      </NavText>
    </Nav>
    <Nav id="add">
      <NavText>
        <span><Link to='/admin/add-center'>Add a Center</Link></span>
      </NavText>
    </Nav>

  </SideNav>;


class AdminPage extends React.Component {
  renderAdd() {
    return <CreateCenter />;
  }

  renderCenters() {
    return <Centers />;
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
                  src=""
                  style={{ borderRadius: '20px', width: '100%', height: 200 }}
                />
              </div>

            </div>
            <SideNavWithAlerts />
          </BaseContainer>
          <div style={{ padding: 20, width: '40%' }}>
            <Route exact path={'/admin/centers'} render={this.renderCenters} />
            <Route path={'/admin/add-center'} render={this.renderAdd} />
          </div>
        </div>
      </Router>
    );
  }
}

BaseContainer.propTypes = {
  children: PropTypes.node
};

export default AdminPage;
