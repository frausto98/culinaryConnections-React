import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import '../styles/Home.css'

const styles = {
    outlineObj: {

        borderStyle: "dotted ",
        borderWidth: "2px",
        borderColor: "red",
        borderRadius: "15px"

    }
}

const Home = () => {

    return (
        <div id="homePage" style={styles.outlineObj}>
            <div className="homeTitle" style={styles.outlineObj}>
                <h1>
                    Culinary Connections
                </h1>
            </div>
            <div className="homeBody" style={styles.outlineObj}>
                {Auth.loggedIn() ? (
                    <>
                        <div>
                            <p>
                                It looks like you may be logged in, already!
                                Please click below to continue.
                            </p>
                        </div>
                        <div>
                            <Link className='linkBtn' to='/home' style={styles.outlineObj}>
                                Home
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <Link className='linkBtn' to='/login-signup' style={styles.outlineObj}>
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