import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;


// to get the first set of the first week of BP


// When done, remember to come back and implement
// a recursive solution. Do not repeat code.

const createSets = (exercises) => {
  for(var set in exercises) {
    return <p>exercises[set]</p>
  }
}


const createWeek = (week) => {

  for(var exercises in week) {
    createSets(week[exercises])
  }
}

const createWorkout = (month) => {
  console.log(month)
    for(var week in month) {
      return (
      <div className="month-block" key={month.id}>
      {createWeek(month[week])}
      </div>
    )
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
