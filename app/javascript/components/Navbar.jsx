import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { searchRecipesBy } from './search/Search'

function Navbar(props) {
  const { setResults, filters, setFilters } = props
  const navigate = useNavigate()

  const search = (selectedCategory) => {
    const { ingredientsList } = filters
    setFilters({ ...filters, category: selectedCategory })
    searchRecipesBy({ ingredientsList, category: selectedCategory })
      .then(setResults)
      .catch(console.error)
      .finally(() => navigate('/'))
  }

  return (
    <nav>
      <ul>
        <li>
          <i className="fa-solid fa-carrot"></i>&nbsp;
          <Link to="/">Recipe Finder</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a onClick={() => search('beef')}>
            <i className="fa-solid fa-cow"></i>&nbsp;
            Beef
          </a>
        </li>
        <li>
          <a onClick={() => search('chicken')}>
            <i className="fa-solid fa-kiwi-bird"></i>&nbsp;
            Chicken
          </a>
        </li>
        <li>
          <a onClick={() => search('seafood')}>
            <i className="fa-solid fa-shrimp"></i>&nbsp;
            Seafood
          </a>
        </li>
        <li>
          <a onClick={() => search('vegetarian')}>
            <i className="fa-solid fa-seedling"></i>&nbsp;
            Vegetarian
          </a>
        </li>
        <li>
          <a onClick={() => search('soup')}>
            <i className="fa-solid fa-spoon"></i>&nbsp;
            Soup
          </a>
        </li>
        <li>
          <a onClick={() => search('pasta')}>
            <i className="fa-solid fa-bowl-food"></i>&nbsp;
            Pasta
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
