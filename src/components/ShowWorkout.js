import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;

// When done, remember to come back and implement
// a recursive solution. Do not repeat code.

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

  const weeks = Object.keys(month)
  .map((e, i) => {
    const week = month[e];
    if(e !== "id") {
      return <div
      className="week-block"
      key={i}>
      <h5>Week {e}</h5>
        {
          Object.keys(week)
          .map(
            (x, y) => {

              const exercise = week[x];

              return <ul className="set-list" key={exercise}>

              <p>{exerciseName(exercise)}</p>

              <li className="set">{exercise[1]}</li>
              <li className="set">{exercise[2]}</li>
              <li className="set">{exercise[3]}</li>

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

  // Transform workout object into JSX here

  return (
    <div className="workout-container">
    {createWorkout}
    </div>
  )

}


export default ShowWorkout;
