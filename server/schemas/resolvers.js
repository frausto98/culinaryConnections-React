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
        addUser: async ( parent, {username, email, password }) => {
            const user = await User.create({username, email, password });
            const token = signToken(user);
            return {token, user}
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if(!user) {
                throw AuthenticationError
            }
            const correctPW = await user.isCorrectPassword(password);
            if(!correctPW) {
                throw AuthenticationError
            }
            const token = signToken(user)
            return {token, user};
        },
        addRecipe: async (parent, {ingredientCount, ingredients, stepCount, steps, recipeDescription, recipeDifficulty}, context) => {
            if(context.user) {
                const recipe = await Recipe.create({
                    ingredientCount,
                    ingredients,
                    stepCount,
                    steps,
                    recipeDescription,
                    recipeDifficulty,
                    recipeAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: { recipes: recipe._id}}
                );
                return recipe;
            }
            throw AuthenticationError;
            ('Log in to add a Recipe!')
        },
        addComment: async (parent, { recipeId, commentText }, context) => {
            if(context.user) {
                //findOneAndUpdate takes a ( filter, updateOpperator, and altOptions ) as args
                return Recipe.findOneAndUpdate(
                    { _id: recipeId },
                    {
                        $addToSet: {
                            comments: { commentText, commentAuthor: context.user.username },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    },
                );
            }
            throw AuthenticationError;
        },
        removeRecipe: async ( parent, { recipeId }, context ) => {
            if (context.user) {
                const recipe = await Recipe.findOneAndDelete(
                    {
                        _id: recipeId,
                        thoughtAuthor: context.user.username
                    },
                );
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $pull: { recipes: recipe._id }
                    },
                );
                return recipe;
            }
            throw AuthenticationError;
        },
    },
}

module.exports = resolvers