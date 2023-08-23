import { createElement, appendChildren } from "./functions";

const renderMenu = (parent) => {
  parent.textContent = ``;
  const menu = createElement("div", "", ".menu");
  const sectionTitle = createElement("h2", "Menu", ".section-title");
  const breakFastBtn = createElement("button", "Breakfast", ".menu-btn");
  const lunchBtn = createElement("button", "Lunch", ".menu-btn");
  const dinnerBtn = createElement("button", "Dinner", ".menu-btn");
  appendChildren(parent, [
    sectionTitle,
    breakFastBtn,
    lunchBtn,
    dinnerBtn,
    menu,
  ]);
  parent.appendChild(menu);
  // Will add logic to render a certain menu depending on time of day later
  renderBreakfast(menu);

  function renderBreakfast(parent) {
    const sectionTitle = createElement("h2", "Breakfast", ".section-title");
    parent.textContent = ``;
    const menuItems = [];
    menuItems.push(
      createMenuItem(
        "Chilaquiles",
        14,
        "Choose either chili rojo, verde, mole, chipotle or ranchera. Topped with melted cheese and served with two eggs "
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

  // Event Listeners

  breakFastBtn.addEventListener("click", function () {
    renderBreakfast(menu);
  });
};

export default renderMenu;
