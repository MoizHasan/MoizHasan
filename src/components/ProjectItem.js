import React from 'react'
import ExternalLink from './ExternalLink'
import { Link } from 'gatsby'

const itemStyle = {
	marginTop: '2rem',
}

class ProjectItem extends React.Component {
	render() {
		const { title, description, href, demo} = this.props;
		let demoLink = '';
		if (demo) {
			demoLink = <span><span> | </span><Link to={demo}>demo</Link></span>;
		}
		return (
			<div style={itemStyle}>
				<h3> {title} </h3>
				<p> {description} </p>
				<ExternalLink href={href} value="View Source Code" /> 
				{demoLink}
			</div>
			);
	}
}

export default ProjectItem;
