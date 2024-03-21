import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { RECIPES } from '../utils/queries';

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
            <div className="mainBody">
                {loading ? (
                    <div> loading... </div>
                ) : (
                    <RecipeList
                    recipes = {recipes}
                    />
                )}
            </div>
        </div>

    )
}

export default MainPage;