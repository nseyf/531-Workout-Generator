export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const CHANGE_UNIT = "CHANGE_UNIT";

// Use a createWorkout function and call that for the duration of the month array.



// Create workout object
export const createWorkout = (data) => {


const createMonths = (data) => {

  const workout = [];

  let {
    benchPress,
    overHeadPress,
    squat,
    deadlift,
    months
  } = data;

    // Create months for length equal to month entry
      for(var i=0; i < months; i++) {

        const month = {
          id: i,
          // First Week
          1: {
            benchPressSets: {
              1: `${Math.round(benchPress / 100 * 65)} X 5`,
              2: `${Math.round(benchPress / 100 * 75)} X 5`,
              3: `${Math.round(benchPress / 100 * 85)} X 5+`
            },
            overHeadPressSets: {
              1: `${Math.round(overHeadPress / 100 * 65)} X 5`,
              2: `${Math.round(overHeadPress / 100 * 75)} X 5`,
              3: `${Math.round(overHeadPress / 100 * 85)} X 5+`
            },
            squatSets: {
              1: `${Math.round(squat / 100 * 65)} X 5`,
              2: `${Math.round(squat / 100 * 75)} X 5`,
              3: `${Math.round(squat / 100 * 85)} X 5+`
            },
            deadliftSets: {
              1: `${Math.round(deadlift / 100 * 65)} X 5`,
              2: `${Math.round(deadlift / 100 * 75)} X 5`,
              3: `${Math.round(deadlift / 100 * 85)} X 5+`
            },
          },
          // Second Week
          2: {
            benchPressSets: {
              1: `${Math.round(benchPress / 100 * 70)} X 3`,
              2: `${Math.round(benchPress / 100 * 80)} X 3`,
              3: `${Math.round(benchPress / 100 * 90)} X 3+`
            },
            overHeadPressSets: {
              1: `${Math.round(overHeadPress / 100 * 70)} X 3`,
              2: `${Math.round(overHeadPress / 100 * 80)} X 3`,
              3: `${Math.round(overHeadPress / 100 * 90)} X 3+`
            },
            squatSets: {
              1: `${Math.round(squat / 100 * 70)} X 3`,
              2: `${Math.round(squat / 100 * 80)} X 3`,
              3: `${Math.round(squat / 100 * 90)} X 3+`
            },
            deadliftSets: {
              1: `${Math.round(deadlift / 100 * 70)} X 3`,
              2: `${Math.round(deadlift / 100 * 80)} X 3`,
              3: `${Math.round(deadlift / 100 * 90)} X 3+`
            },
          },
          // Third Week
        3: {
            benchPressSets: {
            1: `${Math.round(benchPress / 100 * 75)} X 5`,
            2: `${Math.round(benchPress / 100 * 85)} X 3`,
            3: `${Math.round(benchPress / 100 * 95)} X 1+`
          },
            overHeadPressSets: {
            1: `${Math.round(overHeadPress / 100 * 75)} X 5`,
            2: `${Math.round(overHeadPress / 100 * 85)} X 3`,
            3: `${Math.round(overHeadPress / 100 * 95)} X 1+`
          },
            squatSets: {
            1: `${Math.round(squat / 100 * 75)} X 5`,
            2: `${Math.round(squat / 100 * 85)} X 3`,
            3: `${Math.round(squat / 100 * 95)} X 1+`
          },
            deadliftSets: {
            1: `${Math.round(deadlift / 100 * 75)} X 5`,
            2: `${Math.round(deadlift / 100 * 85)} X 3`,
            3: `${Math.round(deadlift / 100 * 95)} X 1+`
          },
        },
        // Fourth week
      4: {
        benchPressSets: {
        1: `${Math.round(benchPress / 100 * 40)} X 5`,
        2: `${Math.round(benchPress / 100 * 50)} X 5`,
        3: `${Math.round(benchPress / 100 * 60)} X 5+`
      },
        overHeadPressSets: {
        1: `${Math.round(overHeadPress / 100 * 40)} X 5`,
        2: `${Math.round(overHeadPress / 100 * 50)} X 5`,
        3: `${Math.round(overHeadPress / 100 * 60)} X 5+`
      },
        squatSets: {
        1: `${Math.round(squat / 100 * 40)} X 5`,
        2: `${Math.round(squat / 100 * 50)} X 5`,
        3: `${Math.round(squat / 100 * 60)} X 5+`
      },
        deadliftSets: {
        1: `${Math.round(deadlift / 100 * 40)} X 5`,
        2: `${Math.round(deadlift / 100 * 50)} X 5`,
        3: `${Math.round(deadlift / 100 * 60)} X 5+`
      },
      }
  }
// Push completed month to workout array
  workout.push(month);
// Increment max weights for progress of exercise
  benchPress += 5;
  overHeadPress += 5;
  squat += 10;
  deadlift += 10;

}

return workout;
}

  return {
    type: CREATE_WORKOUT,
    payload: {
      workout: createMonths(data),
    }

  }

}

// Change unit of measurement
export const changeUnit = (unit) => {
  return {
    type: CHANGE_UNIT,
    payload: unit
  }
}
