import React from 'react'
import { Link } from 'gatsby'
import ProjectItem from '../components/ProjectItem'

class ProjectList extends React.Component {
  render() {
    const {projects} = this.props; 

    return (
      <div>

        {projects.map((project) => (
          
            <ProjectItem key={project.title} title={project.title} description={project.description} href={project.href} />
          ))}

      </div>
    )
  }
}

export default ProjectList;