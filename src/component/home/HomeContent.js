import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUnsoldProductsAction } from '../../redux/action/products';
import { onGetUser } from '../../redux/action/user';
import Navbar from '../navbar/Navbar'
import Card from './Card'

const HomeContent = () => {
  const dispatch=useDispatch();
  const unsoldProducts=useSelector(state=>state.product.unsoldProducts)
  useEffect(()=>{
    dispatch(onGetUser())
    dispatch(getUnsoldProductsAction())
  },[])
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <div className="flex flex-wrap gap-10 p-10 container mx-auto justify-center">
        {unsoldProducts?.map((ele,i)=>(
          <Card key={i} product={ele}/>
        ))}
      </div>
    </div>
  )
}

export default HomeContent