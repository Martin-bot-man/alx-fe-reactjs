import React from 'react';
import {useFormik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const formikForm = () => {

    const formik = useFormik({
        initialValues: {
            email:'',
            name:'',
            password:'',
        },
        validationSchema:Yup.object({
            name: Yup.string()
            .min(2, 'Name must be atleast 2 characters')
            .required('Required'),
            email:Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password:Yup.string()
            .min(8, 'Password is required')
            .matches(/[0-9]/, 'Password must contain at least one digit')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Passwoed must contain at least one uppercase letter'),
            passwordConfirmation :Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null,2));

            fetch('/api/submit', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(values),
            })
            .then(response => {
                if(response.ok){
                    alert('Form submitted successfully!');
                    formik.resetForm();
                }
                else{
                    return response.json().then(errorData => {
                        alert('Error submitting form:' + errorData.message);
                    });
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('An error occured. Please try again later.')
            })
        },

    })
  return (
    <form onSubmit={formik.handleSubmit}>
       <div>
       <label htmkFor="name">Name:</label>
        <Field
        type='text'
        id='name'
        name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        />
        <ErrorMessage name="name" component="div" className="error"/>
       </div>

        

    <div>
        <label htmlFor="email">Email:</label>
        <Field
        type='email'
        id='email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
                <ErrorMessage name="email" component="div" className="error" />

    </div>
      <div>
      <label htmlFor="Password">Password:</label>
        <Field
        type='Password'
        id='passwordConfirmation'
        name='passwordConfirmation'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordConfirmation}
        
        />
                <ErrorMessage name="password" component="div" className="error" />

      </div>
        
        <button type="submit">Submit</button>


    </form>
  )
}

export default formikForm
