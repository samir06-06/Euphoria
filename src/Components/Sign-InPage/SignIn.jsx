import React, { useState } from 'react'
import Girls from '../../assets/img/girls.svg'
import Google from '../../assets/img/Google.svg'
import Twitter from '../../assets/img/Twitter.svg'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './sign-in.css'
import Button from '../SigninNavbar/Button';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';



const Signin = () => {


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
    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await axios.get('http://localhost:3000/users', values)
        const users = response.data
        const userFinder = users.find(item => item.name === values.name && item.password === values.password)

        if (userFinder) {
            console.log('success')
            navigate('/')
        } else {
            console.log('error')
        }

        setSubmitting(false)

    }


    return (

        <section className='container grid lg:grid-cols-2  justify-between  '>
            <div className="girls flex md:content-center">
                <img src={Girls} alt="" />
            </div>
            <div className="flex flex-col items-center ">
                <div className='md:pt-10 pb-8'>
                    <h1 className='lg:text-3xl md:text-4xl pb-5 font-bold '>{t("sign_page")}</h1>

                    <div className="flex flex-col gap-3 ">
                        <div className="google cursor-pointer">
                            <img src={Google} alt="" />
                        </div>
                        <div className="twitther cursor-pointer">
                            <img src={Twitter} alt="" />
                        </div>

                        <h2 className='leading-3'><span children='py-0 px-8'>{t("or")}</span></h2>

                        <Formik
                            initialValues={{ name: "", password: "" }}
                            validationSchema={validationschema}
                            onSubmit={handleSubmit}
                        >

                            {({ isSubmitting }) => (

                                <Form className='pt-4'>
                                    <div className="flex flex-col mb-3">
                                        <label className='pb-1 md:text-xl  lg:text-sm' >{t("username")}</label>
                                        <Field type="email" name='name' className=' rounded-md py-2 px-2 border border-gray-500 min-w-100 ' />
                                        <ErrorMessage name='name' className='text-red-700' component='div' />
                                    </div>
                                    <div className="input password mb-3 flex flex-col">
                                        <div className="labels flex justify-between items-center">
                                            <label className='pb-1 md:text-xl  lg:text-sm' >{t("password")}</label>
                                            <label htmlFor="password" className='flex items-center md:g-5 cursor-pointer md:text-xl lg:text-sm' onClick={handlePass} >{icon} {t("hide")} </label>
                                        </div>
                                        <Field type={type} name='password' className=' rounded-md py-2 px-2 border border-gray-500' />
                                        <ErrorMessage name='password' className='text-red-700' component='div' />
                                        <p className='text-right underline  lg:text-sm md:text-xl '>{t("pass")} </p>
                                    </div>
                                    <div className="flex flex-col items-start pt-3">
                                            <Button text={t("sign_in")} disabled={isSubmitting} btnClass='btn-register' />
                                        <Link to='/sign-up'>
                                            <p className=' text-gray-700 md:text-xl lg:text-sm pt-2'>{t("account")}  <bold className='bolder underline '>  {t("signup")}  </bold></p>
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

export default Signin