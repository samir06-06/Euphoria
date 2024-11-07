import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/img/Logo.svg";
import "./style.scss";
import NavbarDraver from "../navbarDrawer";
import { searchProduct } from "../../redux/slice/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";



function Navbar() {

  const { t } = useTranslation()

  const handleLang = async (lang) => {
    await i18n.changeLanguage(lang)
  }

  const Navs = [t("shop"), t("men"), t("women"), t("combos"), t("joggers")]



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const results = useSelector(state => state.products.results)
  const [searchText, setsearchText] = useState('')

  function searchInput(value) {
    dispatch(searchProduct(value))
  }
  return (
    <div className="Navbar">
      <div className="container">
        <a href="/#home">
          <img
            src={Logo}
            alt=""
            className="logo"
          // onClick={() => {
          //     window.scrollTo(0, 0)
          // }}
          />
        </a>
        <div className="navs">
          {/* {
            Navs.map(elem => ( */}
          <a className="nav" href={'/productlist'}>
            {t("shop")}
          </a>  <a className="nav" href={'/#men'}>
            {t("men")}
          </a>  <a className="nav" href={'/#women'}>
            {t("women")}
          </a>  <a className="nav" href={'/#combos'}>
            {t("combos")}
          </a>
          <a className="nav" href={'/#joggers'}>
            {t("joggers")}
          </a>
          {/* ))
          } */}
        </div>
        <div className="search">
          <div className="icon">
            <IoIosSearch />
          </div>
          <input type="text" value={searchText} placeholder={t("search_navbar")} onChange={(e) => {
            searchInput(e.target.value)
            setsearchText(e.target.value)
          }} />
          <div className="results">

            {searchText && results && results.map(elem => (
              <div className="result" onClick={() => {
                setsearchText('')
                searchInput('')
                navigate('/products/' + elem.id)
              }}>
                <img src={elem.img[0]} alt="" />
                <div className="name">{elem.name}</div>
              </div>
            ))}

          </div>
        </div>
        <div className="controls">
          <a href="/profile/wishlist" className="wishlist">
            <AiOutlineHeart color="#807D7E" size={20} />
          </a>
          <NavbarDraver />

          <a href="/cart" className="cart">
            <AiOutlineShoppingCart color="#807D7E" size={20} />
          </a>
          {/* language */}
          <form>
            <select id="countries" onChange={(e) => handleLang(e.target.value)} className="">
              <option value='en' className='text-xs '>ENG</option>
              <option value="tr" className='text-xs'>AZE</option>
            </select>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
