import Auth from '../utils/auth'
import { Link } from 'react-router-dom';

const styles = {
    tempStyle: {
        borderStyle: "dotted ",
        borderWidth: "2px",
        borderColor: "red",
        background: "lightgrey",
        color: "black",
        marginTop: "15px",
        marginBottom: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderRadius: "15px"
    }
}

const NavBar = () => {
    return (
        <div id="navBarComp" style={styles.tempStyle}>
            {Auth.loggedIn() ? (
                <>
                    <div>
                        <div>
                            <h1>Culinary Connections</h1>
                        </div>
                        <div>
                            <button onClick={Auth.logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <Link to="/login-signup">
                            <button>
                                Click here to Sign-Up or Log-in
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>

    )
}

export default NavBar;