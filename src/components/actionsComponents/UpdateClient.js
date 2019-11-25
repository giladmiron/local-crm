import React, { Component } from 'react'

class UpdateClient extends Component {
    constructor() {
        super()
        this.state = {
            client: "",
            owner: "",
            emailType: "",
            email: "",
            owners: {},
        }
    }

    updateClient = (event) => {
        this.setState({
            client: event.target.value,
        }, function () {
            this.updateEmail()
            console.log(this.state.client)
        })
    }

    updateEmail = () => {
        if (this.props.clients.find(c => c.name.toLowerCase() == this.state.client || c.name == this.state.client)) {
            let email = this.props.clients.find(c => c.name.toLowerCase() == this.state.client || c.name == this.state.client).email
            console.log(email)
            this.setState({
                email: email
            }, function () {
                console.log(this.state.email)
            })
        }
    }

    updateOwner = (event) => {
        this.setState({
            owner: event.target.value
        }, function () {
            console.log(this.state.owner)
        })
    }

    updateEmailType = (event) => {
        this.setState({
            emailType: event.target.value
        }, function () {
            console.log(this.state.emailType)
        })
    }

    insertOwners = () => {
        this.props.clients.map(c => this.state.owners[c.owner] ? null : this.state.owners[c.owner] = true)
    }

    userExistenceCheck = () => {
        if (this.state.email == '') {
            alert("you have to pick a client")
            return
        }
    }

    transferChange = () => {
        this.userExistenceCheck()
        this.props.transferChange(this.state.email, this.state.owner)
    }

    emailTypeChange = () => {
        this.userExistenceCheck()
        this.props.emailTypeChange(this.state.email, this.state.emailType)
    }

    declareChange = () => {
        this.userExistenceCheck()
        this.props.declareChange(this.state.email)
    }

    render() {
        this.insertOwners()
        return (
            <div className="updateUserArea">
                <h1>Update user</h1>
                <div>
                    Client: <datalist id="searchClient" onChange={this.updateClient}  >
                        {this.props.clients.map(c => <option value={c.name}>{c.name}</option>)}
                    </datalist>
                    <input autoComplete="on" list="searchClient" value={this.state.client} onChange={this.updateClient} />
                </div>
                <div>
                    Transfer ownership to: <datalist id="ownersList" onChange={this.updateOwner}>
                        {Object.keys(this.state.owners).map(o => <option value={o}>{o}</option>)}
                    </datalist>
                    <input autoComplete="on" list="ownersList" value={this.state.owner} onChange={this.updateOwner} />
                    <span onClick={this.transferChange}><i id="checkOne" class="fas fa-check-circle"></i></span>
                </div>
                <div>
                    Send email: <select id="emailType-input" onChange={this.updateEmailType}>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <option value='C'>C</option>
                        <option value='D'>D</option>
                        <option value="">no email</option>
                    </select>
                    <span onClick={this.emailTypeChange}><i id="checkTwo" class="fas fa-check-circle"></i></span>
                </div>
                <div>
                    Declare sale:
                    <span onClick={this.declareChange}><i id="checkThree" class="fas fa-check-circle"></i></span>
                </div>
            </div >
        )
    }
}

export default UpdateClient
