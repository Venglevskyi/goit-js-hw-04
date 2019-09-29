const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(this, itemName);
};

invokeInventoryOperation.call(inventory, 'Аптечка', inventory.add);
console.log(inventory.items);

invokeInventoryOperation.call(inventory, 'Фильтр', inventory.remove);
console.log(inventory.items);
