import React, { StrictMode, useState } from 'react'
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Home'
import RecipeDetail, { loader as recipeLoader } from './RecipeDetail'
import { UserFiltersContext } from './Contexts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { 
    path: 'recipes/:id',
    element: <RecipeDetail />,
    loader: recipeLoader, 
  },
])

function RouterProviderWithContext() {
  const [filters, setFilters] = useState({ category: null, ingredientsList: [] })
  const [results, setResults] = useState(null)

  return (
    <UserFiltersContext.Provider value={{ filters, setFilters, results, setResults }} >
      <RouterProvider router={router} />
    </UserFiltersContext.Provider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <RouterProviderWithContext />
  </StrictMode>
)
