import React, { Component } from 'react'

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            surName: "",
            email: "",
            country: "",
            owner: "",
        }
    }

    handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        this.setState({
            [name]: value
        })
    }

    addClient = () => {
        if (this.state.firstName == "" || this.state.surName == "" || this.state.country == "" || this.state.owner == "" || this.state.email == "") {
            alert('you must fill all the fields')
            return
        }
        this.props.addClient(this.state.firstName, this.state.surName, this.state.email, this.state.country, this.state.owner)
    }

    render() {
        return (
            <div className="insertNewUser">
                <h1>Insert new user</h1>
                <div>First Name: <input type="text" placeholder="Type your first name" value={this.state.name} name="firstName" onChange={this.handleChange}></input></div>
                <div>Surname: <input type="text" placeholder="Type your last name" value={this.state.surName} name="surName" onChange={this.handleChange}></input></div>
                <div>Email: <input type="text" placeholder="Type your email" value={this.state.email} name="email" onChange={this.handleChange}></input></div>
                <div>Country: <input type="text" placeholder="Type country" value={this.state.Country} name="country" onChange={this.handleChange}></input></div>
                <div>Owner: <input type="text" placeholder="Type owner" value={this.state.Owner} name="owner" onChange={this.handleChange}></input></div>
                <div onClick={this.addClient} className="check"><i class="fas fa-check-circle"></i></div>
            </div>
        )
    }
}

export default AddClient
