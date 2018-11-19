import React from 'react'
import { Link } from 'gatsby'
import SocialIcons from '../components/SocialIcons'

import github from './icons/github.png'
import linkedin from './icons/linkedin.png'

const contactStyle = {
	paddingTop: "4.5rem"
}

const socialLinks = [
  {
  	href: 'https://github.com/MoizHasan',
  	imgSrc: github,
  },

  {
  	href: 'https://www.linkedin.com/in/moizhasan/',
  	imgSrc: linkedin, 
  }
]


const Contact = () => (
  <div style = {contactStyle}>
    <h1>Want to get in touch?</h1>
    <span>Send me an email: </span>
    <a href="mailto:moizhasan51@gmail.com?subject=Hello">moizhasan51@gmail.com</a>
    <SocialIcons socialLinks = {socialLinks}/>
  </div>
)

export default Contact