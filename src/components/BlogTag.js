import React from 'react'
import PropTypes from 'prop-types'

const BlogTag = ({ tagName }) => (
  <a className='blog-tag' href="#">{tagName}</a>
)

BlogTag.propTypes = {
  tagName: PropTypes.string.isRequired
}

export default BlogTag
