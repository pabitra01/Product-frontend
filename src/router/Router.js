import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContent from '../component/home/HomeContent';
import Login from '../component/login/Login';
import SignUp from '../component/login/SignUp';
import MyProductsContent from '../component/myProducts/MyProductsContent';
import UserPurchaseContent from '../component/purchase/UserPurchaseContent';
import { onGetUser } from '../redux/action/user';


const Router = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(onGetUser())
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-products" element={<MyProductsContent />} />
        <Route path="/purchase" element={<UserPurchaseContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
