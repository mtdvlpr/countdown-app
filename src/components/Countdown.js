import React, { Component } from 'react';
import CountdownItem from './CountdownItem';

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            months: undefined,
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const then = new Date(this.props.timeTillDate);
            const now = new Date();
            let miliseconds = then.getTime() - now.getTime(); miliseconds = miliseconds < 0 ? 0 : miliseconds;
            const months = Math.floor(miliseconds / (1000 * 3600 * 24 * 30));
            miliseconds %= 1000 * 3600 * 24 * 30;
            const days = Math.floor(miliseconds / (1000 * 3600 * 24));
            miliseconds %= 1000 * 3600 * 24;
            const hours = Math.floor(miliseconds / (1000 * 3600));
            miliseconds %= 1000 * 3600;
            const minutes = Math.floor(miliseconds / 60000);
            miliseconds %= 60000;
            const seconds = Math.floor(miliseconds / 1000);

            this.setState({ months, days, hours, minutes, seconds });
        }, 1000);
    }


    
    render() {
        const { months, days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const monthsRadius = mapNumber(months, 13, 0, 0, 360);
        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        return (
            <div className="countdown-wrapper">
                <CountdownItem 
                    name={'months'}
                    timer={months}
                    radius={monthsRadius} />
                <CountdownItem 
                    name={'days'}
                    timer={days}
                    radius={daysRadius} />
                <CountdownItem 
                    name={'hours'}
                    timer={hours}
                    radius={hoursRadius} />
                <CountdownItem 
                    name={'minutes'}
                    timer={minutes}
                    radius={minutesRadius} />
                <CountdownItem 
                    name={'seconds'}
                    timer={seconds}
                    radius={secondsRadius} />
            </div>
        )
    }
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}
