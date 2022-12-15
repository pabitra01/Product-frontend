import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../redux/action/user';
import AddProductModal from '../modals/AddProductModal';

const Navbar = () => {
  const user=useSelector(state=>state.user.user)
  const [isModal,setIsModal]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const navigateToMyProducts=()=>{
    navigate('/my-products')
  }
  const navigateToHome=()=>{
    navigate('/')
  }
  const onToggleModal=()=>{
    setIsModal(!isModal)
  }
  const routeToPurchase=()=>{
    navigate('/purchase')
  }
  const reload=()=>{
    window.location.reload();
  }
  const logoutUser=()=>{
    dispatch(userLogout(reload))
  }
  const routetoLogin=()=>{
    navigate('/login')
  }
  return (
    <div className="bg-[#0F0F0F]">
        <div className='h-20 w-full bg-[#0F0F0F]  container mx-auto'>
          {!user ? (
            <div className="flex justify-end items-center h-full">
            <div className="w-fit float-right px-7 py-2 mx-10 cursor-pointer bg-gradient-to-r from-blue-700 to-blue-400 text-white font-medium rounded-3xl" onClick={routetoLogin}>Login</div> 
            </div>
          ):(
            <>
            <div className="flex justify-between items-center w-full h-full">
                <div className=" font-medium  text-blue-500 cursor-pointer pl-10 cursor-pointer" onClick={navigateToHome}>Home</div>
            <div className="flex h-full items-center">
            <div className="mr-10 font-medium  text-blue-500 cursor-pointer" onClick={()=>setIsModal(true)}>Add Products</div>
            <div className="mr-10 font-medium  text-blue-500 cursor-pointer" onClick={navigateToMyProducts}>My Products</div>
            <div className="mr-10 font-medium  text-blue-500 cursor-pointer" onClick={routeToPurchase}>Purchased Products</div>
            <div className="px-7 py-1 cursor-pointer bg-white rounded-full mr-10 font-medium" onClick={logoutUser}>Logout</div>
            </div>
            </div>
            </>
          )}
    </div>
    {isModal && (
      <AddProductModal isModal={isModal} onToggleModal={onToggleModal}/>
    )}
    </div>
  )
}

export default Navbar