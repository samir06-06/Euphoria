import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchHero } from "../../redux/slice/HeroSlice";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function Hero() {
    const hero = useSelector((state) => state.hero.hero);
    const dispatch = useDispatch();
    let categoryIndex = 0;
    let propertyIndex = 0;
    useEffect(() => {
        dispatch(fetchHero());
    }, []);
    const { t } = useTranslation()
    const navigate = useNavigate()
    return (
        <div className="Hero">
            <Swiper
                // cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={false}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {hero &&
                    hero.map((elem) => {
                        const propertyLength = elem?.properties?.length;
                        return (
                            <SwiperSlide style={{ backgroundImage: `url(${elem?.img})` }}>
                                <div className="content">
                                    <div className="category">
                                        {/* {elem?.category?.map((text) => {
                                            categoryIndex++;
                                            return categoryIndex % 2 === 0 ? text : text + " / ";
                                        })} */}
                                        {elem.category}
                                    </div>
                                    <div className="big">{elem.text}</div>
                                    <div className="properties">
                                        {/* {elem.properties.map(text => {
                                        propertyIndex++
                                        return propertyIndex < propertyLength ? text + " / " : text;
                                    })} */}
                                        {/* {elem?.properties?.[0]}
                                        {" / "}
                                        {elem?.properties?.[1]}
                                        {" / "}
                                        {elem?.properties?.[2]} */}
                                        {elem.properties}
                                    </div>
                                    <button className="heroBtn" onClick={() => {
                                        navigate('/productlist')
                                    }}>{t("shop_now")}</button>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
}

export default Hero;
