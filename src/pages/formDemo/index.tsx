import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

function SignUpFrom() {


    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("required").min(4, "must >= 4 char"),
            email: Yup.string().required("required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "please enter valid email"),
            password: Yup.string().required("required"),
            confirmPassword: Yup.string().required("required").oneOf([Yup.ref("password"), null], "password not match"),
            phone: Yup.string().required("required")
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })

    return (
        <section>
            <form className='infoform' onSubmit={formik.handleSubmit}>
                <label> Name</label>
                <input type="text" id='name' name='name' placeholder='Enter name' value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name && (<p className='errorMsg'>{formik.errors.name}</p>)}
                <label> Email Address</label>
                <input type="email" id='email' name='email' placeholder='Enter Email Address' value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && (<p className='errorMsg'>{formik.errors.email}</p>)}
                <label> Phone Number</label>
                <input type="text" id='phone' name='phone' placeholder='Enter Phone Number' value={formik.values.phone} onChange={formik.handleChange} />
                {formik.errors.phone && (<p className='errorMsg'>{formik.errors.phone}</p>)}
                <label> password</label>
                <input type="text" id='password' name='password' placeholder='Enter password' value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password && (<p className='errorMsg'>{formik.errors.password}</p>)}
                <label>Confirm password</label>
                <input type="text" id='confirmPassword' name='confirmPassword' placeholder='Confirm password' value={formik.values.confirmPassword} onChange={formik.handleChange} />
                {formik.errors.confirmPassword && (<p className='errorMsg'>{formik.errors.confirmPassword}</p>)}
                <button type='submit'>Continue</button>
            </form>
        </section>
    );
}

export default SignUpFrom;