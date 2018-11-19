import React from 'react'
import { Link } from 'gatsby'
import SocialLink from './SocialLink'


class SocialIcons extends React.Component {
  render() {
    const {socialLinks} = this.props; 

    return (
      <div>

        {socialLinks.map((link) => (
          
            <SocialLink key={link.href} href={link.href} imgSrc={link.imgSrc} />
          ))}

      </div>
    )
  }
}

export default SocialIcons;