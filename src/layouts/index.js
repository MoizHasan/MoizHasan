import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'

const LinkStyle = { color: 'white', 
                    textDecoration: 'none',
                    fontSize: '.85rem',
                    fontWeight: 'lighter',
                    textTransform: 'uppercase',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                    }

const StyledLink = styled(Link)`
  ${LinkStyle}
  margin: 0.5rem 0.75rem;

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
          
          <StyledLink
          to="contact"
          >
          Contact
          </StyledLink> 
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
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
