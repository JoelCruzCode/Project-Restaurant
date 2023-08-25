import { createElement, appendChildren } from "./functions";

const renderMenu = (parent) => {
  parent.textContent = ``;
  const menu = createElement("div", "", ".menu");
  const sectionTitle = createElement("h2", "Menus", ".section-title");
  const menuNav = createElement("div", "", ".menu-nav");
  const breakFastBtn = createElement("button", "Breakfast", ".menu-btn");
  const lunchBtn = createElement("button", "Lunch", ".menu-btn");
  const dinnerBtn = createElement("button", "Dinner", ".menu-btn");
  appendChildren(menuNav, [breakFastBtn, lunchBtn, dinnerBtn]);
  appendChildren(parent, [sectionTitle, menuNav, menu]);
  parent.appendChild(menu);
  // Will add logic to render a certain menu depending on time of day later
  renderBreakfast(menu);

  function renderBreakfast(parent) {
    const sectionTitle = createElement("h3", "Breakfast", ".subsection-title");
    parent.textContent = ``;
    const menuItems = [];
    menuItems.push(
      createMenuItem(
        "Chilaquiles",
        14,
        "Choose either chili rojo, verde, mole, chipotle or ranchera. Topped \
        with melted cheese and served with two eggs "
      )
    );

    menuItems.push(
      createMenuItem(
        "Chorizo",
        14,
        "Spicy sausage, scrambled with eggs and papas. Served with\
    home-made tortillas "
      )
    );

    menuItems.push(
      createMenuItem(
        "Huevos Rancheros",
        14,
        " Eggs served upon lightly fried tortillas and topped with chili of your choice; rojo, verde, or ranchera salsa. "
      )
    );
    appendChildren(parent, [sectionTitle, ...menuItems]);
  }

  // used to render food from a library, should add getters and setters and remove direct accessor property
  function renderFood(parent, menu) {
    const sectionTitle = createElement(
      "h3",
      `${menu.name}`,
      ".subsection-title"
    );
    parent.textContent = ``;
    const menuItems = [];
    menu.food.forEach((item) => {
      menuItems.push(
        createMenuItem(menu.food.title, menu.food.price, menu.food.info)
      );
    });
    appendChildren(parent, [sectionTitle, ...menuItems]);
  }

  function createMenuItem(title, price, info) {
    const menuItem = createElement("div", "", ".menu-item");
    const menuHeading = createElement("div", "", ".menu-heading");
    const itemTitle = createElement("h4", title, ".item-title");
    const itemPrice = createElement("h4", price, ".item-price");

    const itemInfo = createElement("p", info, ".item-info");
    appendChildren(menuHeading, [itemTitle, itemPrice]);
    appendChildren(menuItem, [menuHeading, itemInfo]);
    return menuItem;
  }

  // Event Listeners

  breakFastBtn.addEventListener("click", function () {
    renderBreakfast(menu);
  });
};

export default renderMenu;
