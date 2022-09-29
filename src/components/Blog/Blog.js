import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog'>
                <h2>How does React Work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='blog'>
                <h2>Whats the difference between State and Props ?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className='blog'>
                <h2>Whats the Usecase of useEffect ?</h2>
                <p>Add an event listener for a button.
                    Data fetching from API when component mounts.
                    Perform an action when state or props change.
                    Clean up event listeners when the component unmounts.</p>
            </div>
        </div>
    );
};

export default Blog;