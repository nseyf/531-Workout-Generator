import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;


// to get the first set of the first week of BP
// console.log(workout[0][1].benchPress[1])



const createWorkout = (month) => {
  console.log(month)
}
  // Transform workout object into JSX here

  return (
    <div className="workout-container">{workout.map(createWorkout)}</div>
  )


}
export default ShowWorkout;
