import React, { useState, useContext } from 'react'
import { UserFiltersContext } from './Contexts'
import Navbar from './Navbar'
import Search from './search/Search'
import SearchResults from './search/SearchResults'

function WelcomeDialog() {
  return (
    <article>
      <header>
        <i className="fa-solid fa-circle-info"></i>&nbsp;
        Search for recipes using at home ingredients
      </header>
      <p>
      Looking to maximise food without letting nothing go to waste? 
      Add some ingredients to the list, then see what recipes match them!
      </p>
      <p>Not sure where to start? Try one of the categories to get some ideas.</p>
    </article>
  )
}

function App() {
  const { filters, setFilters, results, setResults } = useContext(UserFiltersContext)
  const { ingredientsList, category } = filters
  const [newIngredient, setNewIngredient] = useState('')

  const resetCategory = () => setFilters({ ...filters, category: null })
  const setIngredientsList = (list) => setFilters({ ...filters, ingredientsList: list })

  return (
    <>
      <Navbar setResults={setResults} filters={filters} setFilters={setFilters} />
      <main className="container">
        <WelcomeDialog />
        <Search 
          category={category}
          resetCategory={resetCategory}
          newIngredient={newIngredient}
          setNewIngredient={setNewIngredient}
          ingredientsList={ingredientsList}
          setIngredientsList={setIngredientsList}
          setResults={setResults}
        />
        <SearchResults results={results} />
      </main>
    </>
  )
}

export default App
