import { useMutation, } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { LEAVE_LIKE } from "../utils/mutations";

import Auth from "../utils/auth"

const LikeButton = () => {

    const disabled = true
    const abled = false

    const [buttonStatus, setButtonStatus] = useState(abled)
    const switchButtonStatus = () => {
        if (buttonStatus == abled) {
            setButtonStatus(disabled)
        } else {
            setButtonStatus(abled)
        }
    }

    const { recipeId } = useParams();

    const [leave_Like] = useMutation(LEAVE_LIKE)

    const leaveALike = async () => {
        try {
            await leave_Like({
                variables: {
                    recipeId: recipeId,
                    like: false
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
                    <>
                        <button
                            onClick={leaveALike && switchButtonStatus}> Like </button>
                    </>
            </div>
        </>
    )

}

export default LikeButton