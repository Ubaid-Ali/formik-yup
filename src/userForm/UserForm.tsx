import React, { FormEvent, useRef, useState } from 'react'
import './userForm.css'


const UserForm: React.FC = () => {

    const [nameError, setNameError] = useState<string>("");
    const [ageError, setAgeError] = useState<string>("");

    const name: any = useRef();
    const age: any = useRef();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if (!name.current.value || !age.current.value) {
            return false
        }

        const _name = name.current.value;
        const _age = age.current.value;

        if (!_name) {
            setNameError("Please enter you name!");
        }
        else if (_name.length < 3 || _name.length > 20) {
            setNameError("Name should be greaterthan 2 \n and lessthan 20 characters");
        }

        if (!_age) {
            setAgeError("Please enter you age!");
        }
        else if (_age < 18 || _age > 60) {
            setAgeError("You can not fill the form");
        }

        console.log('_name', _name);
        console.log('_age', _age);
    }

    return (
        <div className="container">

            <h2>UserForm</h2>
            <h2>Getting the data ( Normally )</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" ref={name} type="text" required />
                    <div style={{ color: "red" }}> {nameError} </div>
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input id="age" ref={age} type="number" required />
                    <div style={{ color: "red" }} >{ageError}</div>
                </div>

                <div>
                    <button type="submit">Submbit</button>
                </div>

            </form>
        </div>
    )
}

export default UserForm;
