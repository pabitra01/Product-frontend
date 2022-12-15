import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import { CloseIcon } from '../../Icon';
import { getUnsoldProductsAction, postProductAction } from '../../redux/action/products';


const AddProductModal = ({isModal,onToggleModal}) => {
    const formik=useFormik({
      initialValues:{
        name:"",
        photo:"",
        desc:"",
        price:0
      },
      onSubmit:(value)=>{
        dispatch(postProductAction(value,postProductCallback))
      }
    })
const cashoutModalcss = {
        overlay: {
          backgroundColor: '#12121273',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          backgroundColor: '#212121',
          width: 'max(30%,300px)',
          borderRadius: '15px',
          border: 0,
          margin: 'auto',
          height: 'fit-content',
        },
      };
      const navigate=useNavigate();
      const dispatch=useDispatch();
      const postProductCallback=()=>{
        onToggleModal()
        dispatch(getUnsoldProductsAction())
      }
  return (
    <Modal
    isOpen={isModal}
    onRequestClose={onToggleModal}
    ariaHideApp={false}
    style={cashoutModalcss}
    >
      <div className="w-full px-10">
        <div className="absolute top-5 right-5 cursor-pointer" onClick={onToggleModal}>
            <CloseIcon/>
        </div>
        <form onSubmit={formik.handleSubmit}>
       <div className="my-3">
            <div className="text-[20px] font-medium my-2 text-white/60">Product Image :</div>
            <input
              type="text"
              name='photo'
              required
              onChange={formik.handleChange}
              placeholder="Enter Product Image Url"
              className="w-full h6-thin border-[2px] border-blue-400 text-white font-medium placeholder-white/40 px-3 bg-transparent outline-none ring-0 focus:ring-0 py-2 rounded-2xl"
            />
        </div>
        <div className="my-5">
            <div className="text-[20px] font-medium my-2 text-white/60">Product Name :</div>
            <input
              type="text"
              name="name"
              required
              onChange={formik.handleChange}
              placeholder="Enter Name"
              className="w-full h6-thin border-[2px] border-blue-400 text-white font-medium px-3 bg-transparent placeholder-white/40 outline-none ring-0 focus:ring-0 py-2 rounded-2xl"
            />
        </div>
        <div className="my-5">
            <div className="text-[20px] font-medium my-2 text-white/60">Product Description :</div>
            <input
              type="text"
              name="desc"
              required
              onChange={formik.handleChange}
              placeholder="Enter Description"
              className="w-full h6-thin border-[2px] border-blue-400 text-white font-medium px-3 bg-transparent placeholder-white/40 outline-none ring-0 focus:ring-0 py-2 rounded-2xl"
            />
        </div>
        <div className="my-5">
            <div className="text-[20px] font-medium my-2 text-white/60">Product Price :</div>
            <input
              type="number"
              name="price"
              required
              onChange={formik.handleChange}
              placeholder="0"
              className="w-full h6-thin border-[2px] border-blue-400  px-3 bg-transparent outline-none ring-0 focus:ring-0 py-2 placeholder-white/40 rounded-2xl text-white font-medium"
            />
        </div>
        <div className="">
            <button type='submit' className='w-full bg-gradient-to-r from-blue-700 to-blue-400 py-3 my-5 font-medium rounded-full' >Add Product</button>
        </div>
      </form>
       </div>
    </Modal>
  );
};

export default AddProductModal;
