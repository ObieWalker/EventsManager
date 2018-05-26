import React, { Component } from 'react';
import { Col, NavItem, Nav, Row, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import CreateCenter from './CreateCenter.jsx';
import Centers from './AdminCenters.jsx';
import Events from './AllEvents.jsx';
import Users from './AllUsers.jsx';

/**
 *
 *
 * @class AdminPage
 * @extends {Component}
 */
class AdminPage extends Component {
  /**
   *
   *
   * @returns {object} tab content
   * @memberof AdminPage
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
                    <div>
                      <br />
                      <div className="col-sm-12">
                        <ul className="list-group">
                          <li className="list-group-item text-muted">
                            Profile
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong className="">Name</strong>
                            </span>
                            <span className="text-uppercase,nesvd xckj  ">
                              {user.firstName} {user.lastName}
                            </span>
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong className="">Account Created:</strong>
                            </span>{' '}
                            {moment(user.createdAt).format('ll')}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong className="">Last login</strong>
                            </span>{' '}
                            {moment(user.loginTime).fromNow()}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong className="">Username</strong>
                            </span>{' '}
                            {user.username}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong className="">Account Type </strong>
                            </span>{' '}
                            {user.isAdmin ? 'Admin' : 'Regular User'}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Add a Center</NavItem>
                <NavItem eventKey="second">Centers</NavItem>
                <NavItem eventKey="third">Events</NavItem>
                <NavItem eventKey="fourth">Users</NavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <CreateCenter />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Centers />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Events />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Users />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

AdminPage.propTypes = {
  UserSessionAction: PropTypes.func,
  loginUser: PropTypes.object,
  login: PropTypes.func
};

const mapStateToProps = state => ({
  loginUser: state.loginUser
});

export default connect(mapStateToProps, null)(AdminPage);
