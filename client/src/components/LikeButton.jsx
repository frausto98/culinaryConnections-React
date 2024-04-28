import { useMutation, } from "@apollo/client";
import { useParams } from "react-router-dom";

import { LEAVE_LIKE } from "../utils/mutations";

import Auth from "../utils/auth"

const LikeButton = () => {

    const { recipeId } = useParams();

    const [leave_Like] = useMutation(LEAVE_LIKE)

    const leaveALike = async () => {
        try {
            await leave_Like({
                variables: {
                    recipeId: recipeId,
                    like: true
                }
            })
        } catch (err) {
            console.log(err);
            alert(err)
        }
    }

    return (
        <>
            <div>
                <button
                onClick={leaveALike}> Like </button>
            </div>
        </>
    )

}

export default LikeButton