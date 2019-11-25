import React, { Component } from 'react'
import axios from 'axios'

class MonthBedge extends Component {
    constructor() {
        super()
        this.state = {
            numberOfNewClients: 0
        }
    }

    componentDidMount = async () => {
        let data = await axios.get('http://localhost:8000/monthclients')
        this.setState({
            numberOfNewClients: data.data.length
        })
    }

    render() {
        return (
            <div className="bedge">
                <div className="circle one"><i class="fas fa-chart-line"></i></div>
                <div className="data">
                    <h2>{this.state.numberOfNewClients}</h2>
                    <h4>New clients in the last 30 days</h4>
                </div>
            </div>
        )
    }
}

export default MonthBedge
