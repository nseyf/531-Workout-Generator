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
export const createWorkout = (exercises, months) => {

  // Week one is 65% x 5, 75% x 5, 85% x 5+
// Week two is 70% x 3, 80% x 3, 90% x 3+
// Week three is 75% x 5, 85% x 3, 95% x 1+
// Week four is 40% x 5, 50% x 5, 60% x 5

const createMonths = (exercises, months) => {

  const { benchPress, overHeadPress, squat, deadlift} = exercises;
  const workout = []


      for(var i=0; i < months; i++) {

        const month = {
          id: i,
          1: {
            benchPress: {
              1: `${benchPress / 100 * 65} X 5`,
              2: `${benchPress / 100 * 75} X 5`,
              3: `${benchPress / 100 * 85} X 5+`
            },
            overHeadPress: {
              1: `${overHeadPress / 100 * 65} X 5`,
              2: `${overHeadPress / 100 * 75} X 5`,
              3: `${overHeadPress / 100 * 85} X 5+`
            },
            squat: {
              1: `${squat / 100 * 65} X 5`,
              2: `${squat / 100 * 75} X 5`,
              3: `${squat / 100 * 85} X 5+`
            },
            deadlift: {
              1: `${deadlift / 100 * 65} X 5`,
              2: `${deadlift / 100 * 75} X 5`,
              3: `${deadlift / 100 * 85} X 5+`
            },
          },
          2: {
            benchPress: {
              1: `${benchPress / 100 * 70} X 3`,
              2: `${benchPress / 100 * 80} X 3`,
              3: `${benchPress / 100 * 90} X 3+`
            },
            overHeadPress: {
              1: `${overHeadPress / 100 * 70} X 3`,
              2: `${overHeadPress / 100 * 80} X 3`,
              3: `${overHeadPress / 100 * 90} X 3+`
            },
            squat: {
              1: `${squat / 100 * 70} X 3`,
              2: `${squat / 100 * 80} X 3`,
              3: `${squat / 100 * 90} X 3+`
            },
            deadlift: {
              1: `${deadlift / 100 * 70} X 3`,
              2: `${deadlift / 100 * 80} X 3`,
              3: `${deadlift / 100 * 90} X 3+`
            },
          },
        3: {
            benchPress: {
            1: `${benchPress / 100 * 75} X 5`,
            2: `${benchPress / 100 * 85} X 3`,
            3: `${benchPress / 100 * 95} X 1+`
          },
            overHeadPress: {
            1: `${overHeadPress / 100 * 75} X 5`,
            2: `${overHeadPress / 100 * 85} X 3`,
            3: `${overHeadPress / 100 * 95} X 1+`
          },
            squat: {
            1: `${squat / 100 * 75} X 5`,
            2: `${squat / 100 * 85} X 3`,
            3: `${squat / 100 * 95} X 1+`
          },
            deadlift: {
            1: `${deadlift / 100 * 75} X 5`,
            2: `${deadlift / 100 * 85} X 3`,
            3: `${deadlift / 100 * 95} X 1+`
          },
        },
      4: {
        benchPress: {
        1: `${benchPress / 100 * 40} X 5`,
        2: `${benchPress / 100 * 50} X 5`,
        3: `${benchPress / 100 * 60} X 5+`
      },
        overHeadPress: {
        1: `${overHeadPress / 100 * 40} X 5`,
        2: `${overHeadPress / 100 * 50} X 5`,
        3: `${overHeadPress / 100 * 60} X 5+`
      },
        squat: {
        1: `${squat / 100 * 40} X 5`,
        2: `${squat / 100 * 50} X 5`,
        3: `${squat / 100 * 60} X 5+`
      },
        deadlift: {
        1: `${deadlift / 100 * 40} X 5`,
        2: `${deadlift / 100 * 50} X 5`,
        3: `${deadlift / 100 * 60} X 5+`
      },
      }
  }
  workout.push(month);
}

return workout;
}


  return {
    type: CREATE_WORKOUT,
    payload: createMonths(exercises, months)
  }

}

// Change unit of measurement
export const changeUnit = (unit) => {
  return {
    type: CHANGE_UNIT,
    payload: unit
  }
}
