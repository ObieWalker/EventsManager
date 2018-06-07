import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Loading from 'react-loading-animation';
import ScrollUp from 'react-scroll-up';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import getUsers from '../../actions/getUsersAction';
import setAdmin from '../../actions/setAsAdminAction';
import deleteUser from '../../actions/deleteUserAction';
/**
 *
 *
 * @class AllUsers
 * @extends {Component}
 */
export class AllUsers extends Component {
  /**
   * Creates an instance of AllEvents.
   * @param {any} props
   * @memberof AllEvents
   */
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      pageNo: 1,
      limit: 6
    };

    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * @returns {object} all events
   *
   * @memberof AllEvents
   */
  componentWillMount() {
    this.props.getUsers(this.state.pageNo, this.state.limit).then(() => {
      if (this.props.fetchedUsers) {
        this.setState({
          users: this.props.fetchedUsers
        });
      }
    });
  }
  /**
   * @returns {object} state
   *
   * @param {any} nextProps
   * @memberof AllUsers
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.fetchedUsers && this.props.fetchedUsers.length > 0) {
      this.setState({
        users: this.props.fetchedUsers,
        isLoading: false
      });
    }
    if (nextProps !== this.props) {
      this.setState({
        users: nextProps.fetchedUsers,
        isLoading: false
      });
    }
  }
  /**
   * @returns {*} null
   *
   * @memberof AllUsers
   */
  loadMoreContent() {
    this.setState(
      {
        pageNo: this.state.pageNo + 1,
        isLoading: true
      },
      () => {
        this.getMoreUsers(this.state.pageNo, this.state.limit);
      }
    );
  }

  /**
   * @returns {*} null
   *
   * @param {any} pageNo
   * @param {any} limit
   * @memberof AllUsers
   */
  getMoreUsers(pageNo, limit) {
    this.props.getUsers(pageNo, limit);
  }
  /**
   * @returns {*} null
   *
   * @param {any} user
   * @memberof AllUsers
   */
  changeStatus(user) {
    let role;
    if (user.isAdmin) {
      role = 'A Regular User';
    } else {
      role = 'An Admin';
    }
    swal({
      title: 'Modify User Role?',
      text: `${user.username} will be made ${role}`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willSet) => {
      if (willSet) {
        this.props.setAdmin(user.id);
      }
    });
  }
  /**
   * @returns {*} null
   *
   * @param {any} user
   * @memberof AllUsers
   */
  handleDelete(user) {
    swal({
      title: 'Delete User?',
      text: `${user.username} will be deleted permanently`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.props.deleteUser(user.id);
      }
    });
  }
  /**
   *
   *
   * @returns {object} centers
   * @memberof AllUsers
   */
  render() {
    return (
      <div>
        <div>
          <div className="center col s12 m12">
            <h3>List of Users.</h3>
            <div>
              <div>
                {this.state.users ? (
                  <table
                    className="table text-center table-hover
            mx-auto bg-white table-responsive-sm table-striped"
                    style={{ width: '100%' }}
                  >
                    <thead className="text-center text-white
                    bg-info border border-white">
                      <tr className="p-3">
                        <th scope="col" className="border border-white">
                          {' '}
                          S/N
                        </th>
                        <th scope="col" className="border border-white">
                          First Name
                        </th>
                        <th scope="col" className="border border-white">
                          Last Name
                        </th>
                        <th scope="col" className="border border-white">
                          Username
                        </th>
                        <th scope="col" className="border border-white">
                          Email
                        </th>
                        <th scope="col" className="border border-white">
                          Admin/User
                        </th>
                        <th scope="col" className="border border-white" />
                        <th scope="col" className="border border-white" />
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.fetchedUsers.map((user, i) => (
                        <tr
                          id="#1"
                          key={i}
                          index={i}
                          className="border border-white"
                        >
                          <td scope="row">{i + 1}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                          <td>
                            <button
                              onClick={this.changeStatus.bind(this, user)}
                              type="button"
                              className="btn-warning btn-sm modi"
                            >
                              Modify Role
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={this.handleDelete.bind(this, user)}
                              type="button"
                              className="btn-danger btn-sm del"
                            >
                              Delete User
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p
                    style={{
                      margin: '10%',
                      fontSize: '20px',
                      fontStyle: 'Sans-serif'
                    }}
                  >
                    There are no registered users.
                  </p>
                )}
              </div>
            </div>
          </div>
          {this.state.isLoading === true && (
            <div>
              <p>Loading...</p> <Loading />
            </div>
          )}
          <ScrollUp showUnder={150}>
            <button
              type="button"
              className="btn btn-floating btn-rounded waves-effect"
            >
              TOP
            </button>
          </ScrollUp>
          {this.props.moreUsers && (
            <button
              onClick={this.loadMoreContent}
              className="btn btn-primary active"
              id="loadMore"
              disabled={!this.props.moreUsers}
            >
              Load More
            </button>
          )}
        </div>
        <div style={{ height: '1000px' }} />
      </div>
    );
  }
}

AllUsers.propTypes = {
  fetchedUsers: PropTypes.array,
  moreUsers: PropTypes.bool,
  getUsers: PropTypes.func,
  setAdmin: PropTypes.func,
  deleteUser: PropTypes.func
};

const mapStateToProps = state => ({
  fetchedUsers: state.getUsers.fetchedUsers,
  moreUsers: state.getUsers.moreUsers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
      setAdmin,
      deleteUser
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
