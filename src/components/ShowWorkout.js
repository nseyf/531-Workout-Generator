import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;


// to get the first set of the first week of BP


// When done, remember to come back and implement
// a recursive solution. Do not repeat code.

const createSet = (sets) => {
  return (
    <div>
  <p>{sets[1]}</p>
  <p>{sets[2]}</p>
  <p>{sets[3]}</p>
  </div>
)
}


const createWeek = (week) => {
  for(var exercise in week) {
    return (
      <div className="set-block" key={week[exercise]}>
      {createSet(week[exercise])}
      </div>
    )
  }
}

const createWorkout = (month) => {

    for(var week in month) {
      console.log(month[week])
      /* return (
  <div className="week-block" key={month[week]}>{createWeek(month[week])}</div>
) */
  }

}
  // Transform workout object into JSX here

  return (
    <div className="workout-container">
    {workout.map(createWorkout)}
    </div>
  )

}


export default ShowWorkout;
