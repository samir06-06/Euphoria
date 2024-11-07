import React from 'react'
import "./emptyWishlist.scss"
import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const EmptyWishlist = () => {
    const navigate=useNavigate()
  return (
    <div className="empty-wishlist">
    <div className="inner-wrapper">
    <div className="heart-icon">
      <IoMdHeartEmpty size={150} color="green" />
    </div>
    <h1>Your wishlist is empty!</h1>
    <p>
      You don’t have any products in the wishlist yet. You will find a lot
      of interesting products on our Shop page.
    </p>
    <button className="return-btn" onClick={()=>{
        navigate("/")
    }}> continue shopping</button>
    </div>
  </div>
  )
}

export default EmptyWishlist