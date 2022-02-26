import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../actions/postActions';
import { updatePosts } from '../actions/postActions';

const Postform = props => {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    let post = {
      title: inputs.title,
      body: inputs.body
    };

    props.createPost(post);
  };

  useEffect(() => {
    props.updatePosts(props.posts, props.newPost);
  }, [props.newPost]);

  return (
    <>
      <h1>Add a post</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <br />
        <input
          type='text'
          id='title'
          name='title'
          value={inputs.title}
          onChange={e => {
            setInputs(inputs => {
              return {
                ...inputs,
                [e.target.name]: e.target.value
              };
            });
          }}
        ></input>
        <br />
        <br />

        <label>Body:</label>
        <br />
        <textarea
          name='body'
          value={inputs.body}
          onChange={e => {
            setInputs(inputs => {
              return {
                ...inputs,
                [e.target.name]: e.target.value
              };
            });
          }}
        ></textarea>
        <br />
        <br />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
  updatePosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStatetoProps = state => ({

  posts: state.posts.items,
  newPost: state.posts.item

});

export default connect(mapStatetoProps, { createPost, updatePosts })(Postform);
