import React from 'react'
import Layout from "../components/layout"
import ProjectList from '../components/ProjectList'
import Calculator from "../components/calculator/Calculator"

const projects = [   

  {
    title: "Random Quote Machine",
    description: "Random Quote Generator built with React and the Wiki Media API",
    href: 'https://github.com/MoizHasan/random-quote-generator',
    demo: "portfolio/random-quote-generator",
  },

  {
    title: "Pomodoro Timer", 
    description: "Timer built with React to help you apply the Pomodoro method and be more productive!",
    href: "https://github.com/MoizHasan/pomodoro-timer",
    demo: "portfolio/pomodoro-timer-demo",
  },

  {
    title: "Calculator",
    description: "Calculator built using React",
    href: "https://github.com/MoizHasan/Calculator",
    demo: "portfolio/calculator-demo",
  },

  {
  	title: "Mine Sweeper",
  	description: "Mine Sweeper clone made in JavaScript. Allows for custom grid size.",
  	href: 'https://github.com/MoizHasan/minesweeper',
  },

  {
  	title: "Location Finder",
  	description: "Simple Location viewer that lets you look at any lat long using the google maps API",
  	href: 'https://github.com/MoizHasan/Maps-Api', 
  }, 

     {
    title: "MoizHasan.com",
    description: "My personal website, built with GatsbyJS.",
    href: 'https://github.com/MoizHasan/MoizHasan'
   }
]



export default class Portfolio extends React.Component {
render() {

return (
  <Layout>
	<div>
	<h1>Projects</h1>
	<ProjectList projects={projects} />
  </div>
  </Layout>
	);
}
}