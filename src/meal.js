function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(itemName, itemPrice, itemType){
  var menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType,
  }
  return menuItem;
}

function addIngredients(incomingIngredient, currentIngredient){
  for(var i =0; i < currentIngredient.length; i++){
    if(currentIngredient[i] === incomingIngredient){
      return currentIngredient;
    }
  }
  return currentIngredient = currentIngredient.push(incomingIngredient);
}

function formatPrice(price){
  return `$${price}`;
}

function decreasePrice(price){
  amountOff = .1 * price;
  price = price - amountOff;
  return price;
}

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
