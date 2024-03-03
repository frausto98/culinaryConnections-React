import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import Auth from '../utils/auth';

import '../styles/Home.css'

const Home = () => {

    const [showModal, setShowModal] = useState(false)

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

                        <Popup className="modal" id="homeModal" trigger={
                            <button className="modalTrigger" id="homeModalTrigger">
                                Form is Here
                            </button>
                        }>
                            <div className="modalCard" id="homeModalCard" defaultActiveKey="login">
                                <div className="preferenceTab" id="homeModalTab">
                                    <h3>
                                        Sign Up
                                    </h3>
                                    <h3>
                                        Log In
                                    </h3>
                                </div>
                                <div 
                                className="modalBody" 
                                id="homeModalBody" 
                                show={showModal}
                                onHide={() => setShowModal(false)}
                                >
                                    <div className="bodyContent" id="homeBodyContent">
                                        <div className="bodyWindow" id="signUpWindow">
                                            {/* Put <LoginForm/> Here */}
                                        </div>
                                        <div className="bodyWindow" id="logInWindow">
                                            {/* Put <SignupForm/> Here */}
                                        </div>
                                    </div>
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