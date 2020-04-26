import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
 <header class="px-2 sm:px-2 max-w-3xl mx-auto">
  <div class="sm:flex sm:flex-wrap sm:justify-between">
   <h1>
    <Link to="/">James Derdock, Jr.</Link>
   </h1>
   <nav>
    <ul class="flex mx-auto">
     <li>
      <Link to="/blog">Blog</Link>
     </li>
     <li class="sm:ml-6">
      <Link to="/">About</Link>
     </li>
     <li class="sm:ml-6">
      <Link to="/contact">Contact</Link>
     </li>
    </ul>
   </nav>
  </div>
 </header>
)

Header.propTypes = {
 siteTitle: PropTypes.string,
}

Header.defaultProps = {
 siteTitle: ``,
}

export default Header
