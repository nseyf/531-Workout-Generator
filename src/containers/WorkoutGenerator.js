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
      overHeadPress: '',
      months: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: parseInt(value, 10) ? parseInt(value, 10): 0
    })
  }

  render() {


  const {
    createWorkout,
    workout,
   } = this.props;

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
      onClick={()=> {this.setState({benchPress: ''})}}
      value={this.state.benchPress}
      name="benchPress"
      />
      <p>Deadlift</p>
      <input placeholder="0"
      onChange={this.handleChange}
      onClick={()=> {this.setState({deadlift: ''})}}
      value={this.state.deadlift}
      name="deadlift"
      />
      <p>Overhead Press</p>
      <input placeholder="0"
      onChange={this.handleChange}
      onClick={()=> {this.setState({overHeadPress: ''})}}
      value={this.state.overHeadPress}
      name="overHeadPress"
      />
      <p>Squat</p>
      <input placeholder="0"
      onChange={this.handleChange}
      onClick={()=> {this.setState({squat: ''})}}
      value={this.state.squat}
      name="squat"
      />
      <p>Months</p>
      <input placeholder="0"
      onChange={this.handleChange}
      onClick={()=> {this.setState({months: ''})}}
      value={this.state.months}
      name="months"
      />
    <button
    onClick={() => {
    createWorkout(
      this.state
    );
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
    unit: state.unit,
    workout: state.workout,
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
