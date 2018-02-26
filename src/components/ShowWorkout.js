import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;


// to get the first set of the first week of BP


// When done, remember to come back and implement
// a recursive solution. Do not repeat code.


/*
const createWorkout = (month) => {
  Object.keys(month)
  .map(week =>
    Object.keys(month[week])
    .map(exercise => {
      const sets = month[week][exercise];
        console.log(sets[1])
    return <li>`${sets[1]}, ${sets[2]}, ${sets[3]}`</li>
    })
)

}
*/

const createWorkout = workout.map((month) => {
  const weeks = Object.keys(month).map((e, i) => {
    return <div key={i}>{e}</div>
  })
  return <div key={month.id} className="month-block">
  <h4>Month {month.id + 1}</h4>
  {weeks}</div>
})

  // Transform workout object into JSX here

  return (
    <div className="workout-container">
    {createWorkout}
    </div>
  )

}


export default ShowWorkout;
