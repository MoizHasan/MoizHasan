import React from 'react'
import { Link } from 'gatsby'
import ExternalLink from './externalLink'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa"

const LinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '.85rem',
  fontWeight: 'lighter',
  textTransform: 'uppercase',
  fontFamily: 'Helvetica, Arial, sans-serif',
  margin: '0.5rem 0.75rem',
}

const StyledExternalLink = styled(ExternalLink)`
${LinkStyle}
position: relative;
top: 3px;
&:hover {
  color: #de525a;
  }
  `;


// const StyledNav = styled.nav`
// margin: 0 auto;
// width: 90%;
// padding: .85rem 1.25rem;

// @media (max-width: 700px) {
//   width: 95%;
//   padding: .85rem 0;
// }
// `;

const Header = () => {
  <header
    style={{
      background: '#39395a',
      position: 'fixed',
      width: '100%'
    }}
  >
    <nav
      style={{
        margin: '0 auto',
        width: '90%',
        padding: '.85rem 1.25rem'
      }}>
      <Link
        style={LinkStyle}
        to="/"
      >
        Moiz Hasan
      </Link>
      <section style={{ float: 'right' }}>
        <Link
          style={LinkStyle}
          to="/about"
        >
          About
        </Link>

        <Link
          style={LinkStyle}
          to="/portfolio"
        >
          Projects
        </Link>

        <Link style={{ ...LinkStyle, fontSize: '1rem', position: 'relative', top: '5px' }} href='mailto:moizhasan51@gmail.com'><FaEnvelope /></Link>
        <StyledExternalLink style={LinkStyle} href='https://www.linkedin.com/in/moizhasan/'><FaLinkedin /></StyledExternalLink>
        <StyledExternalLink style={LinkStyle} href='https://github.com/MoizHasan'><FaGithub /></StyledExternalLink>
      </section>
    </nav>
  </header>
}
export default Header