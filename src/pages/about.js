import React from 'react'
import { Link } from 'gatsby'
import avatar from './avatar.jpg'

const leftPanel = {
	float: 'left',
	width: '23%',
	minWidth: '320px',
	marginRight: '10%',
}

const rightPanel = {
	display: 'inline-block',
	width: '50%',
	padding: '4.5rem 0',
	minWidth: '320px'
}

const resumeLink = {
	textDecoration: 'none',
	width: '300px',
	fontSize: '.85rem',
    textAlign: 'center',
    display: 'block',
    fontFamily: 'Helvetica, Arial, sans-serif',
    border: 'solid 1px #a4a4b4',
    color: 'black',
}

export default class About extends React.Component {
render() {

return (
<div>
  <div className='leftPanel' style = {leftPanel} >
    <h1>About Me</h1>
    <img src={avatar} alt="avatar" width="300px" />
    <a href='./Hasan_Resume.pdf' target="_blank" style = {resumeLink} >Download Resume</a>
  </div>
 <div className='rightPanel' style = {rightPanel} >
<p>I am a Full Stack Developer currently looking for my next challenge.
 As a developer, I have a year and a half of experience working with the LAMP stack. 
 I graduated from The University of St. Thomas with a degree in Computer Science in 2015.
 </p>
 <p>
 Shortly after graduating I decided to pursue web development and expanding my knowledge. 
 I enjoy attending local developer meetups and learning more about current technologies.
 </p>
 <p> 
 When not in front of a computer I enjoy going to concerts, playing tennis and boardgames.
 </p>
 </div>
</div>
);
}
}