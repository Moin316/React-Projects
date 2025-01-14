import React from 'react'
import { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Loader from './Loader'
const Blogs = () => {
    const {posts,loading}=useContext(Appcontext);
    console.log(posts)
  return (
    <div className="max-w-[640px] h-full w-11/12 mx-auto my-[50px] flex flex-col justify-center items-center">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : posts.length == 0 ? (
        <>
          <p>no posts</p>
        </>
      ) : (
        <>
          {posts.map((post) => (
            <BlogDetails post={post} key={post.id}/>
          ))}
        </>
      )}
    </div>
  );
}

export default Blogs
