import React from 'react'
import { useQuery } from 'react-query';

const PostsComponent = () => {
    const getData =async()=> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    };

    const {data: posts, error, isLoading, refetch} = useQuery('posts', getData, {
        cacheTime: 5* 60 * 1000,
    } );

    //error handling
    if(error) return `An error has occurred: ${error.message}`;
    if (isLoading) return 'Loading posts...'
  return (
    <div>
        <ul>
            {posts.map(post=> (
                <li key={post.id}>{post.title}</li>
            ))}

        </ul>
        <button onClick={refetch}>Refetch Posts</button>

        
    </div>
  )
}

export default PostsComponent