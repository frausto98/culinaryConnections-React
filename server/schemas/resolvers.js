//we import the User and Recipe models that we schemed up in the /Models folder
const { User, Recipe } = require('../models')
// we also import the sign token, and well as the AuthErr from the /Utils/Auth folder
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('recipes');
        },
        user: async (parent, {username}) => {
            return User.findOne({username}).populate('recipes');
        },
        recipes: async (parent, {username}) => {
            const params = username ? {username} : {};
            return Recipe.find(params).sort({createdAt: -1});
        },
        recipe: async (parent, {recipeId}) => {
            return Recipe.findOne({_id: recipeId});
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('recipes');
            }
            throw AuthenticationError
        }
    },

    Mutation: {

    }
}

module.exports = resolvers