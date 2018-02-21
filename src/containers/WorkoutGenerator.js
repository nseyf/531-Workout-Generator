import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createWorkout,
  changeUnit,
  setBench,
  setDeadlift,
  setSquat,
  setOHP
} from '../actions/actions';
import ShowWorkout from '../components/ShowWorkout';


class WorkoutGenerator extends Component {

  render() {
    
  const {
    benchPress,
    createWorkout,
    overHeadPress,
    deadlift,
    squat,
    setBench,
    setDeadlift,
    setSquat,
    setOHP,
    workout,
    months, } = this.props;

    return (
      <div className="container">

      <div className="workout-controls">

      <h1 className="title">
      5-3-1 Generator
      </h1>

      <h2> To begin, enter your 1RM (One Rep Max) for the following lifts:
      </h2>

      <div className="workout-inputs">
      <input placeholder="0"
      onChange={setBench}
      value={benchPress}
      />
    <button
    onClick={() => {
    createWorkout({
      benchPress,
      overHeadPress,
      deadlift,
      squat},
      months);
    }}>Create Workout</button>

    </div>

      </div>

      <ShowWorkout workout={workout}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    benchPress: state.benchPress,
    overHeadPress: state.overHeadPress,
    squat: state.squat,
    deadlift: state.deadlift,
    unit: state.unit,
    workout: state.workout,
    months: state.months,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createWorkout,
    changeUnit,
    setBench,
    setSquat,
    setDeadlift,
    setOHP,
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutGenerator)
