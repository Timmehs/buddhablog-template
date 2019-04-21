import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const Blog = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post post={post} key={post.date} />
    ))}
  </div>
)

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Blog
