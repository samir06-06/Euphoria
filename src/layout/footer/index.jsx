import FooterElem from "../../Components/footer"

import Signin from "../../Components/Sign-InPage/SignIn"
import { Routes, Route, useParams } from "react-router-dom"
import SignUp from "../../pages/sign-up"

const Footer = () => {
  let { type } = useParams()

  return (
    <>
      {/* {type === 'sign-in' ?
        <Signin /> :
        type === 'sign-up' ?
          <SignUp />

          : <FooterElem />
      } */}
      {(type = !"sign-in" || ("sign-up" && <FooterElem />))}
    </>
  )
}

export default Footer
