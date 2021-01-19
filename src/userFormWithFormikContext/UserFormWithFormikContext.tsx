import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface values_type {
    name: string;
    age: number;
};

const UserFormWithFormikContext: React.FC = () => {
    return (
        <div>
            <h2>UserFormWithFormikContext</h2>
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
                                <Field type="text" name="name" id="name" />
                                <br />
                                <ErrorMessage name="name" render={(err_msg) => (
                                    <span style={{ color: "red" }} >{err_msg}</span>
                                )} />

                            </div>

                            <div className="age-container">
                                <label htmlFor="age">Age: </label>
                                <Field type="number" name="age" id="age" />
                                <br />
                                <ErrorMessage name="age" />
                            </div>

                            <div>
                                <button type="submit">
                                    SUBMIT
                                </button>
                            </div>
                        </Form>

                        //  normal elements / tags
                        // <form onSubmit={formik.handleSubmit}>

                        //     {/* name container */}
                        //     <div>
                        //         <label htmlFor="name">Name:</label>
                        //         <input
                        //             id="name"
                        //             type="text"
                        //             {...formik.getFieldProps("name")}
                        //         // value={formik.values.name}
                        //         // onChange={formik.handleChange}
                        //         />
                        //         {
                        //             formik.errors.name ?
                        //                 <div style={{ color: "red" }}> {formik.errors.name} </div> :
                        //                 null
                        //         }
                        //     </div>

                        //     {/* age container */}
                        //     <div>
                        //         <label htmlFor="age">Age:</label>
                        //         <input
                        //             id="age"
                        //             type="number"
                        //             {...formik.getFieldProps("age")}
                        //         // value={formik.values.age}
                        //         // onChange={formik.handleChange}
                        //         />
                        //         {
                        //             formik.errors.age ?
                        //                 <div style={{ color: "red" }} >{formik.errors.age}</div> :
                        //                 null
                        //         }
                        //     </div>

                        //     {/* submit button */}
                        //     <div>
                        //         <button type="submit">Submbit</button>
                        //     </div>

                        // </form>
                    )
                }

            </Formik>
        </div>
    )
}

export default UserFormWithFormikContext;