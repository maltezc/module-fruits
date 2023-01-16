'use strict'
// TODO: DO WE NEED TO KEEP THIS IF WE REMOVE STRICTMODE? CONFIRM.

/* choice(items): returns a randomly selected item from
 array of items */

 function choice(items) {
  const itemsLength = items.length;
  const randomIndex = Math.floor(Math.random() * itemsLength);
  return items[randomIndex];
}

/* remove(items, item): removes the first
matching item from items, if item exists, and returns it.
Otherwise returns undefined.  */

function remove(items, item) {
  const itemIndex = items.indexOf(item);
  items.splice(itemIndex, 1);
  return items;
}

export {choice, remove}