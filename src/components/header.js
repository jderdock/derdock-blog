import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
 <header class="px-2 sm:px-2 max-w-3xl mx-auto mt-6">
  <div class="sm:flex sm:flex-wrap sm:justify-between">
   <h1 class="text-center sm:text-left text-base">
    <Link to="/">James Derdock Jr</Link>
   </h1>
   <nav>
    <ul class="flex justify-between mx-auto max-w-xs sm:max-w-none font-sans">
     <li>
      <Link
       to="/blog"
       class="pb-1"
       activeClassName="pb-1 border-b-4 border-gray-800"
      >
       Blog
      </Link>
     </li>
     <li class="sm:ml-6">
      <Link
       to="/"
       class="pb-1"
       activeClassName="pb-1 border-b-4 border-gray-800"
      >
       About
      </Link>
     </li>
     <li class="sm:ml-6">
      <Link
       to="/contact"
       class="pb-1"
       activeClassName="pb-1 border-b-4 border-gray-800"
      >
       Contact
      </Link>
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
