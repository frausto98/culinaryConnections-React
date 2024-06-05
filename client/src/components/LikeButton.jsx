import { useMutation, } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { LEAVE_LIKE, REMOVE_LIKE } from "../utils/mutations";

import Auth from "../utils/auth"

const LikeButton = () => {

    const like = true
    const dislike = false

    const [buttonStatus, setButtonStatus] = useState(like)

    useEffect(() => {
        const btnStatus = localStorage.getItem('buttonStatus');
    
        // If the value is found in storage, convert the string to a number and update state
        if (btnStatus) {
          setButtonStatus(
            parseInt(btnStatus)
          )
        }
      },[])

    // useEffect(() => {
    //     localStorage.setItem('buttonStatus', buttonStatus)
    // }, [buttonStatus]);

    // const switchButtonStatus = () => {
    //     if (buttonStatus == like) {
    //         setButtonStatus(dislike)
    //     } else {
    //         setButtonStatus(like)
    //     }
    // }

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

            setButtonStatus(dislike)
            localStorage.setItem('buttonStatus', buttonStatus)

        } catch (err) {
            console.log(err);
            alert(err)
        }
    }

    const [remove_Like] = useMutation(REMOVE_LIKE)

    const removeALike = async () => {
        try {
            await remove_Like({
                variables: {
                    recipeId: recipeId,
                    likedBy: Auth.getProfile().data.username
                }
            })

            setButtonStatus(like)
            localStorage.setItem('buttonStatus', buttonStatus)

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
                            onClick={leaveALike}> Like </button>
                    </>
                ) : (
                    <>
                        {/* below set up code to have button remove the like */}
                        <button
                            onClick={removeALike}> Liked! </button>
                    </>
                )}

            </div>
        </>
    )

}

export default LikeButton