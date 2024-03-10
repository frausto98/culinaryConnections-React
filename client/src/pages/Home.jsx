import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import Auth from '../utils/auth';

import Modal from '../components/Modal';
import LoginForm from '../components/Login';
import SignupForm from '../components/SignUp';

import '../styles/Home.css'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    

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
                        <>

                            <button className="modalTrigger" id="homeModalTrigger" onClick={() => setIsOpen(true)}>
                                Form is Here
                            </button>
                            <Modal open={isOpen} onClose={() => setIsOpen(false)}>

                                Hello World

                            </Modal>



                        </>

                        {/* below is the reactjs-popup.
                        The entire overlay has its own set of classNames and Ids for each HTML Element */}



                        {/* --------------------- */}

                    </>
                )}

            </div>
        </div>

    )
}

export default Home;