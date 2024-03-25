import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import { useQuery, useMutation } from '@apollo/client';
import { RECIPES } from '../utils/queries';
import { ADD_RECIPE } from '../utils/mutations';

import RecipeList from '../components/RecipeList';

const MainPage = () => {

    const { loading, data } = useQuery(RECIPES);

    const recipes = data?.recipes || [];

    return (
        <div id="mainPage">
            <div className="mainTitle">
                <h1>
                    Home Page
                </h1>
            </div>
            {Auth.loggedIn() ? (
                <div className="mainBody">
                    {loading ? (
                        <div> loading... </div>
                    ) : (
                        <>
                        <Link className='linkBtn' to='/recipe-form'>Post Your Recipe Here!</Link>
                        <RecipeList
                            recipes={recipes}
                        />
                        </>
                    )}
                </div>
            ) : (
                <>
                    <Link className='linkBtn' to='/login-signup'>
                        <span>
                            Click here to be navigated to the Sign-Up/Login Form!
                        </span>
                    </Link>
                </>
            )}

        </div>

    )
}

export default MainPage;