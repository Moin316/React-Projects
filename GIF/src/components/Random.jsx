import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  // const [gif,setGif]=useState('');
  // const [loading,setLoading]=useState(false);
  const clickHandler = async () => {
    await fetchData();
  }
  // async function fetchData() {
  //   setLoading(true);
  //    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const output=await axios.get(url);
  //   console.log(output);
  //   const gif=output.data.data.images.downsized_large.url;
  //   setGif(gif);
  //   setLoading(false);
  //  }
  //  useEffect(()=>{
  //   fetchData();
  //  },[])
   const {gif,loading,fetchData}=useGif();
  return (
    <div className='w-1/2 bg-green-500 rounded-md border border-gray-500 flex flex-col
    gap-y-5 items-center mt-[15px] '>
      <h1 className='text-xl font-bold underline uppercase mt-[15px]'>a Random Gif</h1>
      {loading===true?<Spinner/>:<img src={gif} width="450"></img>}
      <button onClick={clickHandler} className='bg-white opacity-80 py-3 text-lg font-bold text-black w-10/12 rounded-md hover:opacity-90 transition-all duration-300 hover:text-red-300 mt-[15px]' >Generate</button>
    </div>
  )
}

export default Random
