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
    ingredientCount: Number
    ingredients: String
    stepCount: Number
    steps: String
    recipeDescription: String
    recipeDifficulty: Number
    recipeAuthor: String
    createdAt: String
    comments: [Comment]!
    likes: [Like]!
}

type Comment {
    _id: ID
    commentText: String
    recipeRate: Number
    commentAuthor: String
    createdAt: String
}

type Like {
    _id: ID
    like: Boolean
    likedBy: String
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
    recipes(username: String): [Recipe]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(ingredientCount: Number, ingredients: String, stepCount: Number, steps: String, recipeDescription: String): Recipe
    addComment(recipeId: ID!, commentText: String): Recipe
    removeRecipe(recipeId: ID!): Recipe
    removeComment(recipeId: ID!, commentId: ID!) Recipe
    leaveALike(like: Boolean) Recipe
}
`;

module.exports = typeDefs