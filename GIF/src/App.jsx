import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
const App = () => {
  return (
    <div className='w-full h-full flex flex-col background  p-[1px] gap-y-5'>
      <h1 className='bg-white rounded-md w-11/12 text-center mt-[20px] py-5 px-10 text-2xl font-bold mx-auto'>Random GIFS</h1>
      <div className='flex flex-col items-center justify-center w-full '>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
