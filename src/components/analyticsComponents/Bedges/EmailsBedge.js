import React, { Component } from 'react'

class EmailsBedge extends Component {

    render() {
        let emailsNum = 0
        this.props.clients.filter(c => c.emailType).map(c => emailsNum++)
        return (
            <div className="bedge" >
                <div className="circle two"><i class="fas fa-envelope"></i></div>
                <div className="data">
                    <h2>{emailsNum}</h2>
                    <h4>Emails sent</h4>
                </div>
            </div>
        )
    }
}

export default EmailsBedge




