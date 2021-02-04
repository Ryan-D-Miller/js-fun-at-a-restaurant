function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length < 3){
  deliveryOrders = deliveryOrders.push(order);
}
else{
  console.log("To many orders to add your order!");
}
  return deliveryOrders
}

function refundOrder(orderBeingRemoved ,deliveryOrders){
  for(var i = 0; i < deliveryOrders.length; i++){
    if(orderBeingRemoved === deliveryOrders[i].orderNumber)
    {
      deliveryOrders = deliveryOrders.splice(i, 1);
      return deliveryOrders;
    }
  }
  console.log("Couldnt find your order number to remove!");
  return deliveryOrders;
}

function listItems(deliveryOrders){
  var items = `${deliveryOrders[0].item}, `;
  for(var i = 1; i<deliveryOrders.length; i++){
    if(i === deliveryOrders.length - 1)
    {
          items = items + `${deliveryOrders[i].item}`;
    }
    else{
    items = items + `${deliveryOrders[i].item}, `;
    }
  }
  return items;
}

function searchOrder(deliveryOrders, searchedItem){
  for(var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].item === searchedItem){
      return true;
    }
  }
  return false;
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
