import React from 'react'
import { Link } from 'react-router-dom'

function Recipe(props) {
    const { title, id, image, prepTime, cookTime } = props

    return (
        <article key={id}>
            <header>
                <Link to={`recipes/${id}`}>{title}</Link>
            </header>
            <Link to={`recipes/${id}`}>
                <img src={image} width="300" alt="blah" />
            </Link>
            <footer>
               <strong>Prep Time: </strong> {prepTime} min, 
               <strong>Cook Time: </strong> {cookTime} min 
            </footer>
        </article>
    )
}

export default Recipe
