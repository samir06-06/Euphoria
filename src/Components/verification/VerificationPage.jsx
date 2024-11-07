import React, { useState } from 'react'
import verif from '../../assets/img/verif.svg'
import Button from '../SigninNavbar/Button';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



const VerificationPage = () => {




    const { t } = useTranslation()


    const validationschema = Yup.object().shape({
        name: Yup.string().email(t('reset_email'))
            .required(t("email_formik"))

    })

    // formik
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false);
    };



    return (

        <section className='container grid lg:grid-cols-2  justify-between py-20 gap-8 '>
            <div className="girls flex md:content-center">
                <img src={verif} alt="" />
            </div>
            <div className="flex flex-col container  ">
                <div className='md:pt-10 pb-8'>
                    <h1 className='lg:text-3xl md:text-4xl pb-5 font-bold '>{t("reset")}</h1>

                    <div className="flex flex-col gap-3 ">
                        <h6 className='md:text-xl  lg:text-sm text-gray-500'>{t("verify")} </h6>

                        <Formik
                            initialValues={{ name: "" }}
                            validationSchema={validationschema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (

                                <Form className='pt-4'>
                                    <div className="flex flex-col mb-3">
                                        <label className='pb-1 md:text-xl  lg:text-sm' >{t("verify")} </label>
                                        <Field type="number" name='name' className=' rounded-md py-2 px-2 border border-gray-500 min-w-100 ' />
                                        <ErrorMessage name='name' className='errormessage md:text-xl lg:text-sm' component='div' />
                                    </div>


                                    <div className="flex flex-col items-start pt-5">
                                        <Link to='/new-password'>
                                            <Button text={t("verify")} disabled={isSubmitting} btnClass='btn-register' />
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

export default VerificationPage