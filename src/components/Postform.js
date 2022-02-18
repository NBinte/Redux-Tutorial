import React from 'react'
import { useState, useEffect } from 'react'

const Postform = () => {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  })

  console.log(inputs)

  const handleSubmit = e => {
    e.preventDefault()

    let post = {
      title: inputs.title,
      body: inputs.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

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
              }
            })
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
              }
            })
          }}
        ></textarea>
        <br />
        <br />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Postform
