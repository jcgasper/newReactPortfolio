import React from 'react'
import './about.css';

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
          <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg" alt="" className="a-img" />
      </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a former Financial Cost Analyst with an academic background in Business Management. However I have always had
          a passion for computers since a child, and decided to make a career change. Prior to the 2020 pandemic I enrolled in The Ohio State University to pursue a Bachelors Degree in Computer Science.
          Once the pandemic hit I felt an urgency to quickly get working, and decided to pursue a Web Development Bootcamp provided by The Ohio State University.
        </p>
        <p className="a-desc">
          At The Ohio State University I took introductory Computer Science classes giving me solid fundementals in Computer Science, and Java programming. Over the course of the six month Web Developemnt Bootcamp,
          I expanded upon this knowledge. Learning HTML, CSS, Javascript, Node, SQL, React, and more. Utilizing these technologies to create various websites and web applications.

        </p>
        
      </div>
    </div>
  )
}

export default About
