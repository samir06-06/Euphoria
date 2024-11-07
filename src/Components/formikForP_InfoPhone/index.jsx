import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./../formikForP_InfoName/formikForP_info.scss";
import { updateProfile } from '../../redux/slice/UserSlice';
import { useDispatch } from 'react-redux';

const azerbaijanPhoneRegex = /^(050|055|077|070|051|099|010)\d{7}$/;

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(azerbaijanPhoneRegex, 'Invalid Azerbaijan phone number') 
    .required('Phone number is required'), 
});

const FormikForPersonalInfoPhone = ({phone}) => {
  const dispatch=useDispatch()
  const [disp, setDisp] = useState(false);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (disp && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [disp]);

  const handleSubmit = (values) => {
    dispatch(updateProfile({ phone: values.phone })).then(() => {
      setDisp(false);
    });
  };

  return (
    <Formik
      initialValues={{
        phone:  phone ? `${phone}` : "", 
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="form-element">
          <h4 className='inp-label'>Phone Number</h4>
          <div className="inner-wrapper">
            <Field
              name="phone"
              type="text"
              innerRef={phoneInputRef}
              disabled={!disp}
              className="inp-pInfo"
            />
            {errors.phone && touched.phone ? (
              <div className='error'>{errors.phone}</div>
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

export default FormikForPersonalInfoPhone;