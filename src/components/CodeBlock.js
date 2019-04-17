import React, { useEffect, Component } from "react";

/** Highlight.js and Languages */
import hljs from "highlight.js/lib/highlight";
window.hljs = hljs;
require("highlightjs-line-numbers.js");

["ruby", "javascript", "css", "scss", "bash"].forEach(lang => {
  hljs.registerLanguage(lang, require(`highlight.js/lib/languages/${lang}`));
});

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.codeBlock = React.createRef();
  }
  componentDidMount() {
    const node = this.codeBlock.current;
    hljs.highlightBlock(node);
    hljs.lineNumbersBlock(node, {
      singleLine: true
    });
  }

  render() {
    return (
      <pre className="hljs" ref={this.codeBlock}>
        {this.props.children}
      </pre>
    );
  }
}
export default CodeBlock;
