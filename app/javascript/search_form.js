function addIngredientOnClick() {
    const ingredientInputBox = document.getElementById('ingredient_input_box')
    const ingredientInputBoxValue = ingredientInputBox.value

    if (ingredientInputBoxValue && ingredientInputBoxValue.length) {
      addIntegredient(ingredientInputBoxValue)
      resetInputValue()
    }
}  

function removeIntegredientOnClick(e) {
  e.preventDefault()
  event.target.parentNode.remove()
}

function addIntegredient(ingredientText) {
  if (ingredientText && ingredientText.length) {
    addIntegredientToUserList(ingredientText)
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
    e.preventDefault()
    input.remove()
  })

  input.append(inputText, inputRemoveBtn, hiddenElement)

  userIngredientElement.appendChild(input)
}

function addIngredientToHiddenPayload(val) {
  const input = document.createElement('input')

  input.setAttribute('type', 'hidden')
  input.setAttribute('name', 'ingredient_list[]')
  input.setAttribute('value', val)

  return input
}
