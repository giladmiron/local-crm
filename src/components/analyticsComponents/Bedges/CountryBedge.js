import React, { Component } from 'react'

class CountryBedge extends Component {

    getCountries = () => {
        let countries2 = {}
        this.props.clients.filter(m => m.sold).forEach(m => countries2[m.country] ? null : countries2[m.country] = 0)
        this.props.clients.filter(m => m.sold).forEach(m => countries2[m.country]++)
        return countries2
    }

    findCountry = (countries) => {
        let highest = Object.values(countries).sort(function (a, b) { return b - a })[0]
        for (let i of Object.keys(countries)) {
            if (countries[i] == highest) {
                return i
            }
        }
    }

    render() {
        let countries = this.getCountries()
        let country = this.findCountry(countries)
        return (
            <div className="bedge" >
                <div className="circle three"><i class="fas fa-globe-asia"></i></div>
                <div className="data">
                    <h2>{country}</h2>
                    <h4>Hottest country </h4>
                </div>
            </div>
        )
    }
}

export default CountryBedge
