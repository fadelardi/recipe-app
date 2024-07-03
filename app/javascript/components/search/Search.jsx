import React from 'react'
import IngredientList from "./IngredientList"

export async function searchRecipesBy(params = {}) {
  try {
    const { ingredientList, category } = params
    let searchParams = []

    if (ingredientList) searchParams = ingredientList.map(i => `ingredient_list%5B%5D=${decodeURI(i)}`)
    if (category) searchParams.push('category=' + decodeURI(category))

    const response = await fetch('/recipes.json' + '?' + searchParams.join('&'))
    if (!response.ok) {
      return []
    }

    return response.json()
  } catch (error) {
    console.error(error.message)
    return []
  }
}

function Search(props) {
  const {
    newIngredient,
    setNewIngredient,ingredientsList,
    setIngredientsList,
    setResults,
    category,
    resetCategory,
  } = props
  
  const addIngredientOnClick = () => {
    if (newIngredient) {
      setIngredientsList([...ingredientsList, newIngredient])
      setNewIngredient('')
    }
  }

  const findRecipesOnClick = () => {
    setResults([])
    searchRecipesBy({ ingredientsList, category })
      .then(recipes => {
        setResults(recipes) 
      })
      .catch(error => {
        console.error(error)
      }).finally(() => {
        setNewIngredient('')
      })
  }

  return (
    <form>
      <section>
          <header>
            <i className="fa-solid fa-magnifying-glass"></i>&nbsp;
            Recipe Finder
          </header>
          <fieldset role="group">
            <input 
              type="text"
              onChange={e => setNewIngredient(e.target.value)}
              placeholder="ADD ingredients to the LIST, then FIND RECIPES..."
              value={newIngredient}
            />
            <button type="button" onClick={addIngredientOnClick}>Add</button>
          </fieldset>
            <CategoryDisclaimer category={category} resetCategory={resetCategory} />
          <footer>
            <button type="button" onClick={findRecipesOnClick} disabled={!ingredientsList.length}>Find Recipes</button>
        </footer>
      </section>
      <IngredientList list={ingredientsList} setList={setIngredientsList} />
    </form>
  )
}

function CategoryDisclaimer(props) {
  const { category, resetCategory } = props

  if (!category) return  

  return (
    <small>
      <i className="fa-solid fa-circle-exclamation"></i>
      Only searching in <strong>{category}</strong> category. <a onClick={resetCategory}>Reset?</a>
    </small>
  )
}

function NotFoundPage() {
  return (
    "NOT FOUND"
  )
}

export default Search
