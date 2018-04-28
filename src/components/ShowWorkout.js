import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;

// exerciseName checks the week object
// and returns a relevant string
// to be displayed depending on which
// exercise the object refers to

const exerciseName = (exercise) => {
  switch(exercise) {
    case "benchPressSets":
    return "Bench Press";
    case "deadliftSets":
    return "Deadlift";
    case "squatSets":
    return "Squat";
    case "overHeadPressSets":
    return "Overhead Press";
    default:
    return;
  }
}

const createWorkout = workout.map((month) => {

  // The createWorkout function maps over the month array
  // For each month, a weeks object is created
  const weeks = Object.keys(month).map((e, i) => {

    // Then each week is iterated over to produce the
    // appropriate values
    const week = month[e];

    if(e !== "id") {
      // Returns a div containing the exercises
      // and sets for that week
      return <div
      className="week-block"
      key={i}>
      <h5>Week {e}</h5>
        {
          // Within each week div, map over the Object
          // To produce JSX corresponding to the relevant
          // exercise and set
          Object.keys(week)
          .map(
            (key, index) => {

              const exercise = week[key];

              return <ul
              className="set-list"
              key={exercise}>

              <p
              className="exercise-name">
              {exerciseName(key)}</p>

              <li
              className="set">{exercise[1]}</li>
              <li
              className="set">{exercise[2]}</li>
              <li
              className="set">{exercise[3]}</li>

      </ul>
    }
  )
}
    </div>

  }
})

  return <div
  key={month.id}
  className="month-block">
  <h4 className="month-title">
  Month {month.id + 1}
  </h4>
  {weeks}
  </div>
}
)

  return (
    <div className="workout-container">
    {createWorkout}
    </div>
  )

}


export default ShowWorkout;
