import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import {
  createWorkout,
  changeUnit,
  setOneRep
} from '../actions/actions';
import ShowWorkout from '../components/ShowWorkout';

// Need Squat, Deadlift, Overhead Press, Bench Press

class WorkoutGenerator extends Component {
  render() {

  const { 
    benchPress, 
    overHeadPress, 
    deadlift, 
    squat, 
    setOneRep, 
    workout, 
    months } = this.props;
    
    return (
      <div className="container">
      <div className="workout-controls">
      <h1 className="title">
      5-3-1 Generator 
      </h1>
      <h2> To begin, enter your 1RM (One Rep Max) for the following lifts:
      </h2>
      <div className="workout-inputs">
    <label>Bench Press: </label>
    <input placeholder={benchPress} value={benchPress} onChange={setOneRep}/>
    <br />
    <label>Overhead Press: </label>
    <input value={overHeadPress}/>
    <br />
    <label>Deadlift: </label>
    <input value={deadlift}/>
    <br />
    <label>Squat: </label>
    <input value={squat}/>
    <button 
    onClick={() => {
      createWorkout({
        benchPress, 
        overHeadPress, 
        deadlift, 
        squat, 
        months
      })}}>Create Workout</button>
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
    setOneRep
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutGenerator)