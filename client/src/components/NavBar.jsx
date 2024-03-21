import Auth from '../utils/auth'

const NavBar = () => {
    return (
        <div id="navBarComp">
            {Auth.loggedIn() ? (
                <>
                    <button onClick={Auth.logout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <h1>
                        Made by me! Adrian!
                    </h1>
                </>
            )}
        </div>

    )
}

export default NavBar;