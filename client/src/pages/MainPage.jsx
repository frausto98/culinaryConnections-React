import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { RECIPES } from '../utils/queries';

import RecipeList from '../components/RecipeList';

const styles = {
    recipeBox: {
        borderStyle: "dotted, dashed, solid, groove",
        borderWidth: "2px",
        borderColor: "white"
    }
}

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
                            styles={styles}
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