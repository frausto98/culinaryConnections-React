import {gql} from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!, $username: String!) {
    login(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        email
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
        firstName
        lastName
      }
    }
  }
`
export const ADD_RECIPE = gql`
mutation addRecipe($ingredientCount: String, $ingredients: String, $stepCount: String, $steps: String, $recipeName: String, $recipeDescription: String, $recipeDifficulty: String) {
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
mutation removeComment($recipeId: ID!, $commmentId: ID!) {
    removeComment(recipeId: $recipeId, commentId: $commentId) {
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

export const REMOVE_LIKE = gql`
mutation removeLike($recipeId: ID!, $likeId: ID!) {
  removeLike(recipeId: $recipeId, likeId: $likeId) {
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