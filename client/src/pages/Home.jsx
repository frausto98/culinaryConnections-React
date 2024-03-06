import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import Auth from '../utils/auth';

import LoginForm from '../components/Login';
import SignupForm from '../components/SignUp';

import '../styles/Home.css'

const Home = () => {

    // const [open, setOpen] = useState(false)
    // const closeModal = () => setOpen(false)

    return (
        <div id="homePage">
            <div className="homeTitle">
                <h1>
                    Culinary Connections
                </h1>
            </div>
            <div className="homeBody">
                {Auth.loggedIn() ? (
                    <>
                        <p>
                            It looks like you may be logged in, already!
                            Please click below to continue.
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            Click below for Sign-Up/Login Form!
                        </p>

                        {/* below is the reactjs-popup.
                        The entire overlay has its own set of classNames and Ids for each HTML Element */}

                        <Popup className="modal" id="homeModal"
                            trigger={
                                <button className="modalTrigger" id="homeModalTrigger" >
                                    Form is Here
                                </button>
                            }
                            modal
                        >
                            <div className="modalCard" id="homeModalCard">
                                <div className="modalHeader" id="homeModalHeader">
                                    <Popup trigger={
                                        <button> Sign Up </button>
                                    }>
                                        <div className="modalBody" id="homeModalBody" >
                                            <div className="bodyContent" id="homeBodyContent">
                                                <div className="bodyWindow" id="signUpWindow">
                                                    
                                                    <span>uhhhh??</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Popup>
                                    <Popup trigger={
                                        <button> Log In </button>
                                    }>
                                        <div className="modalBody" id="homeModalBody" >
                                            <div className="bodyContent" id="homeBodyContent">
                                                <div className="bodyWindow" id="logInWindow">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>

                            </div>
                        </Popup>

                        {/* --------------------- */}

                    </>
                )}

            </div>
        </div>

    )
}

export default Home;