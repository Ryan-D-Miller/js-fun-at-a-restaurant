
function createRestaurant(name){
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant;
}

function addMenuItem(restaurant, menuItem){
  var duplicate = false;
  for(var i = 0; i < restaurant.menus[menuItem.type].length; i++)
  {
    if(restaurant.menus[menuItem.type][i].name === menuItem.name){
      duplicate = true;
    }
  }
  if(duplicate === false){
    if(restaurant.menus[menuItem.type][0] === undefined){
      restaurant.menus[menuItem.type][0] = menuItem;
    }
    else{
      restaurant.menus[menuItem.type].push(menuItem);
    }
  }
}


function removeMenuItem(restaurant, itemToRemove, itemType){
  console.log(restaurant.menus[itemType]);
  for(var i = 0; i < restaurant.menus[itemType].length; i++){
    console.log(restaurant.menus[itemType][i].name + " Item at this location");
    if(restaurant.menus[itemType][i].name === itemToRemove)
    {
      restaurant.menus[itemType].splice(i,1);
      console.log(restaurant.menus[itemType]);
      return `No one is eating our ${itemToRemove} - it has been removed from the ${itemType} menu!`
    }
  }
  return `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
