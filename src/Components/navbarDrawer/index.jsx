import React from "react";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BiUserCircle, BiPackage } from "react-icons/bi";
import "./navbarDrawer.scss";

const items = [
  {
    label: (
      <span className="drawer-item">
        <BiPackage fontSize={17} /> <span>My orders</span>
      </span>
    ),
    key: "1",
  },
  {
    label: (
      <span className="drawer-item">
        <AiOutlineHeart fontSize={17} /> <span>Wishlist</span>
      </span>
    ),
    key: "2",
  },
  {
    label: (
      <span className="drawer-item">
        <BiUserCircle fontSize={17} /> <span>My info</span>
      </span>
    ),
    key: "3",
  },
  {
    label: (
      <span className="drawer-item">
        <AiOutlineLogout fontSize={17} /> <span>Sign out</span>
      </span>
    ),
    key: "4",
  },
];

const NavbarDraver = () => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    if (key == "1") {
      navigate("/profile/orders");
    } else if (key == "2") {
      navigate("/profile/wishlist");
    } else if (key == "3") {
      navigate("/profile/account-info");
    } else if (key == "4") {
      console.log("sign out");
      navigate("/");
    }
  };

  return (
    <>
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        placement="bottom"
      >
        <a className="profile" onClick={(e) => e.preventDefault()}>
          <AiOutlineUser color="#807D7E" size={20} />
        </a>
      </Dropdown>
    </>
  );
};

export default NavbarDraver;
