import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from '../hooks/useGif'
const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
  const clickHandler = async () => {
    await fetchData(tag);
  };
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const output = await axios.get(url);
  //   console.log(output);
  //   const gif = output.data.data.images.downsized_large.url;
  //   setGif(gif);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const {gif,loading,fetchData}=useGif(tag);
  const changeHandler=(event)=>{
    setTag(event.target.value);
    console.log(tag);
    
  }
  return (
    <div
      className="w-1/2 bg-blue-500 rounded-md border border-gray-500 flex flex-col
    gap-y-5 items-center mt-[15px] "
    >
      <h1 className="text-xl font-bold underline uppercase mt-[15px]">
          {`Searched ${tag} Gif`}
      </h1>
      {loading === true ? <Spinner /> : <img src={gif} width="450"></img>}
      <input className="w-10/12 text-lg py-2 rounded-lg mb[20px] bg-slate-600 text-center" onChange={changeHandler} value={tag}>

      </input>
      <button
        onClick={clickHandler}
        className="bg-white opacity-80 py-3 text-lg font-bold text-black w-10/12 rounded-md hover:opacity-90 transition-all duration-300 hover:text-red-300 mt-[15px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
