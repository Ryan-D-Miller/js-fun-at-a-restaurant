class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, isMorning){
    if(isMorning === true){
      return `Good morning, ${customerName}!`;
    }
    else{
      return `Hello, ${customerName}!`;
    }
  }

  checkForFood(foodItem){
    for(var i = 0; i < this.restaurant.menus[foodItem.type].length; i++){
      if(this.restaurant.menus[foodItem.type][i].name === foodItem.name){
        return `Yes, we're serving ${foodItem.name} today!`;
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
}

module.exports = Chef;
