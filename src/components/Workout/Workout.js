import React from 'react';
import "./Workout.css"
const Workout = ({ exercise }) => {
    return (
        <div className='exercise-item-cart'>
            <img src={exercise.img} alt="" />
            <h2>{exercise.category}</h2>
            <p>{90 > exercise.benifit.length ? exercise.benifit.slice(0, 90) : exercise.benifit}</p>
            <h5>Time: {exercise.time}</h5>
            <button type='button'>Add To List</button>
        </div>
    );
};

export default Workout;