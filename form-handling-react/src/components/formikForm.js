import React from 'react';
import {useFormik} from 'formik';


const formikForm = () => {

    const formik = useFormik({
        initialValues: {
            email:'',
            userName:'',
            password:'',
        },

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
        <label htmkFor="name">Name:</label>
        <input
        type='text'
        id='name'
        name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        />

        <label htmlFor="email">Email:</label>
        <input
        type='email'
        id='email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        <label htmlFor="Password">Password:</label>
        <input 
        type='Password'
        id='password'
        name='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        
        />
        <button type="submit">Submit</button>


    </form>
  )
}

export default formikForm
