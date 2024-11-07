import React, { useState } from 'react'
import newpass from '../../assets/img/newpass.svg'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import Button from '../SigninNavbar/Button';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './../Signin/signin-nav.css'



const NewPass = () => {

    const navigate
        = useNavigate()
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

    const validationSchema = Yup.object().shape({
        password: Yup.string().required(t("password_formik"))
            .min(6, t('pass_min')),
        password2: Yup.string().oneOf([Yup.ref('password'), null], (t("match_pass")))
            .required(t("password_formik")),
    });
    // formik
    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await axios.get('http://localhost:3000/login', values)
        const users = response.data

        const matchPassword = users.find(item => item.password === values.password)

        if (!matchPassword && values.password === values.password2) {
            console.log('success')
            navigate('/')
        } else {
            console.log('error')
        }

        setSubmitting(false)

    }



    return (

        <section className='container grid lg:grid-cols-2  justify-between py-20 gap-8 '>
            <div className="girls flex md:content-center">
                <img src={newpass} alt="" />
            </div>
            <div className="flex flex-col container  ">
                <div className='md:pt-10 pb-8'>
                    <h1 className='lg:text-3xl md:text-4xl pb-5 font-bold '>{t("new_pass")}</h1>

                    <div className="flex flex-col gap-3 ">
                        <h6 className='md:text-xl  lg:text-sm text-gray-500'>{t("new_pass_text")}</h6>

                        <Formik
                            initialValues={{ password: "", password2: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (

                                <Form className='pt-4'>
                                    <div className="input password mb-3 flex flex-col">
                                        <div className="labels flex justify-between items-center">
                                            <label className='pb-1 md:text-xl  lg:text-sm' >{t("password")}</label>
                                            <label htmlFor="password" className='flex items-center md:g-5 cursor-pointer md:text-xl lg:text-sm' onClick={handlePass} >{icon} {t("hide")} </label>
                                        </div>
                                        <Field type={type} name='password' className=' rounded-md py-2 px-2 border border-gray-500' />
                                        <ErrorMessage name='password' className='errormessage md:text-xl lg:text-sm' component='div' />
                                    </div>
                                    <div className="input password mb-3 flex flex-col">
                                        <div className="labels flex justify-between items-center">
                                            <label className='pb-1 md:text-xl  lg:text-sm' >{t("confirm")}</label>
                                        </div>
                                        <Field type={type} name='password2' className=' rounded-md py-2 px-2 border border-gray-500' />
                                        <ErrorMessage name='password2' className='errormessage md:text-xl lg:text-sm' component='div' />
                                    </div>


                                    <div className="flex flex-col items-start pt-5">
                                        <Button text={t("reset_pass")} disabled={isSubmitting} btnClass='btn-register' />
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

export default NewPass