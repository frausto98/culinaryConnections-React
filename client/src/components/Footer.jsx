import Auth from '../utils/auth'

const Footer = () => {
    return (
        <div id="footerComp">
            {Auth.loggedIn() ? (
                <>
                    <h1>
                        If I'm logged in, i can see this.
                    </h1>
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

export default Footer;