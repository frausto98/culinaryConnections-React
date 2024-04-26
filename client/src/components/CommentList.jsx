import { useQuery } from "@apollo/client";
import { SINGLE_RECIPE } from "../utils/queries";
import { useParams } from "react-router-dom";

const CommentList = () => {

    const { recipeId } = useParams();

    const { loading, data } = useQuery(SINGLE_RECIPE, {
        variables: { recipeId: recipeId },
        pollInterval: 500
    })

    const comments = data?.recipe.comments

    if (!comments.length) {
        return (
            <>
                <div style={styles.commentInfo}>
                    <div>
                        <span> No Comments...  </span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={styles.commentInfo}>
                <div>
                    {comments &&
                        comments.map((comment) => (
                            <div key={comment._id} className="comment">
                                <div className="commentHeader">
                                    <h4>{comment.commentAuthor} | {comment.createdAt}</h4>
                                </div>
                                <div className="commentBody">
                                    <p>{comment.commentText}</p>
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