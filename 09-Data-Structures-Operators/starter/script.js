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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta dish from Classico Italiano, with ${ing1}, ${ing2}, ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '4 Burma Road',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '81 Tipo Pils Ave',
  mainIndex: 2,
});

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// new array with the spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const restaurantFullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(`This is the full menu: ${restaurantFullMenu}`);

// Nested objects - open and close
const {
  fri: { open: friOpen, close: friClosed },
} = hours;
console.log(friOpen, friClosed);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurantFranchise = { ...restaurant, location: 'Tokyo', branch: 1 };
console.log(newRestaurantFranchise);

// Making object copies
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

// Spread operator, on the right side of the =
const arrayMe = [1, 2, ...[3, 4]];

// Rest pattern, because on left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// prints 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects using the rest pattern
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

restaurant.orderPizza('mushrooms', 'onions', 'spinach', 'olives');

// short circuiting with the || operator
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guests2 = restaurant.numGuests || 10;

// short circuiting with the && operator

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
