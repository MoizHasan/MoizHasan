import React from 'react'
import Link from 'gatsby-link'
import ProjectList from '../components/ProjectList'

const projects = [
  {
  	title: "Mine Sweeper",
  	description: "Mine Sweeper clone made in JavaScript. Allows for custom grid size.",
  	href: 'https://github.com/MoizHasan/minesweeper',
  },

  {
  	title: "Location Finder",
  	description: "Simple Location viewer that let's you look at any lat long using the google maps API",
  	href: 'https://github.com/MoizHasan/Maps-Api', 
  }
]



export default class Portfolio extends React.Component {
render() {

return (
	<div>
	<h1>Projects</h1>
	<ProjectList projects={projects} />
</div>
	);
}
}