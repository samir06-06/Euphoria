import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/img/Logo.svg'
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Button from './Button';
import { Link } from 'react-router-dom';
import './signin-nav.css'


const Navbar = () => {


  const { t, i18n } = useTranslation()

  const handleLang = async (lang) => {
    await i18n.changeLanguage(lang)
  }

  const overlayMenu = useRef()

  const handleClick = () => {
    overlayMenu.current.style.width = '100%'
  }
  const closeOverlay = () => {
    overlayMenu.current.style.width = '0'
  }


  return (
    <>


      <div className="overlay-menu" ref={overlayMenu}>
        <RxCross1 className='x-icon' onClick={closeOverlay} />
        <div className="button-overlay  " >
          <Button text='Login' btnClass='text-white bg-violet-800 hover' />
          <Button text='Sign Up' btnClass='text-white bg-violet-800' />
        </div>
      </div>



      <header className='container navbar flex justify-between items-center'>
        <div className="logo">
          <img src={Logo} alt="" className='img' />
        </div>

        <div className="input-search relative">
          <CiSearch className='absolute md:left-12 lg:left-9  md:top-4 lg:top-4 md:text-xl lg:text-sm' />
          <input type="search" className=' search md:text-2xl lg:text-sm text-center outline-0 rounded-xl md:py-2 lg:py-3  md:px-2 lg:px-4' placeholder={t("search")} />
        </div>



        <form>
          <select id="countries" onChange={(e) => handleLang(e.target.value)} className="bg-gray-50 border border-gray-300 text-sm md:text-xl lg:text-sm text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 ">
            <option value='en' className='text-xs '>English (united States)</option>
            <option value="tr" className='text-xs'>Azerbaijan</option>
          </select>
        </form>


        <div className="buttons flex gap-3">
          <Link to='/sign-in'>
            <Button text={t("signin")} btnClass='btn-register' />
          </Link>
          <Link to='/sign-up'>
            <Button text={t("signup")} btnClass='btn-login' />
          </Link>
        </div>
        <FaBars className='bars' onClick={handleClick} />
      </header>


    </>
  )
}

export default Navbar