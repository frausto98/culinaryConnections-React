import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import '../styles/Home.css'

const Home = () => {

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
                        <Link className='linkBtn' to='/login-signup'>
                            <span>
                                Click here to be navigated to the Sign-Up/Login Form!
                            </span>
                        </Link>
                    </>
                )}

            </div>
        </div>

    )
}

export default Home;