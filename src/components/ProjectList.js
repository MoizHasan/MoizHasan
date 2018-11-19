import React from 'react'
import ProjectItem from '../components/ProjectItem'

class ProjectList extends React.Component {
  render() {
    const {projects} = this.props; 

    return (
      <div>

        {projects.map((project) => (
          
            <ProjectItem key={project.title} title={project.title} description={project.description} href={project.href} demo={project.demo}/>
          ))}

      </div>
    )
  }
}

export default ProjectList;