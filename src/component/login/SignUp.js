import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import {FaUserAlt} from 'react-icons/fa'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { onUserRegisterAction } from '../../redux/action/user';
// import { onUserLogin } from '../../redux/action/user';

const SignUp = () => {
  const dispatch=useDispatch();
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    onSubmit:(val)=>{
      dispatch(onUserRegisterAction(val,routeToHome))
    }
  })
  const navigate=useNavigate();
  const routeToLogin=()=>{
    navigate('/login')
  }
  const routeToHome=()=>{
    navigate('/')
  }

  return (
    <div>
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className='w-full '>
        <div className="h-full flex justify-center items-center ">
          <div className="backdrop-blur-sm bg-[#0F0F0F]/70 py-10 rounded-lg w-[30%] h-[80%]">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="text-[23px] mb-10 font-bold text-[#6759C8]">
                SignUp
              </div>
              <div className="w-[80%] mb-7 relative">
                <FaUserAlt className="absolute text-[#6759C8] w-[25px] h-[25px] top-1/2  transform  -translate-y-1/2 left-1" />
                <input
                  type="text"
                  name='name'
                  required
                  placeholder="Enter name"
                  onChange={formik.handleChange}
                  className=" pl-10 w-full  py-3 bg-[#0F0F0F] focus:ring-0 outline-0 text-white  text-left border-0   placeholder-white/50  shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                />
              </div>
              <div className="w-[80%] mb-7 relative">
                <MdEmail className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                <input
                  type="text"
                  name='email'
                  required
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  className=" pl-10 w-full  py-3 bg-[#0F0F0F] focus:ring-0 outline-0 text-white  text-left border-0   placeholder-white/50  shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                />
              </div>
              <div className="w-[80%] relative">
                <RiLockPasswordFill className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                <input
                  type="text"
                  name='password'
                  required
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  className="pl-10 w-full  py-3 bg-[#0F0F0F] text-white  focus:ring-0 outline-0   text-left border-0   placeholder-white/50 shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                />
              </div>
              <button
              type='submit'
                className=" my-10 px-10 py-3 bg-[#6759C8] text-white rounded-full cursor-pointer hover:bg-[#5c4fb3]"
              >
                Sign Up
              </button>
              <div className="text-white/50">
                Already have an account ?{' '}
                <span
                  className="text-[#6759C8] cursor-pointer text-white "
                  onClick={routeToLogin}
                >
                  Log In
                </span>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
