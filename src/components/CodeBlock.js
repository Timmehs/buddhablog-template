import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** Highlight.js and Languages */
import hljs from 'highlight.js/lib/highlight'
window.hljs = hljs
require('highlightjs-line-numbers.js')

const languages = ['ruby', 'javascript', 'css', 'scss', 'bash']
languages.forEach(lang => {
  hljs.registerLanguage(lang, require(`highlight.js/lib/languages/${lang}`))
})

class CodeBlock extends Component {
  constructor(props) {
    super(props)
    this.codeBlock = React.createRef()
  }
  componentDidMount() {
    const node = this.codeBlock.current
    hljs.highlightBlock(node)
    hljs.lineNumbersBlock(node, {
      singleLine: true
    })
  }

  render() {
    return (
      <pre className="hljs" ref={this.codeBlock}>
        {this.props.children}
      </pre>
    )
  }
}

CodeBlock.propTypes = {
  children: PropTypes.any.isRequired
}

export default CodeBlock
