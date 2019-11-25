import React, { Component } from 'react'
import Bedges from './Bedges/Bedges';
import Charts from './Charts/Charts';

class Analytics extends Component {
    render() {
        return (
            <div>
                <h1>Analytics</h1>
                <Bedges clients={this.props.clients} />
                <Charts clients={this.props.clients} />
            </div>
        )
    }
}

export default Analytics
