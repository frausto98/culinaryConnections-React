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
                            Click below for Sign-Up/Login page!
                        </p>
                        <Popup className="modal" id="homeModal" trigger={
                            <button id="homeModalButton">
                                Sign-Up/Login
                            </button>
                        }>
                            <div id="homeModalContent">
                                check this out?!?!?!
                            </div>
                        </Popup>
                    </>
                )}

            </div>
        </div>

    )
}

export default Home;