import { Link, useParams, Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SINGLE_USER, ME } from "../utils/queries";

import Auth from '../utils/auth'
import RecipeList from "../components/RecipeList";

// for the profile jsx, i want to attempt a way to query both myself or another user on this one component
// i imported single_user, and me from utils/queries file
// i want the query to depend on whether or not the username matches the logged in user's name

const Profile = () => {

    // pull the username from params as set up in the recipe details file
    const { username } = useParams();
    // perform standard query but with a ternary operation
    const { loading, data } = useQuery(
        username ? SINGLE_USER : ME, {
        variables: { username: username },
    })

    // here we chekc if the returning data is ours first, then the single user after
    const userProf = data?.me || data?.user || {}

    // conditional here
    // in the Auth file, getProfile returns the logged user's data
    // if working, then Navigate from React Router Dom should work also
    if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
        return <Navigate to='/me' />
    }

    if (loading) {
        return <>Loading...</>
    }

    return (
        <>
            <div>
                <h1> Welcome to {username ? `${userProf.username}'s` : "Your"} Profile! </h1>
            </div>
            <div>
                <div>
                    <RecipeList
                        recipes={userProf.recipes}
                        username={userProf.username}
                    />
                </div>
            </div>
        </>
    )
}

export default Profile