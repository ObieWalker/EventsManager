import React, { Component } from 'react';
import { Col, NavItem, Nav, Row, Tab } from 'react-bootstrap';

import BookCenter from './BookCenter.jsx';
import ViewEvents from './UserEvents.jsx';

class Dashboard extends Component {
  render() {
    return (

      <div className="d-flex flex-row mt-2">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={3}>
              <div>
                <div style={{ display: 'flex', background: '#blue' }}>
                  <div style={{ width: '100%', height: '60%' }}>
                    <div ><br />
                      <div className="col-sm-12">
                        <ul className="list-group">
                          <li className="list-group-item text-muted" contentEditable="false">Profile</li>
                          <li className="list-group-item text-muted text-left" contentEditable="true" placeholder="Status Message">I feel like...</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Joined</strong></span> 2.13.2014</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Last seen</strong></span> Today</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Username</strong></span> Joseph
                        Doe</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Rank: </strong></span> Pet Sitter

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Book a Center</NavItem>
                <NavItem eventKey="second">View your Events</NavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first"><BookCenter /></Tab.Pane>
                <Tab.Pane eventKey="second"><ViewEvents /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Dashboard;
