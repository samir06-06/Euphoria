import React from 'react'
import { Breadcrumb } from 'antd';
import "./profileHeading.scss"

const ProfileHeading = ({page}) => {

  return (
    <div className="profile-heading">
         <Breadcrumb
    items={[
      {
        title: <a href="/" className="crump-item">Home</a>,
      },
      {
        title: <a href="" className="crump-item">My Account</a>,
      },
      {
        title: <a href="" className="crump-item main-item">{page}</a>,
    
      },
     
    ]}
  />
    </div>
  )
}

export default ProfileHeading