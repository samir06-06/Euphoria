import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "../formikForAddress/formikForAddress.scss"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
state:Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
phone: Yup.string()
.matches(genericPhoneRegex, 'Invalid Azerbaijan phone number') 
.required('Phone is required'),
postalCode: Yup.string()
    .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits') 
    .required('Required'),

});

const FormikForCheckout = () => {
  const navigate=useNavigate()
  const dispatch= useDispatch()
const handleSubmit=(values)=>{
   console.log(values)
}

  return (
    <Formik
       initialValues={{
         firstname: '',
         lastname: '',
         country: '',
         companyName: '',
         street: '',
         reseption: '',
         city: '',
         state:'',
         phone:'',
         postalCode:'',
        
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
                State*
            </div>
           <Field name="state" className="form-item-inp"/>
           {errors.state && touched.state ? (
             <div  className='error'> {errors.state}</div>
           ) : null}
           </div>
         </div>
           <div className='input-group'>
           <div className="inp-inner-wrapper">
            <div className="inp-label">
                Phone*
            </div>
           <Field name="phone" className="form-item-inp"/>
           {errors.phone && touched.phone ? (
             <div className='error'>{errors.phone}</div>
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
        
          
             
           
        <div className="btns" style={{ marginTop:"15px"}}>
        <button type="submit" className='save-btn'>Continue to Delivery</button>
        </div>
        <div className="inp-inner-wrapper default-billing" style={{width:"100%", marginTop:"20px"}}>
          <Field
                type="checkbox"
                name="default_billing"
                id="default_billing" 
              />
              <label htmlFor="default_billing" className="checkbox-label">
                Save my information for a faster checkout
              </label>
          </div>
         </Form>
       )}
     </Formik>
  )
}

export default FormikForCheckout