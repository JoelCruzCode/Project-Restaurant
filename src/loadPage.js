import "./style.css";
import headerBG from "./assets/images/Enchiladas.jpg";

const loadPage = () => {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  main.classList.add("main");

  const createHeading = () => {
    const header = document.createElement("section");
    const title = document.createElement("h1");
    content.appendChild(header);
    header.classList.add("header");
    header.appendChild(title);
  };

  const createNav = () => {
    const nav = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    content.appendChild(nav);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = `Copyright © ${new Date().getFullYear()} JoelCruzCode`;
    content.appendChild(footer);
  };

  createHeading();
  createNav();
  content.appendChild(main);
  createFooter();
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
