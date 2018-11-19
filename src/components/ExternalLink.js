import React from 'react'

class ExternalLink extends React.Component {
	render() {
		const { className, href, imgSrc, value } = this.props;

		return (
			<a className={className} href = {href}  target="_blank" rel="noopener noreferrer" >
			    {value}
			    <img src={imgSrc}></img>
			</a>
			);
	}
}

export default ExternalLink;