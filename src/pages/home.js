import { appendChildren, createElement, createForm } from "./functions";

const renderHome = (parent) => {
  parent.textContent = ``;
  const sectionTitle = createElement(
    "h2",
    "----------------   ABOUT US   ----------------",
    ".section-title"
  );

  const aboutSection = createElement("div", "", ".container");

  const about1 = createAboutSection(
    "Our Chef and Staff",
    "Our staff offers an amazing array of home -cooked meals as well \
  as a family feel that makes anyone feel welcomed."
  );

  const about2 = createAboutSection(
    "Special Events and Catering",
    "We offer catering services and will offer the restaurant itself for \
  certain events. Call us for more information, we will be happy to work \
  out a deal for all your occassions."
  );

  const about3 = createAboutSection(
    "Seasonal and Local",
    "We refuse to compromise on quality in our restaurant. Everything here is \
   made fresh and home-made, even the tortillas!"
  );

  appendChildren(aboutSection, [about1, about2, about3]);
  appendChildren(parent, [sectionTitle, aboutSection]);

  function createAboutSection(title, info, img) {
    const aboutUs = createElement("div", "", ".sub-container");
    const aboutTitle = createElement("h4", title, ".item-title");
    const aboutInfo = createElement("p", info, ".item-info");
    appendChildren(aboutUs, [aboutTitle, aboutInfo]);
    return aboutUs;
  }
};
export default renderHome;
