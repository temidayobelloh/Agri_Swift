import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './sign-up.css';

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    retypePassword: ''
  });

  const validationSchema = Yup.object({
    fullname: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    retypePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Retype Password is required')
  });

  const handleSubmit = (values) => {
    console.log(values); // You can handle form submission here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="sign-up-wrapper">
    <div className='sign-up-container'>
    <label>
            <input
              type="radio"
              value="Your Details"
              checked={selectedOption === 'Your Details'}
              onChange={() => handleOptionChange('Your Details')}
            />
            Your Details
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Email Verification"
              checked={selectedOption === 'Email Verification'}
              onChange={() => handleOptionChange('Email Verification')}
            />
            Email Verification
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Add your Work Details"
              checked={selectedOption === 'Add your Work Details'}
              onChange={() => handleOptionChange('Add your Work Details')}
            />
            Add your Work Details
          </label>
        <button className="sign-up-button">Already have an account?</button>
        </div>
    <div className='second-sign-up-container'>
    <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="sign-up">
        <h3>Sign Up</h3>
        <div className="form-fields">
          <label htmlFor="fullname">Full name:</label>
          <Field type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="John Champion" />
          <ErrorMessage name="fullname" component="div" className="error-message" />

          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="E.g JohnChampion@email.com" />
          <ErrorMessage name="email" component="div" className="error-message" />

          <label htmlFor="phoneNumber">Number:</label>
          <Field type="number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="08123456789" />
          <ErrorMessage name="phoneNumber" component="div" className="error-message" />

          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Min of 8 characters" />
          <ErrorMessage name="password" component="div" className="error-message" />

          <label htmlFor="retypePassword">Retype Password:</label>
          <Field type="password" id="retypePassword" name="retypePassword" value={formData.retypePassword} onChange={handleChange} placeholder="Retype your password" />
          <ErrorMessage name="retypePassword" component="div" className="error-message" />
        </div>
        
        <button type="submit">Sign Up</button>
        <h4>Or</h4>
        <button>Sign Up with Google</button>
      </Form>
    </Formik>
    </div>
    </div>
  )
}

export default SignUp;
