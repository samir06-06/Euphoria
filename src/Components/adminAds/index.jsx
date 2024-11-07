import React, { useEffect, useState } from "react";
import "./style.scss";
import {
    deleteOffer,
    fetchOffers,
    postOffer,
} from "../../redux/slice/OfferSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteHero, fetchHero, postHero } from "../../redux/slice/HeroSlice";
import { IoMdAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
function AdminAds({ type }) {
    const offers = useSelector((state) => state.offers.offers);
    const hero = useSelector((state) => state.hero.hero);
    const adminCategory = useSelector((state) => state.interface.adminCategory);
    const [openOffer, setopenOffer] = useState(false);
    const [inputOffer, setinputOffer] = useState("");
    const [inputImgHero, setinputImgHero] = useState("");
    const [inputCatHero, setinputCatHero] = useState("");
    const [inputTextHero, setinputTextHero] = useState("");
    const [inputPropHero, setinputPropHero] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOffers());
        dispatch(fetchHero());
    }, []);
    return (
        <div className="AdminAds">
            <div className={openOffer ? "card add" : "card add open"}>
                {openOffer ? (
                    <div className="inputOffer">
                        {adminCategory == "hero" ? (
                            <div className='heroInput'>
                                <input
                                    type="url"
                                    placeholder="Image link"
                                    onChange={(e) => {
                                        setinputImgHero(e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Categories with /"
                                    onChange={(e) => {
                                        setinputCatHero(e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Text"
                                    onChange={(e) => {
                                        setinputTextHero(e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Properties with /"
                                    onChange={(e) => {
                                        setinputPropHero(e.target.value);
                                    }}
                                />
                            </div>
                        ) : (
                            <input
                                type="url"
                                placeholder="Image link"
                                onChange={(e) => {
                                    setinputOffer(e.target.value);
                                }}
                            />
                        )}
                        <button
                            onClick={() => {
                                // console.log(inputOffer)
                                const heroObj = {
                                    img: inputImgHero,
                                    category: inputCatHero,
                                    text: inputTextHero,
                                    properties: inputPropHero
                                }
                                adminCategory == "offer"
                                    ? dispatch(postOffer(inputOffer))
                                    : dispatch(postHero(heroObj));
                                setopenOffer(false);
                            }}
                        >
                            add
                        </button>
                    </div>
                ) : (
                    <div
                        className="content"
                        onClick={() => {
                            setopenOffer(true);
                        }}
                    >
                        <IoMdAddCircle size={60} />
                        Add {adminCategory}
                    </div>
                )}
            </div>
            {type == "offer"
                ? offers &&
                offers.map((elem) => (
                    <div className="card">
                        <img src={elem.img} alt="" />
                        <button
                            onClick={() => {
                                Swal.fire({
                                    title: "Are you sure?",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(deleteOffer(elem.id));
                                        Swal.fire({
                                            title: "Deleted!",
                                            icon: "success"
                                        });
                                    }
                                });

                            }}
                        >
                            delete
                        </button>
                    </div>
                ))
                : hero &&
                hero.map((elem) => (
                    <div className="card">
                        <img src={elem.img} alt="" />
                        <div className="heading">{elem.text}</div>
                        <button
                            onClick={() => {

                                Swal.fire({
                                    title: "Are you sure?",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(deleteHero(elem.id));
                                        Swal.fire({
                                            title: "Deleted!",
                                            icon: "success"
                                        });
                                    }
                                });
                            }}
                        >
                            delete
                        </button>
                    </div>
                ))}
        </div>
    );
}

export default AdminAds;
