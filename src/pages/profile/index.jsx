import ProfileHeading from "../../Components/profileHeading"
import "./profile.scss"
import Tabs from "@mui/joy/Tabs"
import TabList from "@mui/joy/TabList"
import Tab from "@mui/joy/Tab"
import TabPanel from "@mui/joy/TabPanel"
import { AiOutlineHeart, AiOutlineUser, AiOutlineLogout } from "react-icons/ai"
import { BiPackage } from "react-icons/bi"
import WishList from "../wishlist"
import Orders from "./../orders"
import AccountInfo from "./../accountInfo"
import { useNavigate } from "react-router-dom"
import Limelight from "../../Components/limelight"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AddAddress from "../addAddress"
import { useSelector } from "react-redux"

function Profile() {
  const navigate = useNavigate()
  const location = useLocation()
  const wishlist = useSelector((state) => state.user.wishlist)
  const user = useSelector((state) => state.user.user)
  const [tabValue, setTabValue] = useState("")

  useEffect(() => {
    const path = location.pathname.split("/").pop()
    setTabValue(path)
  }, [location])

  const handleSignOut = () => {
    console.log("Sign out action")
    navigate("/")
  }

  const handleTabChange = (event, newValue) => {
    console.log(`Tab changed to: ${newValue}`)
    setTabValue(newValue)
  }

  return (
    <>
      <div className="profile-body">
        <div className="container">
          <ProfileHeading page={tabValue} />
          <div className="profile-main-wrapper">
            <Tabs
              aria-label="Vertical tabs"
              orientation="vertical"
              sx={{ width: "100%", height: "auto" }}
              style={{ backgroundColor: "transparent" }}
              value={tabValue}
              onChange={handleTabChange}
            >
              <TabList>
                <div className="profile-left-section">
                  <div className="profile-left-section-heading">
                    <div className="profile-name">
                      <h1>
                        Hello <span>{user && user.name}</span>
                      </h1>
                    </div>
                    <span>Welcome to your Account</span>
                  </div>
                  <div className="tabs"></div>
                </div>
                <Tab value="orders" indicatorPlacement="left">
                  {" "}
                  <div className="tab-item">
                    <BiPackage fontSize={18} /> <span>My orders</span>
                  </div>
                </Tab>
                <Tab value="wishlist" indicatorPlacement="left">
                  {" "}
                  <div className="tab-item">
                    <AiOutlineHeart fontSize={18} /> <span>Wishlist</span>
                  </div>
                </Tab>
                {tabValue == "account-info" ? (
                  <Tab value="account-info" indicatorPlacement="left">
                    <div className="tab-item">
                      <AiOutlineUser fontSize={18} /> <span>My info</span>
                    </div>
                  </Tab>
                ) : tabValue == "add-address" ? (
                  <Tab value="add-address" indicatorPlacement="left">
                    <div className="tab-item">
                      <AiOutlineUser fontSize={18} /> <span>My info</span>
                    </div>
                  </Tab>
                ) : (
                  <Tab value="account-info" indicatorPlacement="left">
                    <div className="tab-item">
                      <AiOutlineUser fontSize={18} /> <span>My info</span>
                    </div>
                  </Tab>
                )}

                <Tab
                  value="sign-out"
                  indicatorPlacement="left"
                  onClick={handleSignOut}
                >
                  <div className="tab-item" onClick={handleSignOut}>
                    <AiOutlineLogout fontSize={18} /> <span>Sign out</span>
                  </div>
                </Tab>
              </TabList>
              <TabPanel value="orders">
                <Orders />
              </TabPanel>
              <TabPanel value="wishlist">
                <WishList />
              </TabPanel>
              {tabValue == "account-info" ? (
                <TabPanel value="account-info">
                  <AccountInfo />
                </TabPanel>
              ) : tabValue == "add-address" ? (
                <TabPanel value="add-address">
                  <AddAddress />
                </TabPanel>
              ) : null}
            </Tabs>
          </div>
          {tabValue == "wishlist" ? (
            <div className="recently-viewed-sect">
              {wishlist.length === 0 ? (
                <Limelight type={"Recently Viewed"} count={"4"} />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Profile
