import React from "react"

import Navbar from "../../Components/SigninNavbar"
import Reset from "../../Components/ResetPassword/Reset"

const index = () => {
  return (
    <div className="container">
      <Navbar />
      <Reset />
    </div>
  )
}

export default index
