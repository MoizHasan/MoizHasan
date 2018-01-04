import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'
import ExternalLink from './ExternalLink'

const itemStyle = {
	marginTop: '2rem',
}

class ProjectItem extends React.Component {
	render() {
		const { title, description, href} = this.props;

		return (
			<div style={itemStyle}>
				<h3> {title} </h3>
				<p> {description} </p>
				<ExternalLink href={href} value="View Source Code" />
			</div>
			);
	}
}

export default ProjectItem;
