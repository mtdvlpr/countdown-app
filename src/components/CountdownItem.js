import React, { Component } from 'react';
import SVGCircle from './SVGCircle';

export default class CountdownItem extends Component {
    render() {
        return (
            <div className="countdown-item">
                <SVGCircle radius={this.props.radius} />
                {this.props.timer}
                <span>{this.props.name}</span>
            </div>
        )
    }
}
