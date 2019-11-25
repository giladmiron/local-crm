import React, { Component } from 'react'

class Client extends Component {
    constructor() {
        super()
        this.state = {
            category: "",
            value: ""
        }
    }
    openUserUpdateWindow = () => {
        this.props.openUserUpdateWindow(this.props.email)
    }

    render() {
        return (
            <div className="client" onClick={this.openUserUpdateWindow} >
                <div>{this.props.name.split(" ")[0]}</div>
                <div> {this.props.name.split(" ")[1]}</div>
                <div> {this.props.country}</div>
                <div> {this.props.firstContact}</div>
                <div> {this.props.emailType}</div>
                <div> {this.props.sold}</div>
                <div> {this.props.owner}</div>
            </div>
        )
    }
}

export default Client
