import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpPage = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [signUp, { error }] = useMutation(SIGNUP);

    const handleInputChange = (event) => {
        // it is my interpretation that the "name" referenced here is referencing the "name" attribute given on the "target (the html element)"
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }

        try {

            const { data } = await signUp({
                variables: {
                    ...userFormData
                }
            })

            Auth.login(data.addUser.token);

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <div className='signUpForm'>
                
            </div>
        </>
    )
}