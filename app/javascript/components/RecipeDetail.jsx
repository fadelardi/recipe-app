import React, { useContext } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { UserFiltersContext } from './Contexts'

function DetailImage(props) {
    const { title, url } = props
    return (
      <img 
        src={url}
        alt={`image of recipe ${title}`}
        width="500"
        />
    )
}

function IngredientList(props) {
    const { ingredients } = props
    const ingredientsList = ingredients.map(i => {
        return (
          <li key={i.id}>{i.name}</li>
        )
    })

    return (
        <ul >
            {ingredientsList}
        </ul> 
    )
}

function RecipeDetail(props) {
    const recipe = useLoaderData()
    const navigate = useNavigate()
    const { filters, setFilters, setResults } = useContext(UserFiltersContext)

    if (!recipe) return

    return (
        <>
            <Navbar setResults={setResults} filters={filters} setFilters={setFilters} />
            <main className="container">
                <a onClick={() => navigate(-1)}>
                  Go back to recipe list
                </a>
                <h1>{recipe['title']}</h1>
                <article>
                    <DetailImage url={recipe['image']} title={recipe['title']} />
                </article>
                <article>
                    <header>Ingredient List</header>
                    <IngredientList ingredients={recipe['ingredients']} />
                </article>
            </main>
        </>
    )
}

async function getRecipe(id) {
  try {
    const response = await fetch('/recipes/' + id)
    if (!response.ok) {
      return {}
    }

    return response.json()
  } catch (error) {
    console.error(error.message)
    return {}
  }
}

export async function loader({ params }) {
    const recipe = await getRecipe(params.id) 

    return recipe
}

export default RecipeDetail
