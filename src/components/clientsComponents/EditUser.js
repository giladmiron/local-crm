import React, { Component } from 'react'

class EditUser extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surName: "",
            country: "",
        }
    }

    handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        this.setState({
            [name]: value
        })
    }

    update = () => {
        this.props.update(
            this.props.user.email,
            this.state.name || this.props.user.name.split(" ")[0],
            this.state.surName || this.props.user.name.split(" ")[1],
            this.state.country || this.props.user.country)
    }

    render() {
        return (
            <div className="edit">
                <span className="exit" onClick={this.props.exitWin}>X</span>
                <div className="editName"> First Name: <input type="text" name="name" value={this.state.name} placeholder={this.props.user.name.split(" ")[0]} onChange={this.handleChange} /> </div>
                <div className="editSurName">Last Name: <input type="text" name="surName" value={this.state.surName} placeholder={this.props.user.name.split(" ")[1]} onChange={this.handleChange} /></div>
                <div className="editCountry">Country: <input type="text" name="country" value={this.state.country} placeholder={this.props.user.country} onChange={this.handleChange} /></div>
                <button onClick={this.update}>Update!</button>
            </div>
        )
    }
}

export default EditUser
