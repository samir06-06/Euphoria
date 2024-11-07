import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "../formikForAddress/formikForAddress.scss"
import { useDispatch, useSelector } from 'react-redux';
import {  updateAddress } from '../../redux/slice/AddressSlice';

const genericPhoneRegex = /^[+]?[\d\s\-()]{7,}$/; 

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Required'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
companyName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
street: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
reseption:Yup.string()
.min(2, 'Too Short!')
.max(20, 'Too Long!'),
city:Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
postalCode: Yup.string()
    .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits') 
    .required('Required'),

default_shipping: Yup.boolean(), 
default_billing: Yup.boolean(),
});

const FormikForEdit = ({id,setOpen}) => {
  const dispatch= useDispatch()
  const addresses=useSelector(state=>state.addresses.addresses)
  const found=addresses.find(item=>item.id==id)

const handleSubmit=(values)=>{
    let obj={
      ...values,
          id,
        "state":found.state,
        "phone":found.phone
    }
    dispatch(updateAddress(obj))
    setOpen(false)
}

  return (
    <Formik
       initialValues={{
         firstname: found.firstname,
         lastname: found.lastname,
         country: found.country,
         companyName: found.companyName,
         street: found.street,
         reseption: found.reseption,
         city: found.city,
         postalCode: found.postalCode,
         deliveryInstruction: found.deliveryInstruction,
         default_shipping: found.default_shipping,
         default_billing: found.default_shipping,
       }}
       validationSchema={SignupSchema}
       onSubmit={handleSubmit}
     >
       {({ errors, touched ,resetForm }) => (
         <Form>
          <div className='input-group'>
           <div className="inp-inner-wrapper">
           <div className="inp-label">
                First name*
            </div>
          <Field name="firstname" className="form-item-inp"/>
           {errors.firstname && touched.firstname ? (
             <div className='error'>{errors.firstname}</div>
           ) : null}
           </div>
             <div className="inp-inner-wrapper">
             <div className="inp-label">
                Last name*
            </div>
           <Field name="lastname" className="form-item-inp"/>
           {errors.lastname && touched.lastname ? (
             <div className='error'>{errors.lastname}</div>
           ) : null}
             </div>
          </div>
        <div className='input-group'>
       <div className="inp-inner-wrapper">
        <div className="inp-label">
            Country*
        </div>
       <Field name="country" className="form-item-inp"/>
           {errors.country && touched.country ? (
             <div className='error'>{errors.country}</div>
           ) : null}
       </div>
          <div className="inp-inner-wrapper">
            <div className="inp-label">
                Company Name
            </div>
          <Field name="companyName" className="form-item-inp"/>
           {errors.companyName && touched.companyName ? (
             <div className='error'>{errors.companyName}</div>
           ) : null}
          </div>
        </div>
           <div className='input-group'>
         <div className="inp-inner-wrapper">
            <div className="inp-label">
                Street*
            </div>
         <Field name="street" className="form-item-inp"/>
           {errors.street && touched.street ? (
             <div className='error'>{errors.street}</div>
           ) : null}
         </div>
         <div className="inp-inner-wrapper">
            <div className="inp-label">
                Apt,suite, unit
            </div>
         <Field name="reseption" className="form-item-inp"/>
           {errors.reseption && touched.reseption ? (
             <div className='error'>{errors.reseption}</div>
           ) : null}
         </div>
           </div>
           <div className='input-group'>
           <div className="inp-inner-wrapper">
        <div className="inp-label">
            City*
        </div>
     <Field name="city" className="form-item-inp"/>
           {errors.city && touched.city ? (
             <div className='error'>{errors.city}</div>
           ) : null}
     </div>
           <div className="inp-inner-wrapper">
            <div className="inp-label">
                Postal code*
            </div>
           <Field name="postalCode" className="form-item-inp"/>
           {errors.postalCode && touched.postalCode ? (
             <div className='error'> {errors.postalCode}</div>
           ) : null}
           </div>
           </div>
           <div className="inp-inner-wrapper deliveryInstruction-wrapper ">
            <div className="inp-label">
                delivery instruction
            </div>
           <Field name="deliveryInstruction" className="form-item-inp deliveryInstruction"/>
           {errors.deliveryInstruction && touched.deliveryInstruction ? (
             <div className='error'>{errors.deliveryInstruction}</div>
           ) : null}
           </div>
          <div className="inp-inner-wrapper default-shipping" style={{marginBottom:"10px"}}>
          <Field
                type="checkbox"
                name="default_shipping"
                id="default_shipping" 
              />
              <label htmlFor="default_shipping" className="checkbox-label">
                Default Shipping Address
              </label>

          </div>

          <div className="inp-inner-wrapper default-billing">
          <Field
                type="checkbox"
                name="default_billing"
                id="default_billing" 
              />
              <label htmlFor="default_billing" className="checkbox-label">
                Default Billing Address
              </label>
          </div>
             
           
        <div className="btns">
        <button type="submit" className='save-btn' >Save</button>
           <button type='button' className='cansel-btn'  onClick={() => setOpen(false)}>Cansel</button>
        </div>
         </Form>
       )}
     </Formik>
  )
}

export default FormikForEdit