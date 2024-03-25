import * as React from 'react'
import Helmet from 'react-helmet'
import Header from  './header'

import '../layouts/index.css'


const Layout = ({ children }) => (
  <>
    <Helmet
      title="Moiz Hasan"
      meta={[
        { name: 'description', content: 'Portfolio' },
      ]}
    />
    <Header/>
    <div
      style={{
        margin: '0 auto',
        width: '90%',
        padding: '4.5rem 1.0875rem 1.45rem',
      }}
    >
      <main>{children}</main>
    </div>
  </>
)

export default Layout
