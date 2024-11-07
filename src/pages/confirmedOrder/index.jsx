import React from 'react';
import Image from "../../assets/img/order-confirmed 1.png";
import { useNavigate } from 'react-router-dom';
function ConfirmedOrder() {
  const navigate = useNavigate()
  return (
    <div className="h-4/5 w-4/5 flex justify-center m-auto" style={{ cursor: 'pointer' }} onClick={() => {
      navigate('/')
    }}><img src={Image} alt="confirmOrder" className='h-4/5 w-4/5 flex justify-center px-20' /></div>
  )
}

export default ConfirmedOrder