import {useState} from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'

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
                <p>
                    Click below for Sign-Up/Login page!
                </p>
                <button>
                    Sign-Up/Login
                </button>
            </div>
        </div>

    )
}

export default Home;