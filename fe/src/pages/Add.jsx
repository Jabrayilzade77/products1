import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Add() {
  return (
    <>
     <Formik
       initialValues={{ image: '', title: '', price: '' }}
       validationSchema={Yup.object({
         image: Yup.string()
           .required('Required'),
         title: Yup.string()
           .required('Required'),
         price: Yup.number().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
        async function getPostProduct() {

            const res = await fetch("http://localhost:3000/myapp",{
                method:"post",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(values)
            })
            const data = await res.json()
        }

        getPostProduct()
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="price">price </label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </>
  )
}

export default Add