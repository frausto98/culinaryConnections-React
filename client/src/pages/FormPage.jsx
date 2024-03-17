import { useState } from 'react';
import { Link } from 'react-router-dom';

import SignupForm from '../components/SignUp';
import LoginForm from '../components/Login'

const FormPage = () => {

    const signUpInfo = true;
    const loginInfo = false;

    const [activeForm, setActiveForm] = useState(loginInfo)

    const switchActiveForm = () => {
        if (activeForm == signUpInfo) {
            setActiveForm(loginInfo)
        } else {
            setActiveForm(signUpInfo)
        }
    }

    //--------------------------
    // will keep the commented code below - was a cool concept, may try it again on a later proj
    //--------------------------

    // const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    // // const [ validated ] = useState(false);
    // // const [ showAlert, setShowAlert ] = useState(false);

    // var [signUp, { error }] = useMutation(SIGNUP);
    // var [login, { error }] = useMutation(LOGIN);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUserFormData({ ...userFormData, [name]: value })
    // }

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     if (activeForm == loginInfo) {
    //         try {
    //             const { data } = await login({
    //                 variables: {
    //                     ...userFormData
    //                 }
    //             })
    //             Auth.login(data.login.token);
    //         } catch (err) {
    //             console.error(err);
    //             setShowAlert(true);
    //         }

    //         setUserFormData({
    //             username: '',
    //             email: '',
    //             password: '',
    //         })
    //     } else {
    //         try {

    //             const { data } = await signUp({
    //                 variables: {
    //                     ...userFormData
    //                 }
    //             })

    //             Auth.login(data.addUser.token);

    //         } catch (err) {
    //             console.error(err);
    //             setShowAlert(true);
    //         }

    //         setUserFormData({
    //             username: '',
    //             email: '',
    //             password: '',
    //         });
    //     }
    // };

    return (
        <div id="formPage">
            <div className="formSwitcher">
                <button className="button formBtn" onClick={switchActiveForm }>Use this button to switch forms!</button>
            </div>
            <div className="formBody">
                {activeForm ? (
                    <>
                    <SignupForm/>
                    </>
                ) : (
                    <>
                    <LoginForm/>
                    </>
                )}
            </div>
        </div>

    )
}

export default FormPage;