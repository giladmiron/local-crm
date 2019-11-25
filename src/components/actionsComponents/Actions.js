import React, { Component } from 'react'
import AddClient from './AddClient';
import UpdateClient from './UpdateClient';

class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <UpdateClient clients={this.props.clients} transferChange={this.props.transferChange} emailTypeChange={this.props.emailTypeChange} declareChange={this.props.declareChange} />
                <AddClient addClient={this.props.addClient} />
            </div>
        )
    }
}

export default Actions
