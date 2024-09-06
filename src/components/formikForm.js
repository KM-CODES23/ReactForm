import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import './formik.css'
const FormikForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    passwordMatch: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    terms: Yup.bool().oneOf([true], 'Accepting terms is required'),
  });
    
  
  const handleSubmit = (values) => {
    console.log(values);
    alert('Form submitted!');
  };

  return (
    <div className='form'>
      <h2>Formik Form</h2>
      <Formik
        initialValues={{name: '', password: '', passwordMatch: '', email: '', terms: false}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="passwordMatch">Password Match:</label>
              <Field type="password" name="passwordMatch" />
              <ErrorMessage name="passwordMatch" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>
                <Field type="checkbox" name="terms" />
                Accept Terms and Conditions
              </label>
              <ErrorMessage name="terms" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;