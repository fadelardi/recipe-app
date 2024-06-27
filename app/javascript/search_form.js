function addIngredientOnClick() {
    const ingredientInputBox = document.getElementById('ingredient_input_box')
    const ingredientInputBoxValue = ingredientInputBox.value

    if (ingredientInputBoxValue && ingredientInputBoxValue.length) {
      addIntegredient(ingredientInputBoxValue)
      resetInputValue()
      resetFindButtonDisabledStatus()
    }
}  

function removeIngredientOnClick(e) {
  event.target.parentNode.remove()
  resetFindButtonDisabledStatus()
}

function addIntegredient(ingredientText) {
  if (ingredientText && ingredientText.length) {
    addIntegredientToUserList(ingredientText)
  }
}

function resetFindButtonDisabledStatus() {
  const currentIngredientListElems = document.querySelectorAll('#ingredient_list')
  const findButton = document.getElementById('find_recipe_btn') 
  
  if (currentIngredientListElems.length) {
    findButton.removeAttribute('disabled')
  } else {
    findButton.setAttribute('disabled', true)
  }
}

function resetInputValue() {
  document.getElementById('ingredient_input_box').value = ''
}

function addIntegredientToUserList(ingredientText) {
  const userIngredientElement = document.getElementById('user_ingredients')
  const input = document.createElement('li')
  const inputText = document.createElement('span')
  const hiddenElement = addIngredientToHiddenPayload(ingredientText)
  inputText.innerHTML = ingredientText + ' '
  const inputRemoveBtn = document.createElement('i')
  inputRemoveBtn.setAttribute('class', 'fa-solid fa-circle-xmark')
  inputRemoveBtn.addEventListener('click', (e) => { 
    input.remove()
    resetFindButtonDisabledStatus()
  })

  input.append(inputText, inputRemoveBtn, hiddenElement)

  userIngredientElement.appendChild(input)
}

function addIngredientToHiddenPayload(val) {
  const input = document.createElement('input')

  input.setAttribute('type', 'hidden')
  input.setAttribute('id', 'ingredient_list')
  input.setAttribute('name', 'ingredient_list[]')
  input.setAttribute('value', val)

  return input
}
