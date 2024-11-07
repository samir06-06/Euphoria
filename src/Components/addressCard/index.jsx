import React, { useState } from 'react'
import Divider from '@mui/joy/Divider';
import "./addressCard.scss"
import { useDispatch } from 'react-redux';
import {  deleteAddress, setDefaultShipping } from '../../redux/slice/AddressSlice';
import ModalElement from '../modal';



const AddressCard = ({id,item}) => {
   const dispatch=useDispatch()
   const [open, setOpen] = useState(false);
  return (
    <div className="address-card col-6" key={id}>
        <div className="cardholder-name">
            <h2>{item?.firstname}{"  "}{item?.lastname}</h2>
        </div>
        <div className="postal-code">
            {item?.postalCode}
        </div>
        <div className="address">
{item?.country}, {item?.city}, {item?.street}, {item?.companyname?`${item?.companyname} Company`:null} 
        </div>
        <div className="address-tags">
        {
          item?.reseption?<div className='tag'>home</div>:null
            }
            {
                item?.default_billing?<div className='tag'>Default Billing address</div>:null
            }
            {
            item?.default_shipping?  <div className='tag'>Default Shipping address</div>:null
            }
        </div>
        <div className="card-btns">
        <button className="address-remove-btn " onClick={()=>{dispatch(deleteAddress(id))}}>
            Delete
        </button>
        <Divider orientation="vertical" />
        <button className="address-edit-btn" onClick={() => setOpen(true)}>
            Edit
        </button>
        {
          item?.default_shipping?null:  <>
           <Divider orientation="vertical" />
           <button className="detault-set-btn" onClick={()=>{dispatch(setDefaultShipping(id))
           }}>
            Set as default
        </button>
          </>
        }
        </div>
        <ModalElement open={open} setOpen={setOpen} id={id}/>
    </div>
  )
}

export default AddressCard