const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    recipes: [Recipe]
    friends: [User]
}

type Recipe {
    _id: ID
    ingredientCount: Int
    ingredients: String
    stepCount: Int
    steps: String
    recipeName: String
    recipeDescription: String
    recipeDifficulty: Float
    recipeAuthor: String
    createdAt: String
    comments: [Comment]!
    likes: [Like]!
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Like {
    _id: ID
    like: Boolean
    likedBy: String
}

type Rate {
    _id: ID
    rate: Float
    ratedBy: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    user(username: String!): User
    users: [User]
    recipe(recipeId: ID!): Recipe
    recipes: [Recipe]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!, username: String!): Auth
    addRecipe(ingredientCount: String, ingredients: String, stepCount: String, steps: String, recipeName: String, recipeDescription: String, recipeDifficulty: String): Recipe
    addComment(recipeId: ID!, commentText: String): Recipe
    removeRecipe(recipeId: ID!): Recipe
    removeComment(recipeId: ID!, commentId: ID!): Recipe
    leaveALike(recipeId: ID!, like: Boolean): Recipe
    leaveARate(recipeId: ID!, rate: Float): Recipe
}
`;

module.exports = typeDefs