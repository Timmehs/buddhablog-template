import React from 'react'
import PropTypes from 'prop-types'
import { compiler } from 'markdown-to-jsx'

/**
 * Use this component to add additional pages outside of your blog, like an "About Me" section
 */
const Page = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    {compiler(content)}
  </div>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
export default Page
