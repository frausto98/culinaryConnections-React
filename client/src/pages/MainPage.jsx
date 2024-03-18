import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const MainPage = () => {

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
                        <h1>YOU SHOULD NOT BE HERE</h1>
                    </>
                )}

            </div>
        </div>

    )
}

export default MainPage;