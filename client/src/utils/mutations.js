import {gql} from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
        username
      }
    }
  }
`

export const SIGNUP = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        firstName
        lastName
      }
    }
  }
`
export const ADD_RECIPE = gql`
mutation addRecipe($ingredientCount: Int, $ingredients: String, $stepCount: Int, $steps: String, $recipeName: String, $recipeDescription: String, $recipeDifficulty: Float) {
    addRecipe(ingredientCount: $ingredientCount, ingredients: $ingredients, stepCount: $stepCount, steps: $steps, recipeName: $recipeName, recipeDescription: $recipeDescription, recipeDifficulty: $recipeDifficulty) {
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
`

export const ADD_COMMENT = gql`
mutation addComment($recipeId: ID!, $commentText: String) {
    addComment(recipeId: $recipeId, commentText: $commentText) {
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
      comments {
        _id
        commentAuthor
        commentText
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

export const REMOVE_RECIPE = gql`
mutation removeRecipe($recipeId: ID!) {
    removeRecipe(recipeId: $recipeId) {
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
      comments {
        _id
        commentAuthor
        commentText
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

export const REMOVE_COMMENT = gql`
mutation removeComment($recipeId: ID!) {
    removeComment(recipeId: $recipeId) {
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
      comments {
        _id
        commentAuthor
        commentText
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

export const LEAVE_LIKE = gql`
mutation Mutation($recipeId: ID!, $like: Boolean) {
    leaveALike(recipeId: $recipeId, like: $like) {
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
      comments {
        _id
        commentAuthor
        commentText
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

// export const LEAVE_RATE = gql`

// `