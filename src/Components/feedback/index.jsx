import { IoMdStar } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeedBackImg from '../../assets/img/feedback.png';
import Homeheading from '../homeHeading';
import './style.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks } from '../../redux/slice/FeedbackSlice';
import { useTranslation } from 'react-i18next';
function Feedback() {
    const { t } = useTranslation()
    const [width, setwidth] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFeedbacks())
        setwidth(
            window.innerWidth
        )
        console.log(width)
    }, [width])
    const feedbacks = useSelector(state => state.feedbacks.feedbacks)
    return (
        <div className='Feedback'>
            <Homeheading headText={t("feedback")} />
            <div className="container">
                <Swiper
                    slidesPerView={width < 1000 ? 2 : 3}
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
                    {
                        feedbacks && feedbacks.map(elem => (
                            <SwiperSlide>
                                <div className="swipercard" key={elem.id}>
                                    <div className="upper">
                                        <img src={elem.img} alt="" />
                                        <div className="stars">
                                            {[...Array(elem.rating)].map((_, index) => (
                                                <IoMdStar key={index} color="#EDD146" size={25} />
                                            ))}
                                        </div>

                                    </div>
                                    <div className="name">{elem.username}</div>
                                    <div className="text">
                                        {elem.review}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
        </div>
    )
}

export default Feedback