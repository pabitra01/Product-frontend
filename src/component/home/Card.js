import React from 'react'
import { useDispatch } from 'react-redux'
import { postPurchasedProductAction } from '../../redux/action/products';


const Card = ({product}) => {
  const dispatch=useDispatch();
  const reload=()=>{
    window.location.reload();
  }
  const purchase=()=>{
    dispatch(postPurchasedProductAction({id:product._id},reload))
  }
  return (
    <div className='w-64 h-80  p-3 rounded-2xl bg-[#0F0F0F]'>
        <div className="w-full h-40 bg-slate-400 rounded-3xl overflow-hidden ">
            <img src={product.photo} alt="" className='w-full h-full object-cover rounded-3xl hover:scale-125 transition-all'/>
        </div>
        <div className="text-left pl-3 my-2 text-white flex justify-between">
          <div className="">{product.name}</div>
          {product.is_purchased ? (
            <div className="px-2 py-0.5 border-[2px] border-purple-600 text-[12px] text-purple-600 rounded-full w-fit">sold</div>
          ):(
            <div className="px-2 py-0.5 border-[2px] border-green-600 text-[12px] text-green-600 rounded-full w-fit">unsold</div>
          )}
        </div>
        <div className="text-left pl-3 my-2 text-white/50 h-10">{product.desc}</div>
        <div className="">
            <button className='w-full py-2 bg-gradient-to-r from-blue-700 to-blue-400 rounded-3xl my-2 text-white font-medium text-[13px]' onClick={purchase}>Buy Now</button>
        </div>
    </div>
  )
}

export default Card