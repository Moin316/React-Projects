import React, { useContext } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { Appcontext } from '../context/Appcontext';
import { baseUrl } from '../Baseurl';
import Loader from '../components/Loader';
const BlogPage = () => {
    const [blog,setBlog] =useState(null);
    const [relatedBlogs,setRelatedBlogs] =useState([]);
    const location =useLocation();
    const navigate =useNavigate();
    const {loading,setLoading} =useContext(Appcontext)
    const blogId=(location.pathname.split('/').at(-1));
    const blogRelatedPosts=async()=>{
        setLoading(true);
        let url=`${baseUrl}?blogId=${blogId}`
        try{
            const response=await axios.get(url);
            setBlog(response.data.blog);
            setRelatedBlogs(response.data.relatedBlogs);
        }
        catch(error){
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        if(blogId)
        blogRelatedPosts();
    },[blogId])
  return (
    <div>
        <header/>
        <div>
            <button onClick={()=>navigate(-1)}>
                Back
            </button>
            <div>
                {loading?<Loader/>:blog?(<div><BlogDetails post={blog}/>
                <h2> Related Posts</h2>
                {
                    relatedBlogs.map(post=>(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    ))
                 
                }
                </div>):(<p>no blogs</p>)}
            </div>
        </div>
    </div>
  )
}

export default BlogPage
