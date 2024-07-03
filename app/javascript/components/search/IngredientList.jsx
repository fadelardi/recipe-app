import React from 'react'

function removeIngredientFromList(ingredientList, ingredient) {
  return ingredientList.filter(i => i !== ingredient)
}

function IngredientList(props) {
  const { list, setList } = props
  const removeIngredient = (i) => {
    setList(removeIngredientFromList(list, i))
  }
  
  return (
    <section>
      <header>
        <i className="fa-solid fa-cart-shopping"></i> Ingredient List
      </header>
      <ul>
        { list.map(i => <IngredientItem key={i} ingredient={i} remove={() => removeIngredient(i)} />) }
      </ul> 
    </section>
  )
}

function IngredientItem(props) {
  const { ingredient, remove } = props
  
  return (
    <li key={ingredient}>
      { ingredient }&nbsp; 
      <i onClick={remove} className="fa-solid fa-circle-xmark"></i>
    </li>
  )
}

export default IngredientList
