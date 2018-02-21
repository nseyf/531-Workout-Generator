import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;


// to get the first set of the first week of BP


// When done, remember to come back and implement
// a recursive solution. Do not repeat code.

const createWeek = (week) => {
  for(var exercise in week) {
    console.log(week[exercise])
  }
}


const createWorkout = (month) => {
  for(var week in month) {
    createWeek(month[week]);
  }
}
  // Transform workout object into JSX here

  return (
    <div className="workout-container">{workout.map(createWorkout)}</div>
  )


}
export default ShowWorkout;
