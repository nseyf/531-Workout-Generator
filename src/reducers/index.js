import {
  CREATE_WORKOUT,
  CHANGE_UNIT,
  SET_ONEREP
} from '../actions/actions';


const initialState = {
  benchPress: 100,
  overHeadPress: 120,
  squat: 100,
  deadlift: 100,
  unit: 'lbs',
  workout: [],
  months: 8
}


export const WorkoutGenerator = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_WORKOUT:
    return Object.assign({}, state, {
      workout: action.payload
    });
    default:
    return state;
  }
}
