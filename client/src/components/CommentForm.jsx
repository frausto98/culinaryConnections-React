import { useMutation } from "@apollo/client"
import { ADD_COMMENT } from "../utils/mutations"
import { useParams } from "react-router-dom"
import { useState } from "react"

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

const CommentForm = () => {

    const { recipeId } = useParams();

    const [commentFormInput, setCommentFormInput] = useState({
        commentText: '',
    })

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
            <div>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Add  Comment:
                        <br/>
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
        </>
    )
}

export default CommentForm