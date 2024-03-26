import React from 'react'
import ExternalLink from './externalLink'
import styled from 'styled-components'
import { Link } from 'gatsby'

const itemStyle = {
	marginTop: '2rem',
}

const projectItem = {
	textDecoration: 'none',
	color: '#454545',
    fontSize: '.85rem',
    fontFamily: 'Helvetica, Arial, sans-serif',
}

  const StyledExternalLink = styled(ExternalLink)`
  ${projectItem}
  &:hover {
    color: 'red',
  }
  `;

const ProjectItem = ({title, description, href, demo}) => {
		let demoLink = '';
		if (demo) {
			demoLink = <span><span> | </span><Link style={projectItem} to={demo}>Demo</Link></span>;
		}
		return (
			<div style={itemStyle}>
				<h3> {title} </h3>
				<p> {description} </p>
				<StyledExternalLink href={href}> 
				<span>View Source Code</span> {demoLink}
				</StyledExternalLink>
			</div>
			);
		};

export default ProjectItem
