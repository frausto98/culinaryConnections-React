const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    ingredientCount: {
        type: Number,
        required: true,

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
    }
});

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe;