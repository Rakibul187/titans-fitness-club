import React from 'react';
import "./Workout.css"
const Workout = ({ exercise, handleAddTime }) => {
    const { img, category, benifit, time } = exercise
    return (
        <div className='exercise-item-cart'>
            <img src={img} alt="" />
            <h2>{category}</h2>
            <p>{benifit}</p>
            <h5>Time: {time}</h5>
            <button onClick={() => handleAddTime(time)} type='button'>Add To List</button>
        </div>
    );
};

export default Workout;