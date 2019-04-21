import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

// const postTags = post => {
//   const tags = [
//     { name: 'og:type', content: 'article' },
//     { name: 'og:article:published_time', content: post.date }
//     // { name: 'og:article:author', content: post.author }  TODO: Add to AUTHOR post front matter
//   ]

//   if (post.header) {
//     tags.push({ name: 'og:image', content: post.header })
//     tags.push({ name: 'og:image:alt', content: 'Article image' })
//     tags.push({ name: 'og:image:url', content: post.header })
//   }

//   return tags.concat(
//     post.tags.map(t => ({ name: 'og:article:tag', content: t }))
//   )
// }

const Seo = ({ title, description, post }) => {
  const meta = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:url', content: window.location.href },
    {
      name: 'og:image',
      content: 'https://d1u0z01nzsqzn7.cloudfront.net/images/enso.png'
    },
    { name: 'og:description', content: description },
    { name: 'og:locale', content: 'en_EN' }
  ]

  return <Helmet title={title} meta={meta} />
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  post: PropTypes.object
}

export default Seo
