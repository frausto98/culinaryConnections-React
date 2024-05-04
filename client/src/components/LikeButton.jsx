import { useMutation, } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { LEAVE_LIKE } from "../utils/mutations";

import Auth from "../utils/auth"

const LikeButton = () => {

    const like = true
    const dislike = false

    const [buttonStatus, setButtonStatus] = useState(like)

    const switchButtonStatus = () => {
        if (buttonStatus == like) {
            setButtonStatus(dislike)
        } else {
            setButtonStatus(like)
        }
    }

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
                {buttonStatus ? (
                    <>
                        <button
                            onClick={leaveALike && switchButtonStatus}> Like </button>
                    </>
                ) : (
                    <>
                    {/* below set up code to have button remove the like */}
                        <button>  </button>
                    </>
                )}
                    
            </div>
        </>
    )

}

export default LikeButton