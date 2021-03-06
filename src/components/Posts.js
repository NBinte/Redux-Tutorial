import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/postActions";

const Posts = props => {

  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>

      {props.posts.map((post, postIndex) => {
        return (
          <div key={postIndex}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);
