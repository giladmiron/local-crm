import React, { Component } from 'react'

class TableHeader extends Component {
    render() {
        return (
            <div className="tableHeader">
                <div>Name</div>
                <div>Last name</div>
                <div>Country</div>
                <div>First Contact</div>
                <div>Email Type</div>
                <div>Sold</div>
                <div>Owner</div>
            </div>
        )
    }
}

export default TableHeader
