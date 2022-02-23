import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../actions/postActions';

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
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);
