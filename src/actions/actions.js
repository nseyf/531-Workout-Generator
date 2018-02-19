export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const CHANGE_UNIT = "CHANGE_UNIT";
export const SET_ONEREP = "SET_ONEREP"

// Use a createWorkout function and call that for the duration of the month array.

// Control input for max rep
export const setOneRep = (exercise, weight) => {
  
  const newOneRepMax = {
    exercise: weight
  }
  return {
    type: SET_ONEREP,
    payload: newOneRepMax
  }
}

// Create workout object
export const createWorkout = (exercises) => {
  
  // Week one is 65% x 5, 75% x 5, 85% x 5+
// Week two is 70% x 3, 80% x 3, 90% x 3+
// Week three is 75% x 5, 85% x 3, 95% x 1+
// Week four is 40% x 5, 50% x 5, 60% x 5
  
const { benchPress, overHeadPress, squat, deadlift, months } = exercises;

  return {
    type: CREATE_WORKOUT,
    payload: exercises
  }
}

// Change unit of measurement
export const changeUnit = (unit) => {
  return {
    type: CHANGE_UNIT,
    payload: unit
  }
}