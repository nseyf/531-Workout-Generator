import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import {
  createWorkout,
  changeUnit
} from '../actions/actions';
import ShowWorkout from '../components/ShowWorkout';

// Need Squat, Deadlift, Overhead Press, Bench Press

class WorkoutGenerator extends Component {
  render() {
    return (
      <div className="container">
      <div className="workout-controls">
      <h1 className="title">
      5-3-1 Generator 
      </h1>
      <h2> To begin, enter your 1RM (One Rep Max) for the following lifts:
      </h2>
    
      </div>
      
      <ShowWorkout />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    oneRepBP: state.oneRepBP,
    oneRepOHP: state.oneRepOHP,
    oneRepSQ: state.oneRepSQ,
    oneRepDL: state.oneRepDL,
    unit: state.unit,
    workout: state.workout
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createWorkout,
    changeUnit
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutGenerator)