const food = (name, price, type, info, subtype) => {
  const getName = () => name;
  const getPrice = () => price;
  const getType = () => type;
  const getInfo = () => info;
  const getSubtype = () => (subtype ? subtype : "");

  const setName = (input) => (name = input);
  const setPrice = (input) => (price = input);
  const setType = (input) => (type = input);
  const setInfo = (input) => (info = input);
  const setSubtype = (input) => (subtype = input);

  return {
    getName,
    getPrice,
    getType,
    getInfo,
    getSubtype,
    setName,
    setPrice,
    setType,
    setInfo,
    setSubtype,
  };
};

let Chilaquiles = food(
  "Chilaquiles",
  14,
  "Breakfast",
  "Choose either chili rojo, verde, mole, chipotle or ranchera. Topped with melted cheese and served with two eggs "
);

let chorizo = food(
  "Chorizo",
  14,
  "Breakfast",
  "Spicy sausage, scrambled with eggs and papas. Served with home-made tortillas"
);

let breakfast = [Chilaquiles, chorizo];

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

let appetizers = [guacamole, nachos, quessadillaChorizo];

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

let soupSalads = [ceasarSalad, tortillaSoup];

let asadaTaco = food(
  "Asada Tacos",
  [13.5],
  "Lunch/Dinner",
  "Two grilled diced steak, tacos topped with onion and cilantro. Home-made tortillas and served with two sides of your choice",
  "Tacos y Sopes"
);

let carnitasTaco = food(
  "Carnitas Tacos",
  13.5,
  "Lunch/Dinner",
  "Two crispy pork tacos topped with onion and cilantro. Home-made tortillas and served with two sides of your choice ",
  "Tacos y Sopes"
);
let tacoSopes = [asadaTaco, carnitasTaco];

let asadaBurrito = food(
  "Asada Burrito",
  13.5,
  "Lunch/Dinner",
  "Grilled diced steak burrito filled with onion, cilantro and refried beans. Served with two sides of your choice ",
  "Burritos"
);

let burritos = [asadaBurrito];

let enchiladasDelMar = food(
  "Enchiladas Del Mar",
  16,
  "Lunch/Dinner",
  "Two shrimp enchiladas topped with our house specialty smokey chipotle chile. Served with two sides of your choice",
  "Plates"
);

let plates = [enchiladasDelMar];

let rellenoYTaco = food(
  "Relleno y Taco",
  17,
  "Lunch/Dinner",
  "One relleno and one taco of your choosing. Served with two sides of your choice",
  "Combinations"
);

let rellenoYEnchilada = food(
  "Relleno y Enchilada",
  18,
  "Lunch/Dinner",
  "One relleno and one enchilada of your choosing. Served with two sides of your choice ",
  "Combinations"
);

let enchiladaYTaco = food(
  "Enchilada y Taco",
  17,
  "Lunch/Dinner",
  "One enchilada of your choosing and one taco of your choosing. Served with two sides of your choice ",
  "Combinations"
);

let asadaYEnchilada = food(
  "Asada y Enchilada",
  20,
  "Lunch/Dinner",
  "Carne asada steak with one enchilada of your choosing. Comes with a side of guacamole and pico de gallo. Served with two sides of your choice."
);
let combinations = [
  rellenoYTaco,
  rellenoYEnchilada,
  enchiladaYTaco,
  asadaYEnchilada,
];
let drinks = food(
  "Drinks",
  3,
  "Drinks",
  [
    "Coke",
    "Diet",
    "Sprite",
    "Iced Tea",
    "Lemonade",
    "Arnold Palmer",
    "Coffee",
    "Hot Tea",
  ],
  "Soft Drinks"
);

let specialDrinks = food("Specialty Drinks(No refills)", 3, "Drinks", [
  "Horchata",
  "Jamaica",
  "Orange Juice",
  "Specialty Drinks",
]);
let beverages = [drinks, specialDrinks];

let bottledBeer = food(
  "Bottled Beer",
  6,
  "Alcohol",
  ["corona", "Victoria", "Negra Modela", "Pacifico"],
  "Bottled Beer"
);

let wine = food(
  "Wine",
  6,
  "Alcohol",
  ["Merlot", "Cabernet", "chardonnay", "White Zinfandel"],
  "Wine"
);
let alcohol = [bottledBeer, wine];
export {
  food,
  breakfast,
  appetizers,
  soupSalads,
  tacoSopes,
  burritos,
  plates,
  combinations,
  beverages,
  alcohol,
};
