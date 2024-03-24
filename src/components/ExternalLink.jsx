import React from 'react'

const ExternalLink = (props) => (
			<a className={props.className} href = {props.href}  target="_blank" rel="noopener noreferrer" >
			    {props.value}
			    {props.children}
			</a>
			);

export default ExternalLink;