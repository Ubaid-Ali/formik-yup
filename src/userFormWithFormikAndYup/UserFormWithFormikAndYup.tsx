import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


interface values_type {
    name: string;
    age: number;
};


const UserFormWithFormikAndYup = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0,
        },

        onSubmit: (values: values_type) => {
            console.log('values', values);
        },

        // Formik Validation
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name field is required")
                .min(3, "Name shoul be atleast 3 characters")
                .max(15),

            age: Yup.number()
                .required()
                .min(10)
                .max(60)
        })
    });


    return (
        <div className="container">

            <h2>UserFormWithFormikAndYup</h2>
            <h2>Getting the data <br /> With ( Formik and Yup Library  )</h2>

            <form onSubmit={formik.handleSubmit}>

                {/* name container */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        {...formik.getFieldProps("name")}
                        // value={formik.values.name}
                        // onChange={formik.handleChange}
                    />
                    {
                        formik.errors.name ?
                            <div style={{ color: "red" }}> {formik.errors.name} </div> :
                            null
                    }
                </div>

                {/* age container */}
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        id="age"
                        type="number"
                        {...formik.getFieldProps("age")}
                        // value={formik.values.age}
                        // onChange={formik.handleChange}
                    />
                    {
                        formik.errors.age ?
                            <div style={{ color: "red" }} >{formik.errors.age}</div> :
                            null
                    }
                </div>

                {/* submit button */}
                <div>
                    <button type="submit">Submbit</button>
                </div>

            </form>
        </div>
    )
}

export default UserFormWithFormikAndYup;
