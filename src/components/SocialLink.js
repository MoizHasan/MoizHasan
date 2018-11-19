import React from 'react'

const iconStyle = {
	width: '60px',
	margin: '2.5rem 10px',
	opacity: '.75'
}

class SocialLink extends React.Component {
	render() {
		const { href, imgSrc } = this.props;

		return (
			<a href = {href}  target="_blank" rel="noopener noreferrer">
			    <img src = {imgSrc} style = {iconStyle} ></img>
			</a>
			);
	}
}

export default SocialLink;