import React, { Component } from 'react';
import { Col, NavItem, Nav, Row, Tab } from 'react-bootstrap';

import BookCenter from './BookCenter.jsx';
import ViewEvents from './ViewEvents.jsx';

class Dashboard extends Component {
  render() {
    return (

      <div className="d-flex flex-row mt-2">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <div>
                  <div style={{ display: 'flex', padding: '2%', background: '#blue' }}>
                    <div style={{ width: '100%', height: '60%' }}>
                      <img src='http://i63.tinypic.com/hs454x.jpg'
                        style={{ borderRadius: '20px', width: '100%', height: 200 }}
                      />
                    </div>

                  </div>
                </div>
                <NavItem eventKey="first">Book a Center</NavItem>
                <NavItem eventKey="second">View your Events</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first"><BookCenter /></Tab.Pane>
                <Tab.Pane eventKey="second"><ViewEvents /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>;
      </div>
    );
  }
}

export default Dashboard;
