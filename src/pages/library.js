import {
  breakfast,
  appetizers,
  soupSalads,
  tacoSopes,
  burritos,
  plates,
  combinations,
  beverages,
  alcohol,
} from "./food";

const Menu = () => {
  const myMenu = {
    breakfast: {
      Weekends: [],
    },
    lunch: {
      Appetizers: [],
      "Soups and Salads": [],
      "Tacos y Sopes": [],
      Burritos: [],
      Plates: [],
      Combinations: [],
    },
    Drinks: {
      "Soft Drinks": [],
      "Beer and Wine": [],
    },
  };
  //
  const getMenu = (field, subfield) => {
    if (field) {
      if (subfield) {
        return myMenu[field][subfield];
      } else return myMenu[field];
    } else return myMenu;
  };

  // Should I use dot notation to only pass 2 arguemnts instead of 3 ? pros? cons?
  // FIX THIS : I had to create a subsection to breakfast because of current function logic
  const addFood = (category, sub, food) => {
    const arr = myMenu[category]?.[sub];
    if (arr) {
      arr.every((obj) => obj !== food)
        ? arr.push(food)
        : console.log(`${food.getName()} already exist"`);
    } else console.log(`Issue resolving path, are you sure the fields exist?`);
  };

  const deleteFood = (field, food) => {
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
    if (myMenuMenu[field]?.[sub]) {
      console.log(`${sub} already exists in ${field}`);
    } else if (myMenu[field]) {
      newMenu[field][sub] = [];
    }
  };

  // should I learn how to make real accessor properties? getters & setters
  return { getMenu, addFood, deleteFood, addField, addSubfield };
};

const menu = Menu();

breakfast.forEach((item) => menu.addFood("breakfast", "Weekends", item));
appetizers.forEach((item) => menu.addFood("lunch", "Appetizers", item));
soupSalads.forEach((item) => menu.addFood("lunch", "Soups and Salads", item));
burritos.forEach((item) => menu.addFood("lunch", "Burritos", item));
tacoSopes.forEach((item) => menu.addFood("lunch", "Tacos y Sopes", item));
plates.forEach((item) => menu.addFood("lunch", "Plates", item));
combinations.forEach((item) => menu.addFood("lunch", "Combinations", item));
beverages.forEach((item) => menu.addFood("Drinks", "Soft Drinks", item));
alcohol.forEach((item) => menu.addFood("Drinks", "Beer and Wine", item));

export { menu };
