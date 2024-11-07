import React, { useState } from 'react'
import Friends from '../../assets/img/sign-up.svg'
import Google from '../../assets/img/Google.svg'
import Twitter from '../../assets/img/Twitter.svg'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import Button from '../SigninNavbar/Button';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import './sign-up.css'
import axios from 'axios';



const SignupPage = () => {

    const navigate = useNavigate()

    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(IoIosEyeOff)

    // hide password
    const handlePass = () => {
        if (type === 'password') {
            setType('text')
            setIcon(IoIosEye)
        } else {
            setType('password')
            setIcon(IoIosEyeOff)
        }
    }

    const { t } = useTranslation()


    const validationschema = Yup.object().shape({
        name: Yup.string().email(t('email'))
            .required(t("email_formik")),
        password: Yup.string().required(t("password_formik"))
            .min(6, t('pass_min'))
    })

    // formik
    const handleSubmitSignUp = (values, { setSubmitting }) => {
        axios.post('http://localhost:3000/users', values)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        setSubmitting(false);
    };



    return (

        <section className='container grid lg:grid-cols-2  justify-between py-20 gap-8 '>
            <div className="girls flex md:content-center">
                <img src={Friends} alt="" />
            </div>
            <div className="flex flex-col items-center ">
                <div className='md:pt-10 pb-8'>
                    <h1 className='lg:text-3xl md:text-4xl pb-5 font-bold '>{t("signup")}</h1>

                    <div className="flex flex-col gap-3 ">
                        <div className="google cursor-pointer">
                            <img src={Google} alt="" />
                        </div>
                        <div className="twitther cursor-pointer">
                            <img src={Twitter} alt="" />
                        </div>

                        <h2><span className='or'>{t("or")}</span></h2>

                        <Formik
                            initialValues={{ name: "", password: "" }}
                            validationSchema={validationschema}
                            onSubmit={handleSubmitSignUp}
                        >

                            {({ isSubmitting }) => (

                                <Form className='pt-4'>
                                    <div className="flex flex-col mb-3">
                                        <label className='pb-1 md:text-xl  lg:text-sm' >{t("username")}</label>
                                        <Field type="email" name='name' className=' rounded-md py-2 px-2 border border-gray-500 min-w-100 ' />
                                        <ErrorMessage name='name' className='text-red-700 md:text-xl  lg:text-sm' component='div' />
                                    </div>
                                    <div className="input password mb-3 flex flex-col">
                                        <div className="labels flex justify-between items-center">
                                            <label className='pb-1 md:text-xl  lg:text-sm' >{t("password")}</label>
                                            <label htmlFor="password" className='flex items-center md:g-5 cursor-pointer md:text-xl lg:text-sm' onClick={handlePass} >{icon} {t("hide")} </label>
                                        </div>
                                        <Field type={type} name='password' className=' rounded-md py-2 px-2 border border-gray-500 ' />
                                        <ErrorMessage name='password' className='text-red-700 md:text-xl  lg:text-sm' component='div' />
                                        <p className='text-left lg:text-xs md:text-xl py-1  text-gray-500 '>{t("rule")}</p>
                                    </div>
                                    <div className="flex flex-col  items-start pt-3">
                                        <div className='mb-2 flex items-center'>
                                            <input type="checkbox" className='' />
                                            <label htmlFor="checkbox" className='lg:text-xs md:text-xl pl-1 text-gray-700'>{t("agree")} </label>
                                        </div>
                                        <div className='mb-2 flex items-center'>
                                            <input type="checkbox" className='' />
                                            <label htmlFor="checkbox" className='lg:text-xs md:text-xl pl-1 text-gray-700'>{t("subscribe")} </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start pt-5">
                                        <Button text={t("signup")} disabled={isSubmitting} btnClass='btn-register' />
                                        <Link to='/sign-in'>
                                            <p className=' text-gray-700 md:text-xl lg:text-sm pt-2'>{t("account2")} <bold className='bolder underline cursor-pointer '>  {t("signin")}  </bold></p>
                                        </Link>

                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignupPage