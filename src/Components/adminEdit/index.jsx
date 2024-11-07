import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import { useDispatch } from 'react-redux';
import { editProduct, fetchProducts, postProduct } from '../../redux/slice/ProductsSlice';
import Swal from 'sweetalert2'
import { setEditOpen } from '../../redux/slice/interface';
function AdminEdit({ product }) {
    const dispatch = useDispatch()
    return (
        <div className='AdminEdit'>
            <Formik
                initialValues={{
                    id: product.id,
                    name: product.name,
                    gender: product.gender,
                    dress_style: product.dress_style,
                    color: product.color, //array
                    sale: product.sale,
                    stock: product.stock,
                    description: product.description,
                    video: product.video,
                    fabric: product.fabric,
                    pattern: product.pattern,
                    fit: product.fit,
                    neck: product.neck,
                    sleeve: product.sleeve,
                    style: product.style,
                    size: product.size, //array
                    price: product.price,
                    categories: product.categories, //array
                    brand: product.brand,
                    img: product.img, //array
                }}
                // validationSchema={Yup.object({
                //     // name: Yup.string()
                //     //     .max(25, 'Must be 25 characters or less')
                //     //     .required('Required'),
                //     // gender: Yup.string()
                //     //     .required('Required'),
                //     // dress_style: Yup.string()
                //     //     .required('Required'),
                //     // color: Yup.array()
                //     //     .required('Required'),
                //     // sale: Yup.number()
                //     //     .max(100, 'Sale can not be more than 100%')
                //     //     .required('Required'),
                //     // stock: Yup.string()
                //     //     .required('Required'),
                //     // description: Yup.string()
                //     //     .max(100, 'Must be 100 characters or less')
                //     //     .required('Required'),
                //     // video: Yup.string()
                //     //     .required('Required'),
                //     // fabric: Yup.string()
                //     //     .required('Required'),
                //     // pattern: Yup.string()
                //     //     .required('Required'),
                //     // fit: Yup.string()
                //     //     .required('Required'),
                //     // neck: Yup.string()
                //     //     .required('Required'),
                //     // sleeve: Yup.string()
                //     //     .required('Required'),
                //     // style: Yup.string()
                //     //     .required('Required'),
                //     // size: Yup.string()
                //     //     // .max(5, 'Must be 5 characters or less')
                //     //     .required('Required'),
                //     // price: Yup.number()
                //     //     .min(0, 'Price can not be less than 0')
                //     //     .required('Required'),
                //     // categories: Yup.array()
                //     //     .required('Required'),
                //     // brand: Yup.string()
                //     //     .required('Required'),
                //     // image: Yup.array()
                //     //     .required('Required'),
                // })}
                onSubmit={(values, { setSubmitting }) => {
                    // values.size = values.size.split(/\s*,\s*/)
                    // values.categories = values.categories.split(/\s*,\s*/)
                    // values.img = values.img.split(/\s*,\s*/)
                    // values.color = values.color.split(/\s*,\s*/)
                    // console.table(values);
                    dispatch(editProduct(values))
                    dispatch(setEditOpen(false))

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data edited successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resetForm({ values: '' });
                    dispatch(fetchProducts())
                }}
            >
                <Form className='form'>
                    <div className="inputField">
                        <label htmlFor="name">name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />
                    </div>
                    <div className="inputField">
                        <label htmlFor="image">image</label>
                        <Field name="image" type="text" />
                        <ErrorMessage name="image" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="gender">gender</label>
                        <Field name="gender" type="text" />
                        <ErrorMessage name="gender" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="dress_style">dress style</label>
                        <Field name="dress_style" type="text" />
                        <ErrorMessage name="dress_style" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="color">color</label>
                        <Field name="color" type="text" />
                        <ErrorMessage name="color" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="sale">sale</label>
                        <Field name="sale" type="number" />
                        <ErrorMessage name="sale" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="stock">stock</label>
                        <Field name="stock" type="text" />
                        <ErrorMessage name="stock" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="description">description</label>
                        <Field name="description" type="text" />
                        <ErrorMessage name="description" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="video">video</label>
                        <Field name="video" type="text" />
                        <ErrorMessage name="video" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="fabric">fabric</label>
                        <Field name="fabric" type="text" />
                        <ErrorMessage name="fabric" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="pattern">pattern</label>
                        <Field name="pattern" type="text" />
                        <ErrorMessage name="pattern" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="fit">fit</label>
                        <Field name="fit" type="text" />
                        <ErrorMessage name="fit" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="neck">neck</label>
                        <Field name="neck" type="text" />
                        <ErrorMessage name="neck" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="sleeve">sleeve</label>
                        <Field name="sleeve" type="text" />
                        <ErrorMessage name="sleeve" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="style">style</label>
                        <Field name="style" type="text" />
                        <ErrorMessage name="style" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="size">size</label>
                        <Field name="size" type="text" />
                        <ErrorMessage name="size" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="price">price</label>
                        <Field name="price" type="number" />
                        <ErrorMessage name="price" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="categories">categories</label>
                        <Field name="categories" type="text" />
                        <ErrorMessage name="categories" />
                    </div>

                    <div className="inputField">
                        <label htmlFor="brand">brand</label>
                        <Field name="brand" type="text" />
                        <ErrorMessage name="brand" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AdminEdit