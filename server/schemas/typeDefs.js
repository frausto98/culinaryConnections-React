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
    recipeDifficulty: Number
    recipeAuthor: String
    createdAt: String
    comments: [Comment]
}
`;

module.exports = typeDefs