import React, { Component } from 'react'
import MonthBedge from './MonthBedge';
import EmailsBedge from './EmailsBedge';
import OutStandingBedge from './OutstandingBedge';
import CountryBedge from './CountryBedge';

class Bedges extends Component {
    render() {
        return (
            <div className="bedges">
                <MonthBedge />
                <EmailsBedge clients={this.props.clients} />
                <OutStandingBedge clients={this.props.clients} />
                <CountryBedge clients={this.props.clients} />
            </div>
        )
    }
}

export default Bedges
