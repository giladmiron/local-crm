import React, { Component } from 'react'
import TopEmployees from './TopEmployees'
import SalesByCountry from './SalesByCountry'
import ClientAcqusition from './ClientAcqusition'
import axios from 'axios'

class Charts extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount = async () => {
        let lastMonth = await axios.get('http://localhost:8000/monthclients')
        lastMonth = lastMonth.data.length
        let lastYear = await axios.get('http://localhost:8000/lastyear')
        lastYear = lastYear.data.length
        let lessThanAYear = await axios.get('http://localhost:8000/lessthahayear')
        lessThanAYear = lessThanAYear.data.length
        this.setState({
            data:   [{ name: 'lastMonth', value: lastMonth }, { name: 'lastYear', value: lastYear }, { name: 'lessThanAYear', value: lessThanAYear }]
        })
    }
    render() {
        return (
            <div>
                <h1>Top three employees</h1>
                <div className="charts">
                    <TopEmployees clients={this.props.clients} />
                    <SalesByCountry clients={this.props.clients} />
                    <ClientAcqusition data={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Charts
