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
  menuChoice();

  function menuChoice() {
    let time = new Date().getHours();
    if (21 > time && time > 11) {
      renderFoodSection(menuElement, menu, "lunch");
    } else renderFoodSection(menuElement, menu, "breakfast");
  }

  function createMenuItem(title, price, info) {
    const menuItem = createElement("div", "", ".menu-item");
    const menuHeading = createElement("div", "", ".menu-heading");
    const itemTitle = createElement("h4", title, ".item-title");
    const itemPrice = createElement("h4", price, ".item-price");

    appendChildren(menuHeading, [itemTitle, itemPrice]);
    menuItem.appendChild(menuHeading);

    if (typeof info === "object") {
      let itemInfo;
      info.forEach((current) => {
        itemInfo = createElement("p", current, ".item-info");
        menuItem.appendChild(itemInfo);
      });
    } else {
      const itemInfo = createElement("p", info, ".item-info");
      menuItem.appendChild(itemInfo);
    }

    return menuItem;
  }

  // Used to render the entire menu object
  function renderFood(parent, menu) {
    parent.textContent = ``;
    for (let [key, value] of Object.entries(menu)) {
      const sectionTitle = createElement("h3", key, ".subsection-title");
      for (let [keys, values] of Object.entries(value)) {
        let subsectionTitle = createElement(
          "h3",
          `${keys}`,
          ".subsection-title"
        );
        appendChildren(parent, [sectionTitle, subsectionTitle]);
        values.forEach((food) =>
          parent.appendChild(
            createMenuItem(food.getName(), food.getPrice(), food.getInfo())
          )
        );
      }
    }
  }
  function renderFoodSection(parent, menu, field) {
    parent.textContent = ``;

    const sectionTitle = createElement("h3", field, ".subsection-title");
    parent.appendChild(sectionTitle);
    for (let [keys, values] of Object.entries(menu.getMenu(field))) {
      let subsectionTitle = createElement("h3", `${keys}`, ".subsection-title");
      parent.appendChild(subsectionTitle);
      values.forEach((food) =>
        parent.appendChild(
          createMenuItem(food.getName(), food.getPrice(), food.getInfo())
        )
      );
    }
  }

  // Event Listeners
  breakFastBtn.addEventListener("click", function () {
    renderFoodSection(menuElement, menu, "breakfast");
  });

  lunchBtn.addEventListener("click", function () {
    renderFoodSection(menuElement, menu, "lunch");
  });

  drinksBtn.addEventListener("click", function () {
    renderFoodSection(menuElement, menu, "Drinks");
  });
};

export default renderMenu;
