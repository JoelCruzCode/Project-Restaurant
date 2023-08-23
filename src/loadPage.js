import "./style.css";
import headerBG from "./assets/images/Enchiladas.jpg";
import renderHome from "./pages/home";
import renderMenu from "./pages/menu";
import renderContact from "./pages/Contact";

const loadPage = () => {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  main.classList.add("main");

  const createHeader = () => {
    const header = document.createElement("section");
    const title = document.createElement("h1");
    const headerImg = new Image();
    content.appendChild(header);
    header.classList.add("header");
    header.appendChild(title);
    headerImg.src = headerBG;
    header.appendChild(headerImg);
    title.textContent = `Zumayas Mexican Cafe`;
  };

  const createNav = () => {
    const nav = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    content.appendChild(nav);
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return { homeBtn, menuBtn, contactBtn };
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = `Copyright © ${new Date().getFullYear()} JoelCruzCode`;
    content.appendChild(footer);
  };

  createHeader();
  const nav = createNav();
  content.appendChild(main);
  createFooter();
  renderHome(main);

  // Event Listeners
  nav.homeBtn.addEventListener("click", function () {
    renderHome(main);
  });

  nav.menuBtn.addEventListener("click", function () {
    renderMenu(main);
  });

  nav.contactBtn.addEventListener("click", function () {
    renderContact(main);
  });
};

export default loadPage;
// const element = document.createElement("div");
// document.body.appendChild(element);
//   element.classList.add("content2");
//   element.textContent = "element";
//   content.textContent = "Content";
//   content.classList.add("hello");
//   const headerImg = new Image();
//   headerImg.src = headerBG;
//   content.appendChild(headerImg);
