import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import { useParams } from "react-router-dom";

const styles = {
    commentInfo: {
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

const CommentList = (comments) => {

    const {recipeId} = useParams();

    const [commentFormInput, setCommentFormInput] = useState({
        commentText: '',
    })

    const [activeElement, setActiveElement] = useState(false)

    // add  comment
    const [addComment] = useMutation(ADD_COMMENT)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentFormInput({ ...commentFormInput, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addComment({
                variables: {
                    ...commentFormInput,
                    recipeId: recipeId
                }
            })

            window.location.reload()

            setCommentFormInput({
                commentText: ''
            })
            
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    return (
        <>
            <div style={styles.commentInfo}>
                {comments.length ? (
                    <div>
                        {comments &&
                            comments.map((comment) => (
                                <div key={comment._id} className="comment">
                                    <div className="commentHeader">
                                        {comment.commentAuthor} | {comment.createdAt}
                                    </div>
                                    <div className="commentBody">
                                        {comment.commentText}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div style={styles.commentInfo}>
                        <span> No Comments... </span>
                    </div>
                )}
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Add  Comment:
                            <input
                                type="text"
                                name="commentText"
                                id="commentText"
                                placeholder="Add Comment Here..."
                                value={commentFormInput.commentText}
                                onChange={handleInputChange}
                                required />
                        </label>
                        <button
                            type="submit"
                            disabled={!(commentFormInput.commentText)}>
                            Submit Comment
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CommentList