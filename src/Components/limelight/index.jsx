import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import 'swiper/css';
import 'swiper/css/pagination';
import CategoryImg from '../../assets/img/category.png';
import Homeheading from '../homeHeading';
import './style.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slice/ProductsSlice';
import { fetchProductsInU, fetchUsers, updateWishlist } from '../../redux/slice/UserSlice';
import { t } from 'i18next';

function Limelight({ type, count, suggested }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const wishlist = useSelector(state => state.user.wishlist)
    useEffect(() => {
        // const newArr = [];
        // for (let i = 0; i < count; i++) {
        //     newArr.push(i);
        // }
        // setArr(newArr);
        dispatch(fetchUsers())
        dispatch(fetchProductsInU())
        dispatch(fetchProducts())
    }, []);
    let i = 0
    return (
        <div className="Limelight">
            <div className="container">
                <Homeheading headText={type} />
                <div className="grid">
                    {products && products.map((elem, index) => {
                        let selectedGender = type.split(" ")[2];
                        // console.log((elem.gender.toLowerCase() == selectedGender.toLowerCase()))
                        // console.log((elem.gender))
                        // if (elem.category == suggested?.category) {
                        if (elem.id) {
                            if (i < 4) {
                                // console.log(elem.category == suggested.category)
                                i++
                                return <div className="swipercard" key={index} onClick={(e) => {
                                    e.stopPropagation()
                                    navigate('/products/' + elem.id)
                                }}>
                                    <div className="like" onClick={(e) => {
                                        e.stopPropagation()
                                        dispatch(updateWishlist(elem.id))
                                    }}>
                                        {
                                            wishlist && wishlist.find(item => item.id == elem.id) ? <AiFillHeart color='red' size={20} /> : <AiOutlineHeart color='#807D7E' size={20} />
                                        }

                                    </div>
                                    <img src={elem.img[0]} alt="" />
                                    <div className="footer">
                                        <div className="left">
                                            <div className="name">{elem.name}</div>
                                            <div className="explore">{t("explore_now")}</div>
                                        </div>
                                        <div className="right">
                                            <div className="price">
                                                ${elem.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        }

                        // }

                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Limelight;
