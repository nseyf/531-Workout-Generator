export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const CHANGE_UNIT = "CHANGE_UNIT";

export const createWorkout = (data) => {
  return {
    type: CREATE_WORKOUT,
    payload: data
  }
}

export const changeUnit = (unit) => {
  return {
    type: CHANGE_UNIT,
    payload: unit
  }
}