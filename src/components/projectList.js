import React from 'react'
import ProjectItem from './projectItem'

const ProjectList = (projects) =>
    (
      <div>
        {projects.projects.map((project) => (          
            <ProjectItem key={project.title} title={project.title} description={project.description} href={project.href} demo={project.demo}/>
          ))}
      </div>
    )

export default ProjectList