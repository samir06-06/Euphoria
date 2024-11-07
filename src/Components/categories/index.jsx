import { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { fetchProducts } from '../../redux/slice/ProductsSlice';
import Homeheading from '../homeHeading';
import './style.scss';
import { useTranslation } from 'react-i18next';


function Categories({ type, count }) {
    const navigate = useNavigate()
    const [arr, setArr] = useState([]);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    useEffect(() => {
        // const newArr = [];
        // for (let i = 0; i < count; i++) {
        //     newArr.push(i);
        // }
        // setArr(newArr);
        dispatch(fetchProducts())
    }, []);
    let i = 0
    const { t } = useTranslation()
    return (
        <div className="Categories">
            <div className="container">
                <Homeheading headText={t("categories_for_" + type)} />
                <div className="grid">
                    {products && products.map((elem, index) => {
                        if (elem.gender.toLowerCase() == type.toLowerCase()) {
                            if (i < 4) {
                                i++
                                return <div className="swipercard" key={index} onClick={() => {
                                    navigate('/products/' + elem.id)
                                }}>
                                    <img src={elem.img[0]} alt="" />
                                    <div className="footer">
                                        <div className="left">
                                            <div className="name">{elem.name}</div>
                                            <div className="explore">{t("explore_now")}</div>
                                        </div>
                                        <div className="right">
                                            <GoArrowRight size={25} color="#797979" />
                                        </div>
                                    </div>
                                </div>
                            }
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default Categories;