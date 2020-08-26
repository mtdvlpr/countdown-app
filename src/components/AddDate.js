import React, { Component } from 'react';

export default class AddDate extends Component {
    state = {
        value: this.formatDate(new Date())
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state.value);
    }

    onChange = (e) => {
        this.setState({value: e.target.value})
    }

    formatDate(date) {
        return date.getFullYear() + "-" + this.appendLeadingZeroes(date.getMonth() + 1) + "-" + this.appendLeadingZeroes(date.getDate()) + "T" + this.appendLeadingZeroes(date.getHours()) + ":" + this.appendLeadingZeroes(date.getMinutes());
    }

    appendLeadingZeroes(n){
        if(n <= 9){
          return "0" + n;
        }
        return n
      }

    render() {
        let maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="datetime-local"
                    min={this.formatDate(new Date())}
                    max={this.formatDate(maxDate)}
                    value={this.state.value}
                    onChange={this.onChange} required/>
                <input 
                    type="submit" value="START" />
            </form>
        )
    }
}
