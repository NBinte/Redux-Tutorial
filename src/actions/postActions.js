import { FETCH_POSTS, NEW_POST, UPDATE_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));

};

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(

            post => dispatch({
                type: NEW_POST,
                payload: post
            })

        );
};

export const updatePosts = (posts, post) => dispatch => {
    dispatch({
        type: UPDATE_POSTS,
        payload: [post, ...posts]
    })

};


