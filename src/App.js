import React, { Component } from 'react';
import './App.css';
import WorkoutGenerator from './containers/WorkoutGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkoutGenerator />
      </div>
    );
  }
}

export default App;
