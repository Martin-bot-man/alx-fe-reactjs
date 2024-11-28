import React from 'react'
import { useQuery } from 'react-query';

const PostsComponent = () => {
    const getData =async()=> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    };

    const {data: posts, isError, isLoading, fetchPosts} = useQuery('posts', getData, {
        cacheTime: 5* 60 * 1000,
        staleTime: 30 * 1000,
        refetchOnWindowFocus:false,
        keepPreviousData: true,
    } );

    //error handling
    if(isError) return `An error has occurred: ${isError.message}`;
    if (isLoading) return 'Loading posts...'
  return (
    <div>
        <ul>
            {posts.map(post=> (
                <li key={post.id}>{post.title}</li>
            ))}

        </ul>
        <button onClick={fetchPosts}>Refetch Posts</button>

        
    </div>
  )
}

export default PostsComponent