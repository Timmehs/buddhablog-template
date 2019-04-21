import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BlogTag from './BlogTag'
import Markdown from 'markdown-to-jsx'
import formatDate from '../util/dateFormatter'
import CodeBlock from './CodeBlock'

const headerBackground = post => ({ backgroundImage: `url(${post.header})` })

const Post = ({ post }) => (
  <article className="post-body">
    <header className="left">
      {post.title ? (
        <Fragment>
          <h2 className="post-body-title"> {post.title} </h2>
          <strong className="post-date">{formatDate(post.date)}</strong>
        </Fragment>
      ) : (
        <h2 className="post-body-title">{formatDate(post.date)}</h2>
      )}
    </header>
    {post.tags && (
      <p className="post-tags">
        {post.tags.map(tag => (
          <BlogTag tagName={tag} key={tag} />
        ))}
      </p>
    )}
    {post.header && (
      <div className="post-header-image" style={headerBackground(post)} />
    )}
    <Markdown
      options={{
        overrides: {
          pre: { component: CodeBlock }
        }
      }}>
      {post.markdown}
    </Markdown>
  </article>
)

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
