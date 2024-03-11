import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

//import SignupForm from '../components/SignUp';
//import {LoginForm} from '../components/Login'

const FormPage = () => {

    
    const [activeForm, setActiveForm] = useState(false)

    const switchActiveForm = () => {
        if (activeForm === true) {
            setActiveForm(false)
        }
        setActiveForm(true)
    }

    return (
        <div id="formPage">
            <div className="formSwitcher">
                <button className="button formBtn" onClick={switchActiveForm}>Use this button to switch forms!</button>
            </div>
            <div className="formBody">
                {activeForm ? (
                    //<SignupForm />
                    <span>something wrong with the signupForm component</span>
                ) : (
                    //<LoginForm />
                    <span>something wrong with the loginForm component</span>
                )}
            </div>
        </div>

    )
}

export default FormPage;