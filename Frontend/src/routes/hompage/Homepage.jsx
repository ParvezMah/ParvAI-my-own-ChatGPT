import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='homePage'>
      <img src="../../../public/orbital.png" className='orbital' alt="" />
        <div className="left">
          <h1>PARV AI</h1>
          <h2>Supercharge your creativity and productivity</h2>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
            dolorem doloribus, architecto dolor.
          </h3>
          <Link to='/dashboard'>Get Started</Link>
        </div>
        <div className="right">
          <div className="imgContainer">
            <div className="bgContainer">
              <div className="bg"></div>
            </div>
            <img src="./bot.png" className='bot' alt="" />
          </div>
        </div>
    </div>
  )
}

export default Homepage