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
  };

  function deleteFood(food) {
    myMenu.forEach((item, index) => {
      if (item.getName() === food) {
        console.log(`deleting ${item.getName()}`);
        myMenu.splice(index, 1);
      }
    });
  }
  /////////////////////////////////////////////

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

  const newMenu = {
    breakfast: {},
    lunch: {
      appetizers: [],
      soupSalads: [],
      tacoSopes: [],
      burritos: [],
      plates: [],
      combinations: [],
    },
    drinks: {
      softDrinks: [],
      alcohol: [],
    },
  };

  // I could reduce these 2 functions down to 1 by using dot notation but I would have
  //to make both objects and change addfood function
  //   const addAField = (parent, field) => {
  //     parent.hasOwnProperty(field)
  //       ? console.log(`${field} already exist`)
  //       : (parent[field] = {});
  //   };
  const addField = (field) => {
    newMenu.hasOwnProperty(field)
      ? console.log(`${field} already exist`)
      : (newMenu[field] = {});
  };

  const addSubfield = (field, sub) => {
    if (newMenu[field]?.[sub]) {
      console.log(`${sub} already exists in ${field}`);
    } else if (newMenu[field]) {
      newMenu[field][sub] = [];
    }
  };

  //Should i use dot notation?
  const addAFood = (category, sub, food) => {
    // let arr = newMenu.lunch.appetizer;
    const arr = newMenu[category]?.[sub];
    if (arr) {
      arr.every((obj) => obj !== food)
        ? arr.push(food)
        : console.log(`${food.getName()} already exist"`);
    } else console.log(`Issue resolving path, are you sure the fields exist?`);
  };

  const delFood = (field, food) => {
    if (field.every((obj) => obj !== food)) {
      console.log(`${food.getName()} does not exist`);
      return;
    }
    for (let i = 0; i < field.length; i++) {
      if (field[i] === food) {
        field.splice(i, 1);
        console.log(`${food.getName()} deleted`);
        break;
      }
    }
  };
  //   delFood(newMenu.lunch.appetizer, nachos);
  //   delFood(newMenu.lunch.appetizer, quessadillaChorizo);
  //   delFood(newMenu.lunch.appetizer, nachos);
  //   //   addAFood("lunch", "appetizer", nachos);
  //   console.log(newMenu.lunch.appetizer[0]);
  //   console.log(newMenu.lunch.appetizer[1].getName());
  //   addAFood("lunch", "appetizer", nachos);
  // should I learn how to make real accessor properties? getters & setters
  return { getMenu, addFood, deleteFood, addAFood, newMenu };
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

let appetizers = [guacamole, nachos, quessadillaChorizo];

let soupSalads = [ceasarSalad, tortillaSoup];

let burritos = [asadaBurrito];

items.forEach((item) => menu.addFood(item));
appetizers.forEach((item) => menu.addAFood("lunch", "appetizers", item));
soupSalads.forEach((item) => menu.addAFood("lunch", "soupSalads", item));
burritos.forEach((item) => menu.addAFood("lunch", "burritos", item));
console.log(menu.newMenu);
for (let [key, value] of Object.entries(menu.newMenu)) {
  //   console.log(key, value);
  for (let [keys, values] of Object.entries(value)) {
    // console.log(keys);
    // console.log(values);
    // values.forEach((value) => console.log(value.getName()));
  }
}

// console.log(menu.getMenu());
export { menu };
