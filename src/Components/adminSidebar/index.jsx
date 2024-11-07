import React from 'react'
import './style.scss'
import Logo from "../../assets/img/Logo.svg";
import { FaUserLarge } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminCategory } from '../../redux/slice/interface';
import { IoMdAddCircle } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { MdCenterFocusStrong } from "react-icons/md";
function AdminSideBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const adminCategory = useSelector(state => state.interface.adminCategory)
    const buttons = ['products', 'users', 'add', 'offer', 'hero']
    return (
        <div className='AdminSideBar'>
            <img src={Logo} alt="" onClick={() => {
                navigate('/')
            }} />
            {
                buttons.map(elem => {
                    return <button className={adminCategory == `${elem}` && 'active'} onClick={() => {
                        dispatch(setAdminCategory(elem))
                    }}>
                        {
                            elem == 'products' ? <AiFillProduct /> :
                                elem == 'users' ? <FaUserLarge /> :
                                    elem == 'add' ? <IoMdAddCircle /> :
                                        elem == 'offer' ? <MdLocalOffer /> :
                                            <MdCenterFocusStrong />
                        }
                        {elem == 'add' ? 'add product' : elem}</button>
                })
            }
        </div>
    )
}

export default AdminSideBar