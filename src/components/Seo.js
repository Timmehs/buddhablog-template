import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Seo = ({ title, description }) => {
  const meta = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },
    { name: 'twitter:title', content: `${title}` },
    { name: 'twitter:description', content: description },
    // { name: 'twitter:creator', content: twitter || '@stereobooster' },
    { name: 'og:title', content: title },
    // { name: 'og:type', content: type },
    // { name: 'og:url', content: url },
    { name: 'og:description', content: description },
    // { name: 'og:site_name', content: 'yagd-9d9f8.firebaseapp.com' },
    { name: 'og:locale', content: 'en_EN' }
  ]

  return <Helmet title={title} meta={meta} />
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Seo
