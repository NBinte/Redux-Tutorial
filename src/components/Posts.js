import React from 'react';
import { useState, useEffect } from 'react';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setPosts((posts) => {
                    return data;
                });

            });

    }, []);

    return (
        <>
            <h1>Posts</h1>

            {
                posts.map((post, postIndex) => {
                    return (<div key={postIndex}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>);
                })
            }

        </>
    );
}

export default Posts;