
import React, { useState } from 'react'
import check from '../../assets/img/check.svg'
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';




const Check = () => {


    const { t } = useTranslation()


    return (

        <section className='container grid lg:grid-cols-2  justify-between py-20 gap-8 '>
            <div className="girls flex md:content-center">
                <img src={check} alt="" />
            </div>
            <div className="flex flex-col container  ">
                <div className='md:pt-10 pb-8'>
                    <h1 className='lg:text-3xl md:text-4xl pb-5 font-bold '>{t("check_email")}</h1>

                    <div className="flex flex-col gap-3 ">
                        <h6 className='md:text-xl  lg:text-sm text-gray-500'>{t("check_email2")} <Link to='/verification'>
                        <bold className='text-violet-900 bolder '> {t("click")} </bold>
                            </Link> </h6>
                    </div>
                    <div className='flex items-center text-gray-700 md:text-xl lg:text-sm pt-9 '>
                        <IoIosArrowBack />

                        <p className=''>{t("back")}
                            <Link to='/sign-in'>
                                <bold className='bolder underline '> Login </bold>
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Check