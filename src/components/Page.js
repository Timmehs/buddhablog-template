import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import Seo from './Seo'

/**
 * Use this component to add additional pages outside of your blog, like an "About Me" section
 */
const Page = ({ title, content }) => (
  <div>
    <Seo title={title} description={content.slice(0, 150).trim()} />
    <h1>{title}</h1>
    <Markdown>{content}</Markdown>
  </div>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
export default Page
