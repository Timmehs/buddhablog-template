import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavigationBar = ({ pages }) => (
  <nav>
    <h3 className="font-effect-anaglyph brand">My Blog</h3>
    <ul>
      <li>
        <NavLink exact activeClassName="navlink-active" to="/">
          Blog
        </NavLink>
      </li>
      {pages.map(page => (
        <li key={`navigation-bar-${page.slug}`}>
          <NavLink activeClassName="navlink-active" to={`/${page.slug}`}>
            {page.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

NavigationBar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NavigationBar
