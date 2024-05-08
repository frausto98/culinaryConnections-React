import { useQuery } from "@apollo/client";
import { SINGLE_RECIPE } from "../utils/queries";
import { useParams } from "react-router-dom";

import { REMOVE_COMMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

const styles = {
    commentInfo: {
        borderStyle: "dotted ",
        borderWidth: "2px",
        borderColor: "red",
        background: "white",
        color: "black",
        marginTop: "15px",
        marginBottom: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderRadius: "15px"
    }
}

const CommentList = () => {

    const { recipeId } = useParams();

    const { loading, data } = useQuery(SINGLE_RECIPE, {
        variables: { recipeId: recipeId }
    })

    const comments = data?.recipe.comments

    const authUser = Auth.loggedIn() && Auth.getProfile().data.username == comments.commentAuthor

    const [ removeComment ] = useMutation(REMOVE_COMMENT)

    const removeAComment = async (e) => {
        const { value } = e.target;

        try {
            await removeComment({
                variables: {
                    recipeId: recipeId,
                    commentId: value
                }
            })
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    if (!comments.length) {
        return (
            <>
                <div>
                    <div style={styles.commentInfo}>
                        <span> No Comments...  </span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div >
                <div>
                    {comments &&
                        comments.map((comment) => (
                            <div key={comment._id} className="comment" style={styles.commentInfo}>
                                <div className="commentHeader">
                                    <h4>{comment.commentAuthor} | {comment.createdAt}</h4>
                                </div>
                                <div className="commentBody">
                                    <p>{comment.commentText}</p>
                                </div>
                                <div>
                                {authUser ? (
                                        <>
                                        <button
                                        value={comment._id}
                                        onClick={removeAComment}> Remove Comment </button>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )

}

export default CommentList