export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const CHANGE_UNIT = "CHANGE_UNIT";
export const SET_ONEREP = "SET_ONEREP"

// Need to account for number of months
// Use a createWorkout function and call that for the duration of the month array.


export const setOneRep = (exercise, weight) => {
  
  const newOneRepMax = {
    exercise: weight
  }
  return {
    type: SET_ONEREP,
    payload: newOneRepMax
  }
}

export const createWorkout = (exercises) => {
  
  // Week one is 65% x 5, 75% x 5, 85% x 5+
// Week two is 70% x 3, 80% x 3, 90% x 3+
// Week three is 75% x 5, 85% x 3, 95% x 1+
// Week four is 40% x 5, 50% x 5, 60% x 5
  
  /* const createMonth = (exercise) => {
  
  const monthWorkout = {
    1: {
      set1: `${(aMonthsMax / 100 * 65)} x 5`,
      set2: `${(aMonthsMax / 100 * 75)} x 5`,
      set3: `${(aMonthsMax / 100 * 85)} x 5+` 
    },
    2: {
      set1: `${(aMonthsMax / 100 * 70)} x 3`,
      set2: `${(aMonthsMax / 100 * 80)} x 3`,
      set3: `${(aMonthsMax / 100 * 90)} x 3+`
    },
    3: {
      set1: `${(aMonthsMax / 100 * 75)} x 5`,
      set2: `${(aMonthsMax / 100 * 85)} x 3`,
      set3: `${(aMonthsMax / 100 * 95)} x 1+`
    },
    4: {
      set1: `${(aMonthsMax / 100 * 40)} x 5`,
      set2: `${(aMonthsMax / 100 * 50)} x 5`,
      set3: `${(aMonthsMax / 100 * 60)} x 5+` 
    }
  }
  return monthWorkout;
} 
*/

  return {
    type: CREATE_WORKOUT,
    payload: exercises
  }
}

export const changeUnit = (unit) => {
  return {
    type: CHANGE_UNIT,
    payload: unit
  }
}