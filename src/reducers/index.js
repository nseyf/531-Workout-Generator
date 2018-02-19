import { 
  CREATE_WORKOUT,
  CHANGE_UNIT,
  SET_ONEREP
} from '../actions/actions';


const initialState = {
  benchPress: 0,
  overHeadPress: 0,
  squat: 0,
  deadlift: 0,
  unit: 'lbs',
  workout: [],
  months: 0
}


export const WorkoutGenerator = (state = initialState, action) => {
  switch(action.type) {
    default:
    return state;
  }
}