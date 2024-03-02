import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {LOGIN} from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [ userFormData, setUserFormData ] = useState({username: '', email: '', password: '' });
    const [ validated ] = useState(false);
    const [ showAlert, setShowAlert ] = useState(false);

    const [ login, {error} ] = useMutation(LOGIN);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value})
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropogation();
        // }

        try{
            const {data} = await login({
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
    
    return(
        <>
        
        </>
    );
}