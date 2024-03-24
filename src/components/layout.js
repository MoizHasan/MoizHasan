import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ExternalLink from '../components/ExternalLink'
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

import '../layouts/index.css'

const LinkStyle = { color: 'white', 
                    textDecoration: 'none',
                    fontSize: '.85rem',
                    fontWeight: 'lighter',
                    textTransform: 'uppercase',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    margin: '0.5rem 0.75rem',
                    }

  const StyledNav = styled.nav`
  margin: 0 auto;
  width: 90%;
  padding: .85rem 1.25rem;

  @media (max-width: 700px) {
    width: 95%;
    padding: .85rem 0;
  }
  `;

const Header = () => (
  <div
    style={{
      background: '#39395a',
      position: 'fixed',
      width: '100%'
    }}
  >
    <StyledNav>
      <div style={{ margin: 0 }}>
        <Link
          style={LinkStyle}
          to="/"
          >
          Moiz Hasan
        </Link>
        <section style={{ float: 'right' }}>
        <Link
          style={LinkStyle}
          to="about"
        >
          About
          </Link>
          
        <Link
          style={LinkStyle}
          to="portfolio"
        >
          Projects
        </Link> 
          
          <Link style={{...LinkStyle, fontSize: '1rem'}} href='mailto:moizhasan51@gmail.com'><h4 style={{display: 'inline'}}><FaEnvelope/></h4></Link>
          <ExternalLink style={LinkStyle} href='https://www.linkedin.com/in/moizhasan/'><h4 style={{display: 'inline'}}><FaLinkedin/></h4></ExternalLink>
          <ExternalLink style={LinkStyle} href='https://github.com/MoizHasan'><h4 style={{display: 'inline'}}><GoMarkGithub/></h4></ExternalLink>
          </section>
      </div>
    </StyledNav>
  </div>
)


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Moiz Hasan"
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        width: '90%',
        padding: '4.5rem 1.0875rem 1.45rem',
      }}
    >
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
