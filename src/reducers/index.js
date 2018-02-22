import {
  CREATE_WORKOUT,
} from '../actions/actions';


const initialState = {
  benchPress: '',
  overHeadPress: '',
  squat: '',
  deadlift: '',
  unit: 'lbs',
  workout: [],
  months: 1
}


export const WorkoutGenerator = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_WORKOUT:
    return Object.assign({}, state, {
      benchPress: action.payload.benchPress,
      squat: action.payload.squat,
      overHeadPress: action.payload.overHeadPress,
      deadlift: action.payload.deadlift,
      workout: action.payload.workout
    });
    default:
    return state;
  }
}
