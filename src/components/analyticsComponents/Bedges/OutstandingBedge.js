import React, { Component } from 'react'

class OutStandingBedge extends Component {

    render() {
        let outStandingNum = 0
        this.props.clients.filter(c => c.sold===false).map(c => outStandingNum++)
        return (
            <div className="bedge" >
                <div className="circle four"> <i class="fas fa-user-circle"></i></div>
                <div c las sName="data">
                    <h2>{outStandingNum}</h2>     
                    <h4>Outstanding clients</h4>
                </div >
           </div>
        )
    }
}
export default OutStandingBedge