import React, { Component } from 'react'
import './Template.css'
class Template extends Component {
    render() {
        return (
            <div className="image">
               <img src={this.props.info.url} />
               
            </div>
        )
    }
}

export default Template;