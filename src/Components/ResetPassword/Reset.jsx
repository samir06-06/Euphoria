import React, { useState } from 'react'
import reset from '../../assets/img/reset.svg'

import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import Button from '../SigninNavbar/Button';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './sign-up.css'



const Reset = () => {

    const navigate
 =useNavigate()
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
        name: Yup.string().email(t('reset_email'))
            .required(t("email_formik"))

    })

    // formik
    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await axios.get('http://localhost:3000/login', values)
        const users = response.data
        const userFinder = users.find(item => item.name === values.name )

        if (userFinder) {
            console.log('success')
            navigate('/check-email')
        } else {
            console.log('error')
        }

        setSubmitting(false)

    }


    return (

        <section className='container grid lg:grid-cols-2  justify-between py-20 gap-8 '>
            <div className="girls flex md:content-center">
                <img src={reset} alt="" />
            </div>
            <div className="flex flex-col container  ">
                <div className='md:pt-10 pb-8'>
                    <h1 className='lg:text-3xl md:text-4xl pb-5 font-bold '>{t("reset")}</h1>

                    <div className="flex flex-col gap-3 ">
                        <h6 className='md:text-xl  lg:text-sm text-gray-500'>{t("info_email")}</h6>
                        <h6 className='md:text-xl  lg:text-sm text-gray-500'>{t("please")}</h6>
                        <Formik
                            initialValues={{ name: "" }}
                            validationSchema={validationschema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (

                                <Form className='pt-4'>
                                    <div className="flex flex-col mb-3">
                                        <label className='pb-1 md:text-xl  lg:text-sm' >Email</label>
                                        <Field type="email" name='name' className=' rounded-md py-2 px-2 border border-gray-500 min-w-100 ' />
                                        <ErrorMessage name='name' className='errormessage md:text-xl lg:text-sm' component='div' />
                                    </div>


                                    <div className="flex flex-col items-start pt-5">

                                        <Button text={t("send")} disabled={isSubmitting} btnClass='btn-register' />

                                        <p className=' text-gray-700 md:text-xl lg:text-sm pt-2'>{t("back")}
                                            <Link to='/sign-in'>
                                                <bold className='bolder underline '> {t("signin")} </bold>
                                            </Link>
                                        </p>
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

export default Reset