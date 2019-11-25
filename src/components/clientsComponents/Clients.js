
import React, { Component } from 'react'
import Client from './Client';
import TableHeader from './TableHeader'
import moment from 'moment'
import EditUser from './EditUser';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            inputVal: '',
            category: 'name',
            displayEditWin: false,
            user: "",
            page: 0
        }
    }

    changeSearchInputVal = (event) => {
        let value = event.target.value
        this.setState({
            inputVal: value,
            page: 0
        })
    }

    updateCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    updateUserDetails = (email, name, surName, country) => {
        this.setState({
            displayEditWin: false
        })
        this.props.update(email, name, surName, country)
    }

    openUserUpdateWindow = (email) => {
        let userToUpdate = this.props.clients.find(c => c.email == email)
        this.setState({
            displayEditWin: true,
            user: userToUpdate
        })
    }

    exitWin = () => {
        this.setState({
            displayEditWin: false
        })
    }

    next = () => {
        this.setState({
            page: this.state.page + 14
        })
    }

    previous = () => {
        if (this.state.page - 14 < 0) {
            return
        }
        this.setState({
            page: this.state.page - 14
        })
    }

    render() {
        return (
            <div id='clients-page'>
                <div className="search-area">
                    <input id="search" type="text" value={this.state.inputVal} placeholder="search" onChange={this.changeSearchInputVal} />
                    <select id="select-input" onChange={this.updateCategory}>
                        <option value="name">Name</option>
                        <option value="country">Country</option>
                        <option value="owner">Owner</option>
                    </select>
                    <span onClick={this.previous}><i class="fas fa-arrow-left" id="arrow2"></i></span>
                    <span> {this.state.page + 1} - {this.state.page + 14}</span>
                    <span onClick={this.next}><i class="fas fa-arrow-right" id="arrow1"></i></span>
                </div>
                {this.state.displayEditWin ? <EditUser user={this.state.user} update={this.updateUserDetails} exitWin={this.exitWin} /> : null}
                <TableHeader />
                {this.props.clients.filter(c => c[this.state.category]
                    .toLowerCase().includes(this.state.inputVal.toLowerCase())).splice(this.state.page, 14)
                    .map(c => <Client key={c.email}
                        openUserUpdateWindow={this.openUserUpdateWindow}
                        name={c.name}
                        country={c.country}
                        firstContact={moment(c.firstContact).format('MM/DD/YYYY')}
                        emailType={c.emailType == null ? "-" : c.emailType}
                        sold={c.sold ? 'V' : 'X'}
                        owner={c.owner}
                        email={c.email}
                    />)}
            </div>
        )
    }
}

export default Clients