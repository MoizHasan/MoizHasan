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

const StyledLink = styled(Link)`
  ${LinkStyle}

  &:hover {
    color: #de525a;
  }
  `;

  const StyledExternalLink = styled(ExternalLink)`
  ${LinkStyle}
  &:hover {
    color: #de525a;
  }
  `;

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
        <StyledLink
          to="/"
          >
          Moiz Hasan
        </StyledLink>
        <section style={{ float: 'right' }}>
        <StyledLink
          to="about"
          >
          About
          </StyledLink>
          
          <StyledLink
          to="portfolio"
          >
          Projects
          </StyledLink> 
          
          <StyledExternalLink style={{fontSize: '1rem'}} href='mailto:moizhasan51@gmail.com'><h4 style={{display: 'inline'}}><FaEnvelope/></h4></StyledExternalLink>
          <StyledExternalLink href='https://www.linkedin.com/in/moizhasan/'><h4 style={{display: 'inline'}}><FaLinkedin/></h4></StyledExternalLink>
          <StyledExternalLink href='https://github.com/MoizHasan'><h4 style={{display: 'inline'}}><GoMarkGithub/></h4></StyledExternalLink>
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
