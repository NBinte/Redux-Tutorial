import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/postActions";

const Posts = React.memo((props) => {

  // console.log(props.fetchPosts);

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
});

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStatetoProps = state => ({

  posts: state.posts.items,
  newPost: state.posts.item

});

export default connect(mapStatetoProps, { fetchPosts })(Posts);
