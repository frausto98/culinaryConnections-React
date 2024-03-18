import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // // set state for alert
    // const [showAlert, setShowAlert] = useState(false);

    const [signUp, { error }] = useMutation(SIGNUP);

    const handleInputChange = (event) => {
        // it is my interpretation that the "name" referenced here is referencing the "name" attribute given on the "target (the html element)"
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await signUp({
                variables: {
                    ...userFormData
                }
            })
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <div className='form' id="signUpForm">
                <div className="formHeader">
                    
                </div>
                <div className="formInputs">
                    <form onSubmit={handleFormSubmit}>
                        <fieldset>
                            <legend>Sign Up</legend>
                            <div>
                                <label htmlFor="username">Username: </label>
                                <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder='username'
                                value={userFormData.username}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div>
                                <label htmlFor="email">Email: </label>
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder='email'
                                value={userFormData.email}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder='password'
                                value={userFormData.password}
                                onChange={handleInputChange}
                                required/>
                            </div>
                            <>
                                <button 
                                type='submit' 
                                disabled={!(userFormData.username && userFormData.email && userFormData.password)}>
                                    Submit
                                </button>
                            </>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
};

export default SignupForm