import React, {Component} from 'react'
import getAllCentersAction from '../../actions/actionTypes'

class AdminCenters extends Component {

    componentWillMount() {
        // if (this.props.centers.length === 0) {
        //     this.props.getAllCentersAction();
        // }
    }


    render() {
        return (
            <div style={{width:'60%', margin:'auto', border: '3px solid black', padding:'5%'}}>
            <table className = "table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Region</th>
                    <th>Capacity</th>
                    <th>Facilities (Comma Separated)</th>
                </tr>
            </thead>
            <tbody>
                {/* {this.props.} */}
            </tbody>
            </table>
            </div>
        )
    }
}

export default AdminCenters;