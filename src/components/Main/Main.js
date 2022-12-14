import './Main.css'
import logo from "../../pexels.webp"
import { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import { ToastContainer, toast } from 'react-toastify';
const Main = () => {
    const [exercise, setExercise] = useState([]);
    const [time, setTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0)
    const handleBreakTime = (breakTim) => {
        setBreakTime(breakTim)
        localStorage.setItem('time', breakTim)
    }
    useEffect(() => {
        const newTime = localStorage.getItem('time')
        setBreakTime(newTime)
    }, [time])
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    })

    const diffToast = () => {

        toast('wow congratulation you are done')
    }
    const handleAddTime = (getTime) => {
        const totalTime = time + getTime;
        setTime(totalTime)
    }
    return (
        <div className='main-container'>
            <div>
                <h2 className='workout-heading'>Select Today's Exercise</h2>
                <div className='exercise-container'>
                    {exercise.map(exerciseItem => <Workout key={exerciseItem.list} handleAddTime={handleAddTime} exercise={exerciseItem}></Workout>)}
                </div>
            </div>
            <div className='cart-summery'>
                <div className='personal-info'>
                    <div className='name-location-img'>
                        <img className="personal-img" src={logo} alt="" />
                        <div>
                            <h3>Rakibul Islam Rakib</h3>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='per-data-container'>
                        <div>
                            <h3 className='per-data-up'><span>63<small className='per-fade-data'>kg</small></span></h3>
                            <h2 className='per-data-down'><small className='per-fade-data'>Weight</small></h2>
                        </div>
                        <div>
                            <h3 className='per-data-up'><span>5.7<small className='per-fade-data'>feet</small></span></h3>
                            <h2 className='per-data-down'><small className='per-fade-data'>Height</small></h2>
                        </div>
                        <div>
                            <h3 className='per-data-up'><span>24<small className='per-fade-data'>Years</small></span></h3>
                            <h2 className='per-data-down'><small className='per-fade-data'>Age</small></h2>
                        </div>
                    </div>
                </div>
                <div className='break-container'>
                    <h3>Add A Break</h3>
                    <div className='break-btn-container'>
                        <button onClick={() => handleBreakTime(5)} className='break-time-btn'>5m</button>
                        <button onClick={() => handleBreakTime(10)} className='break-time-btn'>10m</button>
                        <button onClick={() => handleBreakTime(15)} className='break-time-btn'>15m</button>
                        <button onClick={() => handleBreakTime(20)} className='break-time-btn'>20m</button>
                        <button onClick={() => handleBreakTime(25)} className='break-time-btn'>25m</button>
                    </div>
                </div>
                <div className='exercise-details'>
                    <h2>Exercise details</h2>
                    <div>
                        <h3 className='break-exercise'><span>Exercise time</span> <span className='break-exercise-time'>{time} minutes</span></h3>
                        <h3 className='break-exercise'><span>Break time</span> <span className='break-exercise-time' >{breakTime ? breakTime : 0} minutes</span></h3>
                    </div>
                </div>
                <div><button onClick={diffToast} className='activity-btn'>Activity Completed</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Main;