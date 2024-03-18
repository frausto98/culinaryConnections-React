import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {


    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // const [ validated ] = useState(false);
    // const [ showAlert, setShowAlert ] = useState(false);

    const [login, { error }] = useMutation(LOGIN);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: {
                    ...userFormData
                }
            })
            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        })
    };

    return (
        <>

            <div className='form' id="loginForm">
                <div className="formHeader">
                    
                </div>
                <div className="formInputs">
                    <form>
                        <fieldset>
                            <legend>Login</legend>
                            <div>
                                <label htmlFor="username">Username: </label>
                                <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                value={userFormData.username}
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email: </label>
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={userFormData.email}
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                value={userFormData.password}
                                onChange={handleInputChange}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm