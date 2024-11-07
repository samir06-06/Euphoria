import React from "react"
import "./addAddress.scss"
import FormikForAddress from "../../Components/formikForAddress"

const AddAddress = () => {
  return (
    <div className="add-address-page">
      <div className="container">
        <div className="accInfo-heading">
          <h1>My Info</h1>
          <h2>add address</h2>
        </div>
        <div className="addres-form">
          <FormikForAddress />
        </div>
      </div>
    </div>
  )
}

export default AddAddress
