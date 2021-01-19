import React from 'react';
import { useFormik } from 'formik';


interface values_type {
    name: string;
    age: number;
};


const UserFormWithFormik = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0,
        },

        onSubmit: (values: values_type) => {
            console.log('values', values);
        },

        validate: (values: values_type) => {
            const error: any = {}

            // handle name error
            if (!values.name) {
                // formik.errors.name = "Name field is required"
                error.name = "Name field is required.";

            } else if (values.name.length < 3 || values.name.length > 15) {
                // formik.errors.name = "less than 15"
                error.name =
                    "Name should be greater than 2 and less then 15 characters."
            }

            if (!values.age || values.age === 0) {
                error.age = "Age is required."

            } else if (values.age < 10 || values.age > 60) {
                error.age = "Age should be 10 to 60"
            }

            return error
        },
    });


    return (
        <div className="container">

            <h2>UserFormWithFormik</h2>
            <h2>Getting the data <br /> With ( Formik Library )</h2>

            <form onSubmit={formik.handleSubmit}>

                {/* name container */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
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
                        value={formik.values.age}
                        onChange={formik.handleChange}
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

export default UserFormWithFormik;;;
