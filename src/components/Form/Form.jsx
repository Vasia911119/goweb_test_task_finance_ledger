import React from 'react';
import { Formik } from 'formik';
import {HandySvg} from 'handy-svg';
import iconError from '../../images/form/worning.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container, Title, Error, Wrapper, Input, Label, Button
} from './Form.styled';


const Form = () => {
  const notify = () => toast.success("Thank you! Your form submission has been received", {
    position: toast.POSITION.TOP_CENTER
  });
  
  return (
    <Container>
      <Title>Request Callback</Title>
      <Formik
        initialValues={{ name: '', email: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email =
              <Error>
                <HandySvg
                  src={iconError}
                  width="25"
                  height="25"
                />
                This is a required field
              </Error>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = <Error>
              <HandySvg
                src={iconError}
                width="25"
                height="25"
              />
              Invalid email address
            </Error>;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            notify();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <Wrapper>
              <Input type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name} 
                placeholder="Enter your name"/>
              {/* <Label htmlFor="name">Enter your name</Label> */}
              {errors.name && touched.name && errors.name}
            </Wrapper>
            <Wrapper>
              <Input type="email" name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} 
                placeholder="Enter email*"/>
                {/* <Label htmlFor="email">Enter email*</Label> */}
              {errors.email && touched.email && errors.email}
            </Wrapper>
            <p style={{margin: 0}}>
              <Button type="submit" disabled={isSubmitting}>Send</Button>
            </p>
              <ToastContainer/>     
          </form>
        )}
      </Formik>
    </Container>);
};

export default Form;