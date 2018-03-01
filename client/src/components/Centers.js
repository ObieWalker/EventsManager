import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getAllCentersAction from '../actions/actionTypes'
import Search from './Search'
import {Card, CardTitle, Row, Col} from 'react-materialize'



class Centers extends Component {
    componentWillMount() {
        // if (this.props.centers.length === 0) {
        //     this.props.getAllCentersAction();
        // }
    }
    render() {
        return (
            <div>
                <div >
                    <h3>All centers and details.</h3>
                    <Search />
                    <Row>
                        <Col s={4} className='grid-example'>
                            <Card header={<CardTitle reveal image={"http://i68.tinypic.com/dh5vk.jpg"} waves='light' />}
                                title="Card Title"
                                reveal={<p>This center is equipped with facilities like </p>}>
                                <p><a href="#"></a></p>
                            </Card>
                        </Col>
                    </Row>
                
                </div>
            </div>
        );
    }
}

// Centers.propTypes = {
//     centers: PropTypes.arrayOf(PropTypes.object).isRequired,
//     getAllCenterActions: PropTypes.objectOf(PropTypes.func).isRequired
// };

// const mapStateToProps = state => {
//         centers: state.centers
//     };

// const mapDispatchToProps = dispatch => 
//     bindActionCreators({getAllCenterActions}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Centers);
export default Centers