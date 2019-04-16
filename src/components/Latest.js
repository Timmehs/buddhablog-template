import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const Latest = post => {
  return (
    <div>
      <Post post={post} key={post.date} />
    </div>
  );
};

Latest.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Latest;
