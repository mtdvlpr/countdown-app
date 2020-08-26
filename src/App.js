import React from 'react';
import Countdown from './components/Countdown';
import AddDate from './components/AddDate';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now()
    };
  }

  handleChange = (date) => {
    const newDate = new Date(date);
    this.setState({date: newDate});
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Countdown</h1>
        <AddDate 
          date={this.state.date} 
          onChange={this.handleChange} />
        <Countdown timeTillDate={this.state.date} />
      </div>
    );
  }
}

export default App;
