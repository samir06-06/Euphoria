import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { IoStar } from 'react-icons/io5'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import ArrowRight from '../../assets/img/arrow (1).png'
import { fetchProducts } from '../../redux/slice/ProductsSlice'
import { fetchProductsForBasket, fetchUsers, updateBasket } from '../../redux/slice/UserSlice'
import { setColor, setSize } from '../../redux/slice/selector'
import ImageSlider from '../detailSlider'
import ShippingImg from './../../assets/img/Free Shipping & Returns.png'
import SizeImg from './../../assets/img/Size & Fit.png'
import PaymentImg from './../../assets/img/credit card.png'
import ShippingTruckImg from './../../assets/img/truck.png'
import './style.scss'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
function DetailOpening({ product }) {
    const size = useSelector((state) => state.selector.size)
    const color = useSelector((state) => state.selector.color)
    const basket = useSelector(state => state.user.basket)
    const dispatch = useDispatch()
    console.log(product, 'from opening')
    useEffect(() => {
        // const newArr = [];
        // for (let i = 0; i < count; i++) {
        //     newArr.push(i);
        // }
        // setArr(newArr);
        dispatch(fetchUsers())
        dispatch(fetchProductsForBasket())
        dispatch(fetchProducts())
    }, []);
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (

        <div className='DetailOpening'>
            <div className="left">
                {
                    product &&
                    <ImageSlider product={product} />
                }
            </div>
            <div className="right">
                <div className="navigation">
                    <div className="nav" onClick={() => {
                        navigate('/productlist')
                    }}>shop</div>
                    <MdOutlineKeyboardArrowRight size={20} />
                    <div className="nav">{product.gender}</div>
                    <MdOutlineKeyboardArrowRight size={20} />
                    <div className="nav">{product && product.categories && product.categories[0]}</div> </div>
                <div className="head">
                    {product.name}
                </div>
                <div className="feedbacks">
                    <div className="stars">
                        <IoStar color='#EDD146' size={20} /><IoStar color='#EDD146' size={20} /><IoStar color='#EDD146' size={20} /><IoStar color='#EDD146' size={20} /><IoStar color='#EDD146' size={20} />
                        <div className="count">{product.rating}</div>
                    </div>
                    <div className="comment">
                        <BiCommentDetail color='#807D7E' size={20} />
                        {product.comment && product.comment.length} {t("comment")}
                    </div>
                </div>
                <div className="sizeselector">
                    <div className="head">
                        <div className="select">{t("select_size")}</div>
                        <div className="guide">
                            {t("size_guide")}
                            <img src={ArrowRight} alt="" />
                        </div>
                    </div>
                    <div className="sizes">
                        {
                            product &&
                            product.sizes && product.sizes.map(elem => {
                                return <button className={size == elem ? "size selected" : "size unselected"} onClick={() => {
                                    dispatch(setSize(elem))
                                }}>{elem}</button>
                            })
                        }


                    </div>
                </div>
                <div className="colorselector">
                    <div className="head">
                        {t("colours_available")}
                    </div>
                    <div className="colors">

                        {
                            product &&
                            product.color && product.color.map(elem => {
                                return <div className={color == elem ? "selectedColor" : "unselectedColor"}>
                                    <button className="color black" style={{ backgroundColor: elem }} onClick={() => {
                                        dispatch(setColor(elem))
                                    }}></button>
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className="purchase">
                    <button className="checkout" onClick={() => {
                        // console.log(basket, 'basket')
                        // console.table(product.id);
                        if (size == '') {
                            Swal.fire({
                                title: "Please select size",
                                timerProgressBar: true,
                                icon: "warning",
                                timer: 1500,
                            });
                        }
                        else if (color == '') {
                            Swal.fire({
                                title: "Please select color",
                                timerProgressBar: true,
                                icon: "warning",
                                timer: 1500,
                            });
                        }
                        else {
                            const addedObj = {
                                id: product.id,
                                name: product.name,
                                size: size,
                                color: color,
                                price: product?.price,
                                img: product?.img?.[0]
                            }
                            dispatch(updateBasket(addedObj))
                            // dispatch(fetchProductsForBasket())
                            dispatch(fetchUsers()).then(() => {
                                dispatch(fetchProductsForBasket());
                            });
                        }
                    }}>
                        <AiOutlineShoppingCart color='white' size={20} />
                        {
                            basket && basket.find(item => item.id == product.id) ? t("in_cart") : t("add_cart")
                        }
                    </button>
                    <button className="price">
                        ${product.price}
                    </button>
                </div>
                <div className="line">
                </div>
                <div className="purchases">
                    <div className="section">
                        <div className="icon">
                            <img src={PaymentImg} alt="" />
                        </div>
                        <div className="name">{t("secure_payment")}</div>
                    </div>
                    <div className="section">
                        <div className="icon">
                            <img src={SizeImg} alt="" />
                        </div>
                        <div className="name">{t("free_shipping")}</div>
                    </div>
                    <div className="section">
                        <div className="icon">
                            <img src={ShippingTruckImg} alt="" />
                        </div>
                        <div className="name">{t("free_shipping")}</div>
                    </div>
                    <div className="section">
                        <div className="icon">
                            <img src={ShippingImg} alt="" />
                        </div>
                        <div className="name">{t("free_returns")}</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DetailOpening