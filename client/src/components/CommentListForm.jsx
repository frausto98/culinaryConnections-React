import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";

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
                    ...commentFormInput
                }
            })
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    if (!comments.length) {
        return <span> No Comments... </span>
    }

    return (
        <>
            {comments &&
                comments.map((comment) => (
                    <div key={comment._id} className="comment" style={styles.commentInfo}>
                        <div className="commentHeader">
                            {comment.commentAuthor} | {comment.createdAt}
                        </div>
                        <div className="commentBody">
                            {comment.commentText}
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CommentList