import React from "react"
import "./style.scss"
import AdminSideBar from "../../Components/adminSidebar"
import AdminList from "../../Components/adminList"
import { useSelector } from "react-redux"
import AdminAdd from "../../Components/adminAdd"
import AdminAds from "../../Components/adminAds"
function AdminPage() {
  const adminCategory = useSelector((state) => state.interface.adminCategory)
  return (
    <div className="AdminPage">
      <AdminSideBar />
      {adminCategory == "add" ? (
        <AdminAdd />
      ) : adminCategory == "hero" ? (
        <AdminAds type={adminCategory} />
      ) : adminCategory == "offer" ? (
        <AdminAds type={adminCategory} />
      ) : (
        <AdminList type={adminCategory} />
      )}
    </div>
  )
}

export default AdminPage
