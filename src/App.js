import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Clients from './components/clientsComponents/Clients';
import Actions from './components/actionsComponents/Actions';
import Analytics from './components/analyticsComponents/Analytics';
import axios from 'axios'
import { async } from 'q';

class App extends Component {
  constructor() {
    super()
    this.state = {
      clientsData: [],
    }
  }

  componentDidMount = async () => {
    let data = await axios.get('http://localhost:8000/clients')
    this.setState({
      clientsData: data.data
    })
  }

  update = async (email, name, surName, country) => {
    let updateObj = { name, surName, country }
    await axios.put(`http://localhost:8000/client/${email}`, updateObj)
    this.componentDidMount()
  }

  addClient = async (firstName, subName, email, country, owner) => {
    let client = { name: `${firstName} ${subName}`, email, country, owner }
    await axios.post(`http://localhost:8000/client`, client)
    this.componentDidMount()
  }

  transferChange = async (email, owner) => {
    await axios.put(`http://localhost:8000/clienttransfer/${email}`, { owner })
    this.componentDidMount()
  }

  emailTypeChange = async (email, emailType) => {
    await axios.put(`http://localhost:8000/emailtypetransfer/${email}`, { emailType })
    this.componentDidMount()
  }

  declareChange = async (email) => {
    await axios.get(`http://localhost:8000/declareChange/${email}`)
    this.componentDidMount()
  }

  render() {
    return (<Router>
      <div className="App">
        <div id="home-background"></div>
        <div id="navBar">
          <Link to="/clients"><span className="navSpan">Clients</span></Link>
          <Link to="/actions"><span className="navSpan">Actions</span></Link>
          <Link to="/analytics"><span className="navSpan">analytics</span></Link>
        </div>
        <div id="routes">
          <Route path="/" render={() => (<Redirect to="/clients" />)} />
          <Route path="/clients" exact render={() => <Clients clients={this.state.clientsData} update={this.update} />} />
          <Route path="/actions" exact render={() => <Actions clients={this.state.clientsData} addClient={this.addClient} transferChange={this.transferChange} emailTypeChange={this.emailTypeChange} declareChange={this.declareChange} />}></Route>
          <Route path="/analytics" exact render={() => <Analytics clients={this.state.clientsData} />}></Route>
        </div>
      </div>
    </Router>
    )
  }
}

export default App;
