import food from "./food";

const Menu = () => {
  const myMenu = [];

  const getMenu = () => {
    return myMenu;
  };

  const addFood = (food) => {
    myMenu.every((item) => item.getName() !== food.getName())
      ? myMenu.push(food)
      : console.log(`${food.name} already exists`);
    // myMenu.forEach((item) => console.log(item.getName(), food.getName()));
  };

  function deleteFood(food) {
    myMenu.forEach((item, index) => {
      if (item.getName() === food) {
        console.log(`removing ${item.getName()}`);
        myMenu.splice(index, 1);
      }
    });
  }

  // should I learn how to make real accessor properties? getters & setters
  return { getMenu, addFood, deleteFood };
};

const menu = Menu();

let guacamole = food(
  "Guacamole",
  8,
  "Lunch/Dinner",
  "Hande made guacamole made with fresh avacado, cilantro, onion y tomato",
  "Appetizers"
);

let quessadillaChorizo = food(
  "Quesadilla Chorizo",
  10,
  "Lunch/Dinner",
  "Jack cheese with spicy Mexican Sausage, topped with queso fresco",
  "Appetizers"
);

let nachos = food(
  "Topotitos",
  11,
  "Lunch/Dinner",
  "Nachos topped with guacamole, refried beans, cheese and serrano chile. Add Carnitas or Asada for $4 more",
  "Appetizers"
);

let ceasarSalad = food(
  "Caesar Salad",
  [5, 10],
  "Lunch/dinner",
  "Romaine lettuce, with our home-made caesar dressing. Parmesian cheese and and a bread roll. Make it a full for $4 more",
  "Soup & Salad"
);

let tortillaSoup = food(
  "Tortilla Soup",
  [6, 10],
  "Lunch/Dinner",
  "Spicy New Mexico Chile soup with tortilla strips, pasilla chile, and avacado. Topped with queso fresco. ",
  "Soup & Salad"
);

let asadaBurrito = food(
  "Asada Burrito",
  13.5,
  "Lunch/Dinner",
  "Grilled diced steak burrito filled with onion, cilantro and refried beans. Served with two sides of your choice ",
  "Burritos"
);

let items = [
  guacamole,
  nachos,
  quessadillaChorizo,
  ceasarSalad,
  tortillaSoup,
  asadaBurrito,
];

items.forEach((item) => menu.addFood(item));

console.log(menu.getMenu());
export { menu };
