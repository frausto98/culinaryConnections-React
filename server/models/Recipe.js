const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const recipeSchema = new Schema({
    ingredientCount: {
        type: String,
        required: true,
        max: 40,

    },
    ingredients: {
        type: String,
        required: true,
    },
    stepCount: {
        type: String,
        required: true,
    },
    steps: {
        type: String,
        required: true,
        max: 20,
    },
    recipeName: {
        type: String,
        minLength: 1,
        maxLength: 120,
    },
    recipeDescription:{
        type: String,
        minLength: 1,
        maxLength: 750,
        required: true,
    },
    recipeDifficulty: {
        type: String,
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
                minLength: 1,
                maxLength: 280,
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
    rates: [
        {
            rate: {
                type: Number,
                min: 1,
                max: 10,
            },
            ratedBy: {
                type: String
            },
        },
    ],
});

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe;