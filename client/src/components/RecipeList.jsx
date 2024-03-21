const RecipeList = ({recipes}) => {
    if (!recipes.length) {
        return <span> No Recipes... </span>
    }

    return (
        <>
            <div>
                <h4> Your Feed for Food </h4>
            </div>
            <div>
                {recipes &&
                recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe">
                        <h5 className="recipeHeader">
                            {recipe.recipeAuthor} <br/>
                            <span>
                                Cooked this post on {recipe.createdAt}
                            </span>
                        </h5>
                        <div>
                            <p>{recipe.recipeDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RecipeList