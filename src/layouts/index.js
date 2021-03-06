import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../../node_modules/bootstrap/scss/bootstrap.scss';

import './main.scss';

import Header from '../components/header'



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={""}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />



  <Header siteTitle={""} />

       {children()}



  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
