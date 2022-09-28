'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Looping through objects
// for (const day of Object.keys(restaurant.openingHours)) console.log(day);
// console.log(Object.values(restaurant.openingHours));
// console.log(Object.entries(restaurant.openingHours));

// Short circuiting && and ||
// console.log(3 || 'Joel');
// console.log(undefined || 0 || 33 || 'Joel' || false);

// console.log(0 && 1);

// Nullish Coallasing operator ?? ==== works based on nullish values " " and 0 are truthy values for ??
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests ?? 10;
// console.log(guest);

// Set = unique elements

const orderSets = new Set([1, 2, 4, 2, 1, 1, 2, 4]);
console.log(orderSets);
console.log(orderSets.size);
console.log(orderSets.has(1));
console.log(orderSets.has(0));
orderSets.add(6);
console.log(orderSets);
orderSets.delete(4);
// orderSets.clear();
console.log(orderSets);

for (const order of orderSets) console.log(order);
