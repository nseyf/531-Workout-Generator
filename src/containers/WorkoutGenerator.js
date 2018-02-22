import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createWorkout,
  changeUnit,
} from '../actions/actions';
import ShowWorkout from '../components/ShowWorkout';


class WorkoutGenerator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      benchPress: '',
      deadlift: '',
      squat: '',
      overHeadPress: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: parseInt(value) ? parseInt(value): 0
    })
  }

  render() {


  const {
    benchPress,
    createWorkout,
    overHeadPress,
    deadlift,
    squat,
    workout,
    months, } = this.props;
    console.log(this.state);

    return (
      <div className="container">

      <div className="workout-controls">

      <h2 className="title">
      5-3-1 Generator
      </h2>

      <h3> To begin, enter your 1RM (One Rep Max) for the following lifts:
      </h3>

      <div className="workout-inputs">
      <p>Bench Press</p>
      <input placeholder="0"
      onChange={this.handleChange}
      value={this.state.benchPress}
      name="benchPress"
      />
      <p>Deadlift</p>
      <input placeholder="0"
      onChange={this.handleChange}
      value={this.state.deadlift}
      name="deadlift"
      />
      <p>Squat</p>
      <input placeholder="0"
      onChange={this.handleChange}
      value={this.state.squat}
      name="squat"
      />
      <p>Overhead Press</p>
      <input placeholder="0"
      onChange={this.handleChange}
      value={this.state.overHeadPress}
      name="overHeadPress"
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
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutGenerator)
