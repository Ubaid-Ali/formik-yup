import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase'
import { createStyles } from '@material-ui/core';


interface values_type {
    name: string;
    age: number;
}

const UserFormWithFormikMaterialUI = () => {

    const styles = createStyles({
        btn: {
            padding: '5px',
            color: "blue",

        }
    });

    return (
        <div>
            <h2>UserFormWithFormikMaterialUI</h2>
            <h2>Getting the data <br /> With ( Formik Yup Library in ContextAPI Style  )</h2>

            <Formik
                initialValues={{ name: "", age: 0 }}

                onSubmit={(values: values_type) => {
                    console.log('values', values)
                }}

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required("Name field is required")
                            .min(3, "Name shoul be atleast 3 characters")
                            .max(15),

                        age: Yup.number()
                            .required()
                            .min(10)
                            .max(60)
                    })
                }
            >
                {
                    (formik) => (
                        // formik elements / tags
                        <Form className="form">

                            <div className="name-container">
                                <label htmlFor="name">Name: </label>
                                {/* <TextField label="Enter Name" variant="outlined" /> */}
                                <Field type="text" as={TextField} variant="outlined" label="Enter Name" name="name" id="name" />

                                <br />
                                <ErrorMessage name="name" render={(err_msg) => (
                                    <span style={{ color: "red" }} >{err_msg}</span>
                                )} />

                            </div>

                            <div className="age-container">
                                <label htmlFor="age">Age: </label>
                                <Field type="number" name="age" id="age" as={TextField} variant="filled" label="Enter Age" />
                                <br />
                                <ErrorMessage name="age" />
                            </div>

                            <div>
                                <ButtonBase type="submit" >
                                    SUBMIT
                                </ButtonBase>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default UserFormWithFormikMaterialUI;
