import { ErrorMessage, Field } from 'formik'
import React from 'react'

function AdminFormikInput({ name, type }) {
    return (
        <div className="inputField">
            <label htmlFor={name}>{name}</label>
            <Field name={name} type={type} />
            <ErrorMessage name={name} />
        </div>
    )
}

export default AdminFormikInput