import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../components/Products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/Cart';
const Detail = () => {
    const {slug} = useParams();
    const [detail,setDetail] =useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail=products.filter(product=>product.slug === slug);
        if(findDetail.length > 0) {
            setDetail(findDetail[0]);
        }
        else{
            window.location.href="/"
        }
    },[slug])
    const handlePlus = () => {
        setQuantity(quantity+1);
    }
    const handleMinus = () => {
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }
    const handleAddToCart=()=>{
        console.log("Add to cart");
        dispatch(addToCart({
            productId: detail.id,
            quantity:quantity,
        }))
    }
  return (
    <div>
        <h2 className='text-3xl text-center'>Product Details</h2>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            <div>
                <img src={detail.image} alt={detail.name} className='w-full' />
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
                <p className='font-bold text-3xl '>
                    ${detail.price}
                </p>
                <div className='flex gap-5'>
                    <div className='flex gap-2 justify-center items-center'>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center' onClick={handlePlus}>+</button>
                        <span className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center'>{quantity}</span>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex items-center justify-center' onClick={handleMinus}>-</button>
                    </div>
                    <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl' onClick={handleAddToCart}> 
                        Add to Cart
                    </button>
                </div>
                <p>{detail.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail
