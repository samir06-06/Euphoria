import React, { useState , useEffect , useRef} from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./formikForP_info.scss"
import { updateProfile } from '../../redux/slice/UserSlice';
import { useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const FormikForPersonalInfoName = ({uname}) => {

  const dispatch=useDispatch()
  const [disp, setDisp] = useState(false); 
  const nameInputRef = useRef(null); 
  
  useEffect(() => {
    if (disp && nameInputRef.current) {
      nameInputRef.current.focus(); 
    }
  }, [disp]); 

  const handleSubmit = (values) => {
    dispatch(updateProfile({ name: values.name })).then(() => {
      setDisp(false);
    });
  };

  return (
   
     <Formik
       initialValues={{
         name: uname ? `${uname}` : ""
       }}
       validationSchema={SignupSchema}
       onSubmit={handleSubmit}
       
     >
       {({ errors, touched }) => (
         <Form className="form-element">
          <h4 className='inp-label'>Your Name</h4>
         <div className="inner-wrapper">
         <Field name="name"  innerRef={nameInputRef} 
            disabled={!disp}  className="inp-pInfo"/>
           {errors.name && touched.name ? (
             <div className='error'>{errors.name}</div>
           ) : null}
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

export default FormikForPersonalInfoName