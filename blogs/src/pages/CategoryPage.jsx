import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import {useLocation, useNavigation} from "react-router-dom"
const CategoryPage = () => {
    const navigate=useNavigation();
    const location =useLocation();
    const category=location.pathname.split('/').at(-1)
  return (
    <div>
        <Header/>
      <div>
        <button onClick={()=>navigate(-1)}>
            back
        </button>
        <h2>category on <span>{category}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
