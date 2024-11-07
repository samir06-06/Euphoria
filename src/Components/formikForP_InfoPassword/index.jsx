import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./../formikForP_InfoName/formikForP_info.scss";
import { updateProfile } from '../../redux/slice/UserSlice';
import { useDispatch } from 'react-redux';


const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters') 
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') 
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter') 
    .matches(/[0-9]/, 'Password must contain at least one number') 
    .matches(/[@#$%^&*()_+!.]/, 'Password must contain at least one special character') 
    .required('Password is required'), 
});

const FormikForPersonalInfoPassword = ({pass}) => {
  const dispatch=useDispatch()
  const [disp, setDisp] = useState(false);
  const passInputRef = useRef(null);

  useEffect(() => {
    if (disp && passInputRef.current) {
        passInputRef.current.focus();
    }
  }, [disp]);

  const handleSubmit = (values) => {
    dispatch(updateProfile({ password: values.password })).then(() => {
      setDisp(false);
    });
  };

  return (
    <Formik
      initialValues={{
        password: pass?`${pass}`:"", 
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="form-element">
          <h4 className='inp-label'>Password</h4>
          <div className="inner-wrapper">
            <Field
              name="password"
              type="password"
              innerRef={passInputRef}
              disabled={!disp}
              className="inp-pInfo"
            />
            {errors.password && touched.password ? (
              <div className='error'>{errors.password}</div>
            ) : null}
            
            <button
              type='button'
              onClick={() => setDisp(true)}
              style={{ display: disp ? 'none' : 'block' }}
              className='form-btn'
            >
              Change
            </button>
            
            <button
              type="submit"
              style={{ display: disp ? 'block' : 'none' }}
              className='form-btn'
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForPersonalInfoPassword;
