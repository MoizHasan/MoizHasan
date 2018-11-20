import React from 'react'

class ExternalLink extends React.Component {
	render() {
		const { className, href, value } = this.props;

		return (
			<a className={className} href = {href}  target="_blank" rel="noopener noreferrer" >
			    {value}
			    {this.props.children}
			</a>
			);
	}
}

export default ExternalLink;