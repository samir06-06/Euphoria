import React, { useEffect } from "react"
import "./accountInfo.scss"
import FormikForPersonalInfoName from "../../Components/formikForP_InfoName"
import FormikForPersonalInfoEmail from "../../Components/formikForP_InfoEmail"
import FormikForPersonalInfoPhone from "../../Components/formikForP_InfoPhone"
import FormikForPersonalInfoPassword from "../../Components/formikForP_InfoPassword"
import { useNavigate } from "react-router-dom"
import AddressCard from "../../Components/addressCard"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/slice/UserSlice"
import { fetchAddresses } from "../../redux/slice/AddressSlice"
import Grid from "@mui/joy/Grid"

const AccountInfo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const addresses = useSelector((state) => state.user.user.address)
  // const addresses = useSelector(state => state.addresses.addresses)

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchAddresses())
  }, [])

  return (
    <div className="accInfo-body">
      <div className="container">
        <div className="accInfo-heading">
          <h1>My Info</h1>
        </div>
        <div className="accInfo-main-section">
          <div className="accInfo-main-heading">
            <h2>Contact Details</h2>
          </div>
          <div className="infos-wrapper">
            <FormikForPersonalInfoName uname={user.name} />
            <FormikForPersonalInfoEmail email={user.email} />
            <FormikForPersonalInfoPhone phone={user?.phone} />
            <FormikForPersonalInfoPassword pass={user.password} />
          </div>
          <div className="address-sect">
            <div className="address-heading">
              <h2>Address</h2>
              <button
                onClick={() => {
                  navigate("/profile/add-address")
                }}
              >
                Add
              </button>
            </div>
            <div className="address-inner-wrapper">
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                {addresses &&
                  addresses?.map((item) => {
                    return (
                      <Grid xs={12} sm={12} md={6} lg={6}>
                        <AddressCard id={item?.id} item={item} />
                      </Grid>
                    )
                  })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
