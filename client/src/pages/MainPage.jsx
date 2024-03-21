import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { RECIPES } from '../utils/queries';

const MainPage = () => {

    const {loading, data} = useQuery(RECIPES);

    return (
        <div id="mainPage">
            <div className="mainTitle">
                <h1>
                    Home Page
                </h1>
            </div>
            <div className="mainBody">
                {Auth.loggedIn() ? (
                    <>
                        <div>
                            <p>
                                Please click below to logout.
                            </p>
                        </div>
                        <div>
                            <button onClick={Auth.logout}>
                                Logout
                            </button>
                        </div>
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

export default MainPage;