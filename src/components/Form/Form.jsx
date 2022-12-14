import * as Yup from 'yup';
import { Formik, Field as NetlifyInput } from 'formik';
import {HandySvg} from 'handy-svg';
import iconError from '../../images/form/worning.svg';
import {
  Container, Title, Error, Wrapper, Input, Button
} from './Form.styled';


const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short!').max(50, 'Name is too long!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('This is a required field!'),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = () => {

  return (
    <>
      <Container>
        <Title>Request Callback</Title>
          <Formik
            initialValues={{
              name: '',
              email: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
        fetch("/", {                                 
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            alert('Success!')
            setSubmitting(false)
          })
          .catch(error => {
            alert('Error: Please Try Again!')                            
            setSubmitting(false)
          })
      }}
          >
            {({ errors, touched, isSubmitting, handleChange, handleBlur }) => (
              <form method="post">
                <NetlifyInput
                  type="hidden"
                  name="form-name"
                  value="contact"
                />
                <Wrapper>
                <Input
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  title="Enter your name"
                />
                {errors.name && touched.name && (
                  <Error>
                    <HandySvg
                      src={iconError}
                      width="25"
                     height="25"
                     />
                     This is a required field
                    </Error>
                  )}
                </Wrapper>
                <Wrapper>
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter email*"
                  title="Enter email*"
                />
                {errors.email && touched.email && (
                  <Error>
                    <HandySvg
                      src={iconError}
                      width="25"
                     height="25"
                     />
                     This is a required field
                    </Error>
                  )}
              </Wrapper>
              <div data-netlify-recaptcha="true"></div>
                <p style={{margin: 0}}>
                  <Button type="submit" disabled={isSubmitting}>Send</Button>
                </p>
              </form>
            )}
          </Formik>
      </Container>
    </>
  );
}

export default Form;