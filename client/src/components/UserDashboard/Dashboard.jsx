import React, { Component } from 'react';
import { Col, NavItem, Nav, Row, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import BookCenter from './BookCenter.jsx';
import ViewEvents from './UserEvents.jsx';
import History from './History.jsx';

/**
 *
 *
 * @class Dashboard
 * @extends {Component}
 */
class Dashboard extends Component {
  /**
   *
   *
   * @returns {object} tab contents
   * @memberof Dashboard
   */
  render() {
    const { user } = this.props.loginUser;
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
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Name</strong></span> {user.firstName} {user.lastName}</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Joined</strong></span> {moment(user.createdAt).format('ll')}</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Last login</strong></span> {moment(user.loginTime).fromNow()}</li>
                          <li className="list-group-item text-right"><span className="pull-left"><strong className="">Username</strong></span> {user.username}</li>
                          <li className="list-group-item text-right"><span className="pull-left">
                            <strong className="">Account Type </strong></span> {user.isAdmin ? 'Admin' : 'Regular User'}

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Book a Center</NavItem>
                <NavItem eventKey="second">Your Upcoming Events</NavItem>
                <NavItem eventKey="third">Booking History</NavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first"><BookCenter /></Tab.Pane>
                <Tab.Pane eventKey="second"><ViewEvents /></Tab.Pane>
                <Tab.Pane eventKey="third"><History /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  UserSessionAction: PropTypes.func,
  loginUser: PropTypes.object,
  login: PropTypes.func
};

const mapStateToProps = state => ({
  loginUser: state.loginUser,
});


export default connect(mapStateToProps, null)(Dashboard);

