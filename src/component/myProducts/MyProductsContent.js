import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../home/Card';
import Navbar from '../navbar/Navbar'

const MyProductsContent = () => {
  const user=useSelector(state=>state.user.user);
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      {user?.products?.length>0 ? (
        <div className="flex flex-wrap gap-10 p-10 container mx-auto justify-center">
        {user?.products?.map((ele,i)=>(
          <Card key={i} product={ele}/>
        ))}
      </div>
      ):(
        <div className="flex justify-center items-center">
        <div className="text-white text-[30px] font-medium pt-20">You have not added any products</div>
        </div>
      )}
    </div>
  )
}

export default MyProductsContent