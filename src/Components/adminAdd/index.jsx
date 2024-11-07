import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { postProduct } from "../../redux/slice/ProductsSlice";
import AdminFormikInput from "../adminFormikInput";
import "./style.scss";
function AdminAdd() {
    const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
    const inputForm = [
        { name: "name", type: "text" },
        { name: "gender", type: "text" },
        { name: "dress_style", type: "text" },
        { name: "color", type: "text" },
        { name: "sale", type: "number" },
        { name: "stock", type: "text" },
        { name: "description", type: "text" },
        { name: "video", type: "text" },
        { name: "fabric", type: "text" },
        { name: "pattern", type: "text" },
        { name: "fit", type: "text" },
        { name: "neck", type: "text" },
        { name: "sleeve", type: "text" },
        { name: "style", type: "text" },
        { name: "size", type: "text" },
        { name: "price", type: "number" },
        { name: "categories", type: "text" },
        { name: "brand", type: "text" },
        { name: "img", type: "text" },
    ];
    const dispatch = useDispatch();
    return (
        <div className="AdminAdd">
            <Formik
                initialValues={{
                    name: "",
                    gender: "",
                    dress_style: "",
                    color: "", //array
                    sale: "",
                    stock: "",
                    description: "",
                    video: "",
                    fabric: "",
                    pattern: "",
                    fit: "",
                    neck: "",
                    sleeve: "",
                    style: "",
                    size: "", //array
                    price: "",
                    categories: "", //array
                    brand: "",
                    img: "", //array
                }}
                validationSchema={Yup.object({
                    // name: Yup.string()
                    //     .max(25, 'Must be 25 characters or less')
                    //     .required('Required'),
                    // gender: Yup.string()
                    //     .required('Required'),
                    // dress_style: Yup.string()
                    //     .required('Required'),
                    // color: Yup.string()
                    //     .required('Required'),
                    // sale: Yup.number()
                    //     .max(100, 'Sale can not be more than 100%')
                    //     .required('Required'),
                    // stock: Yup.string()
                    //     .required('Required'),
                    // description: Yup.string()
                    //     .max(100, 'Must be 100 characters or less')
                    //     .required('Required'),
                    // video: Yup.string()
                    //     .required('Required'),
                    // fabric: Yup.string()
                    //     .required('Required'),
                    // pattern: Yup.string()
                    //     .required('Required'),
                    // fit: Yup.string()
                    //     .required('Required'),
                    // neck: Yup.string()
                    //     .required('Required'),
                    // sleeve: Yup.string()
                    //     .required('Required'),
                    // style: Yup.string()
                    //     .required('Required'),
                    // size: Yup.string()
                    //     // .max(5, 'Must be 5 characters or less')
                    //     .required('Required'),
                    // price: Yup.number()
                    //     .min(0, 'Price can not be less than 0')
                    //     .required('Required'),
                    // categories: Yup.string()
                    //     .required('Required'),
                    // brand: Yup.string()
                    //     .required('Required'),
                    // image: Yup.string()
                    //     .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    // values.size = values.size.split(/\s*,\s*/);
                    values.categories = values.categories.split(/\s*,\s*/);
                    values.img = values.img.split(/\s*,\s*/);
                    values.color = values.color.split(/\s*,\s*/);
                    // console.table(values);
                    dispatch(postProduct(values));
                    // alert(JSON.stringify(values))
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data posted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    resetForm({ values: "" });
                }}
            >
                <Form className="form">
                    {inputForm.map((elem) => {
                        return elem.name == "gender" ? (
                            <div className="inputField gender">
                                <label htmlFor="gender">gender</label>
                                <div className="radios">
                                    <label>
                                        <Field type="radio" name="gender" value="male" />
                                        male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" />
                                        female
                                    </label>
                                </div>
                                {/* <Field name='gender' type='text' /> */}
                                <ErrorMessage name="gender" />
                            </div>
                        ) : elem.name == "size" ? (
                            <div>
                                <label>Size</label>
                                <br />
                                <div role="group" aria-labelledby="checkbox-group" className="sizes">
                                    {
                                        sizes.map(size => {
                                            return <label>
                                                <Field type="checkbox" name="size" value={size} />
                                                {size}
                                            </label>
                                        })
                                    }
                                </div>
                            </div>
                        ) : (
                            <AdminFormikInput name={elem.name} type={elem.type} />
                        );
                    })}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default AdminAdd;
