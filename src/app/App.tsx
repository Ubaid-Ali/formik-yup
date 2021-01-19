import React from 'react';
import './app.css'
// import UserForm from '../userForm/UserForm';
// import UserFormWithFormik from '../userFormWithFormik/UserFormWithFormik';
// import UserFormWithFormikAndYup from '../userFormWithFormikAndYup/UserFormWithFormikAndYup';
// import UserFormWithFormikContext from '../userFormWithFormikContext/UserFormWithFormikContext';
import UserFormWithFormikMaterialUI from '../userFormWithFormikMaterialUI/UserFormWithFormikMaterialUI';



const App: React.FC = (): any => {
    return (
        <div className="app">

            {/* <UserForm /> */}
            {/* <UserFormWithFormik /> */}
            {/* <UserFormWithFormikAndYup /> */}
            {/* <UserFormWithFormikContext /> */}
            <UserFormWithFormikMaterialUI />

        </div>
    )
}

export default App;