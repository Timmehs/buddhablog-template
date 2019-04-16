import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";

/**
 * Use this component to add additional pages outside of your blog, like an "About Me" section
 */
const Page = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <Markdown>{content}</Markdown>
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
export default Page;
