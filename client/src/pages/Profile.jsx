import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SINGLE_USER } from "../utils/queries";

const Profile = () => {

    const {username} = useParams();
    const { loading, data } = useQuery(SINGLE_USER, {
        variables: {username: username},
    })

    const userProf = data?.user || {}
    
    if (loading) {
        return <>Loading...</>
    }

    return (
        <>
        <h1> Welcome to {userProf.username}'s Profile! </h1>
        </>
    )
}

export default Profile