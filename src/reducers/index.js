import {
  CREATE_WORKOUT,
} from '../actions/actions';


const initialState = {
  unit: 'lbs',
  workout: [],
}


export const WorkoutGenerator = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_WORKOUT:
    return Object.assign({}, state, {
      workout: action.payload.workout
    });
    default:
    return state;
  }
}
