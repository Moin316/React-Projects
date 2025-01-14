import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default Home
