import {
  CREATE_WORKOUT,
  CHANGE_UNIT,
  SET_BENCH,
  SET_SQUAT,
  SET_DEADLIFT,
  SET_OHP
} from '../actions/actions';


const initialState = {
  benchPress: 100,
  overHeadPress: 200,
  squat: 150,
  deadlift: 220,
  unit: 'lbs',
  workout: [],
  months: 1
}


export const WorkoutGenerator = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_WORKOUT:
    return Object.assign({}, state, {
      workout: action.payload
    });
    case SET_BENCH:
    return Object.assign({}, state, {
      benchPress: action.payload
    })
    case SET_DEADLIFT:
    return Object.assign({}, state, {
      deadlift: action.payload
    })
    default:
    return state;
  }
}
