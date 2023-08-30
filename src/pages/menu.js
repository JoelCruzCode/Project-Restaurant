import { createElement, appendChildren } from "./functions";
import { menu } from "./library";
const renderMenu = (parent) => {
  parent.textContent = ``;
  const menuElement = createElement("div", "", ".menu");
  menuElement.classList.add("container");
  const sectionTitle = createElement("h2", "Menus", ".section-title");
  sectionTitle.classList.add("container");
  const menuNav = createElement("div", "", ".menu-nav");
  menuNav.classList.add("container");
  const breakFastBtn = createElement("button", "Breakfast", ".menu-btn");
  const lunchBtn = createElement("button", "Lunch/Dinner", ".menu-btn");
  const drinksBtn = createElement("button", "Drinks", ".menu-btn");
  appendChildren(menuNav, [breakFastBtn, lunchBtn, drinksBtn]);
  appendChildren(parent, [sectionTitle, menuNav, menuElement]);
  parent.appendChild(menuElement);
  // Will add logic to render a certain menu depending on time of day later
  renderBreakfast(menuElement);

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
  //////////////////////////////
  // used to render food from a library, should add getters and setters and remove direct accessor property
  function renderFood(parent, menu) {
    parent.textContent = ``;
    for (let [key, value] of Object.entries(menu)) {
      let menuItems = [];
      const sectionTitle = createElement("h3", key, ".subsection-title");
      for (let [keys, values] of Object.entries(value)) {
        let subsectionTitle = createElement(
          "h3",
          `${keys}`,
          ".subsection-title"
        );
        values.forEach((food) =>
          subsectionTitle.appendChild(
            createMenuItem(food.getName(), food.getPrice(), food.getInfo())
          )
        );
        sectionTitle.appendChild(subsectionTitle);
      }
      appendChildren(parent, [sectionTitle]);
    }
  }

  // Event Listeners
  breakFastBtn.addEventListener("click", function () {
    renderBreakfast(menuElement);
  });

  lunchBtn.addEventListener("click", function () {
    renderFood(menuElement, menu.newMenu);
  });
};

export default renderMenu;
