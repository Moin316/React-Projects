import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import {Appcontext} from './context/Appcontext'
import {Routes,Route, useSearchParams, useLocation} from "react-router-dom"
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
const App = () => {
  const { fetchBlogPosts } = useContext(Appcontext);
  const [searchParams,setSearchParams] = useSearchParams();
  const location=useLocation();
  useEffect(()=>{
    const page=searchParams.get('page')??1;
    if(location.pathname.includes('tags')){
      const tag=location.pathname.split('/').at(-1).replace('-',' ');
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes('categories')){
      const category=location.pathname.split('/').at(-1);
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page)); 
    }
  },[location.pathname,location.search])
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:blogid" element={<BlogPage/>}></Route>
      <Route path="/tags/:tag" element={<TagPage/>}></Route>
      <Route path="/categories/:category" element={<CategoryPage/>}></Route>
    </Routes>
  )
}

export default App
