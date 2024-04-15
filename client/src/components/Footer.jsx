import Auth from '../utils/auth'

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

const Footer = () => {
    return (
        <div id="footerComp" style={styles.tempStyle}>
            {Auth.loggedIn() ? (
                <>
                    <div>
                        <h1> This is my Footer </h1>
                    </div>
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