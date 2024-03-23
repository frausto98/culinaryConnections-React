import {gql} from '@apollo/client'

export const ME = gql`
query me {
    me {
      _id
      email
      username
      firstName
      lastName
      recipes {
        _id
        ingredientCount
        ingredients
        stepCount
        steps
        recipeName
        recipeDescription
        recipeDifficulty
        recipeAuthor
        createdAt
      }
    }
  }
`

export const SINGLE_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      email
      username
      firstName
      lastName
      recipes {
        _id
        ingredientCount
        ingredients
        stepCount
        steps
        recipeName
        recipeDescription
        recipeDifficulty
        recipeAuthor
        createdAt
      }
    }
  }
`

export const SINGLE_RECIPE = gql`
query recipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      _id
      recipeName
      ingredientCount
      ingredients
      stepCount
      steps
      recipeDescription
      recipeDifficulty
      recipeAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
      likes {
        _id
        like
        likedBy
      }
    }
  }
`

export const USERS = gql`
query user {
    user {
      _id
      email
      username
      firstName
      lastName
      recipes {
        _id
        ingredientCount
        ingredients
        stepCount
        steps
        recipeName
        recipeDescription
        recipeDifficulty
        recipeAuthor
        createdAt
      }
    }
  }
`

export const RECIPES = gql`
query recipes {
    recipes {
      _id
      recipeName
      ingredientCount
      ingredients
      stepCount
      steps
      recipeDescription
      recipeDifficulty
      recipeAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
      likes {
        _id
        like
        likedBy
      }
    }
  }
`