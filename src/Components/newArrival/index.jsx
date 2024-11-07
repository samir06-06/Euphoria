import { useEffect, useState } from 'react'
import './style.scss'
import Homeheading from '../homeHeading'
import ArrivalImg from '../../assets/img/arrival.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slice/ProductsSlice';
import { useTranslation } from 'react-i18next';
function NewArrival() {
    const { t } = useTranslation()
    const [width, setwidth] = useState(0);
    const navigate = useNavigate()
    const [arr, setArr] = useState([]);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    let i = 0
    useEffect(() => {
        dispatch(fetchProducts())

        setwidth(
            window.innerWidth
        )
        console.log(width)
    }, [width])
    return (
        <div className='NewArrival'>
            <div className="container">
                <Homeheading headText={t("new_arrival")} />
                <Swiper
                    slidesPerView={width < 1000 ? 2 : 4}
                    spaceBetween={width < 1000 ? 10 : 30}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    navigation={true}
                    mousewheel={false}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}

                >
                    {products && products.toReversed().map((elem, index) => {

                        return <SwiperSlide>
                            <div className="swipercard" onClick={() => {
                                navigate('/products/' + elem.id)
                            }}>
                                <img src={elem.img?.[0]} alt="" />

                                <div className="name">{elem.name}</div>
                            </div>
                        </SwiperSlide>

                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default NewArrival