const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    ingredientCount: {
        type: Number,
        required: true,
        max: 40,

    },
    ingredients: {
        type: String,
        required: true,
    },
    stepCount: {
        type: Number,
        required: true,
    },
    steps: {
        type: String,
        required: true,
        max: 20,
    },
    recipeDescription:{
        type: String,
        required: true,
    },
    recipeDifficulty: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    recipeAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            recipeRate: {
                type: Number,
                min: 1,
                max: 10,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
    likes: [
        {
            like: {
                type: Boolean,
            },
            likedBy: {
                type: String,
            }
        },
    ],
});

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe;