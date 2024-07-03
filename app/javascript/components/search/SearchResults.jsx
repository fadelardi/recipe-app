import React from 'react'
import Recipe from './SearchResultRecipe'

function SearchResults(props) {
    const { results } = props 

    if (results === null) return

    if (!results.length) {
        return <NoResultsFound />
    }


    const recipeList = results.map(recipe => {
        return <Recipe
            id={recipe['id']}
            key={recipe['id']}
            title={recipe['title']}
            image={recipe['image']}
            cookTime={recipe['cook_time']}
            prepTime={recipe['prep_time']}
        />
    });

    return (
        <>
            <section>
                <header>Here are some recipes we found...</header>
            </section>
            {recipeList}
        </>
    );
}

function NoResultsFound() {
    return (
        <article>
          <header><i className="fa-solid fa-face-sad-cry"></i> No recipes came up!</header>
            <p>It seems we have no recipe with those ingredients</p>
            <p>Please <a href="/">try again</a>! We're sure you'll find something else.</p>
          <footer>
            Or maybe try some categories from the main menu!
          </footer>
        </article>
    )
}

export default SearchResults
