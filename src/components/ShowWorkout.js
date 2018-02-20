import React from 'react';


const ShowWorkout = (data) => {

  const { workout } = data;
console.log(workout);


// to get the first set of the first week of BP
// console.log(data.workout[0][1].benchPress[1])


const createWeek = (week) => {


}

const createWorkout = (month) => {
  for (var week in month) {
    createWeek(week);
  }
}
  // Transform workout object into JSX here


  return (
    <div className="workout-container">{workout.map(createWorkout)}</div>
  )


}
export default ShowWorkout;
