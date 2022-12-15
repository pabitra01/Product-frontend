import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { onUserLogin } from '../../redux/action/user';
// import { onUserLogin } from '../../redux/action/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState(false);
  const navigate=useNavigate();
  const routeToSignUp=()=>{
    navigate('/sign-up')
  }
  const routeToHome=()=>{
    navigate('/')
  }
  const dispatch=useDispatch();
  const onLogin=()=>{
    dispatch(onUserLogin({email,password},routeToHome))
  }
  return (
    <div>
      <div className="h-screen w-full bg-black">
        <div className="h-full flex justify-center items-center">
          <div className="backdrop-blur-sm bg-[#0F0F0F]/70 rounded-lg w-[30%] h-[80%]">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="text-[23px] mb-10 font-bold text-[#6759C8]">
                Login
              </div>
              <div className="w-[80%] mb-7 relative">
                <MdEmail className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                <input
                  type="text"
                  placeholder="Enter email"
                  onChange={e => setEmail(e.target.value)}
                  className=" pl-10 w-full  py-3 bg-[#0F0F0F] focus:ring-0 outline-0 text-white  text-left border-0   placeholder-white/50  shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                />
              </div>
              <div className="w-[80%] relative">
                <RiLockPasswordFill className="absolute text-[#6759C8] w-[30px] h-[30px] top-1/2  transform  -translate-y-1/2 left-1" />
                <input
                  type="text"
                  placeholder="Enter password"
                  onChange={e => setPassword(e.target.value)}
                  className="pl-10 w-full  py-3 bg-[#0F0F0F] text-white  focus:ring-0 outline-0   text-left border-0   placeholder-white/50 shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg"
                />
              </div>
              <div
                className={loginErr ? 'text-[red] mb-10' : 'invisible mb-10'}
              >
                Invalid credentials
              </div>
              <button
                className=" mb-10 px-10 py-3 bg-[#6759C8] text-white rounded-full cursor-pointer hover:bg-[#5c4fb3]"
                onClick={onLogin}
              >
                Log in
              </button>
              <div className="text-white/50">
                Don't have an account ?{' '}
                <span
                  className="text-[#6759C8] cursor-pointer text-white "
                  onClick={routeToSignUp}
                >
                  Create one
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
