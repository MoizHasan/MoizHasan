import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const linkStyle = {
	width: '300px',
	fontSize: '.85rem',
    display: 'block',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: 'black',
}

class ExternalLink extends React.Component {
	render() {
		const { href, value } = this.props;

		return (
			<a href = {href}  target="_blank" rel="noopener noreferrer" style = {linkStyle} >
			    {value}
			</a>
			);
	}
}

export default ExternalLink;