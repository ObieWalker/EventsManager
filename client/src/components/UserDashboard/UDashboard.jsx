import React, { Component, Button, Modal } from 'react';
import TabMenu from './UTabMenu'
import BookCenter from './BookCenter'
import Header from './UHeader'



class UDashboard extends Component {

    render() {
        return (
            <div>
                <Header />
                <TabMenu />
            </div>
        )
    }
}
export default UDashboard