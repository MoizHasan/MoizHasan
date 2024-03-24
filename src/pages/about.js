import React from 'react'
import avatar from './avatar.png'
import Layout from "../components/layout"

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

const About = () => (
<div>
<Layout>
  <div className='leftPanel' style = {leftPanel} >
    <h1>About Me</h1>
    <img src={avatar} alt="avatar" width="300px" />
    <a href='../Hasan_Resume.pdf' target="_blank" style = {resumeLink} >Download Resume</a>
  </div>
 <div className='rightPanel' style = {rightPanel} >
<h4>I am a Full Stack Web Developer with over five years of industry experience based in the Twin Cities.
  I enjoy wearing many hats and getting to work with new technologies. 
 When not in front of a computer I enjoy going to concerts, playing pickleball and cardgames.
 </h4>
 </div>
 </Layout>
</div>
);
export default About;