import React, { useState , useEffect , useRef} from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./../formikForP_InfoName/formikForP_info.scss"
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/slice/UserSlice';

const SignupSchema = Yup.object().shape({
  email:  Yup.string().email('Invalid email').required('Required'),
});

const FormikForPersonalInfoEmail = ({email}) => {

    const dispatch=useDispatch()
    const [disp, setDisp] = useState(false); 
    const emailInputRef = useRef(null); 
    
    useEffect(() => {
      if (disp && emailInputRef.current) {
          emailInputRef.current.focus(); 
      }
    }, [disp]); 
 
    const handleSubmit = (values) => {
      dispatch(updateProfile({ email: values.email })).then(() => {
        setDisp(false);
      });
    };

  return (
    <Formik
    initialValues={{
      email: email?`${email}`:""
    }}
    validationSchema={SignupSchema}
    onSubmit={handleSubmit}
    
  >
    {({ errors, touched }) => (
      <Form className="form-element">
       <h4 className='inp-label'>email address</h4>
      <div className="inner-wrapper">
     
      <Field name="email" type="email" innerRef={emailInputRef} 
         disabled={!disp}  className="inp-pInfo"/>
        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
        <button type='button' onClick={()=>{
         setDisp(true)
        }} style={{display:disp?"none":"block"}} className='form-btn'>Change</button>
        <button type="submit" style={{display:disp?"block":"none"}} className='form-btn'>Save</button>
      </div>
      </Form>
    )}
  </Formik>
  )
}

export default FormikForPersonalInfoEmail