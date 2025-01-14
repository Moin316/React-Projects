import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext';
const Pagination = () => {
  const { page, handlePageChange, totalpages } = useContext(Appcontext);
  return (
    <div className='w-full flex justify-center items-center border fixed bottom-0 bg-white'>
      <div className=" flex flex-row justify-around max-w-[640px] w-11/12 mx-auto py-2">
        {page > 1 && (
          <button
            className="px-4 py-1 rounded-md border-black border"
            onClick={() => handlePageChange(page - 1)}
          >
            previous
          </button>
        )}
        <p className="font-bold text-sm mt-2">{`${page} of ${totalpages}`}</p>
        {page < totalpages && (
          <button
            className="px-4 py-1 rounded-md border-black border "
            onClick={() => handlePageChange(page + 1)}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination
