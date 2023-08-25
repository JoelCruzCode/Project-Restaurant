import { appendChildren, createElement, createForm } from "./functions";
import chefAndStaff from "../assets/images/chefAndStaff.webp";
import seasoning from "../assets/images/seasoning.webp";
import catering from "../assets/images/catering.webp";

// Do i need to reload dependancys or update loaders? read documentation
const renderHome = (parent) => {
  parent.textContent = ``;
  const sectionTitle = createElement("h2", "About Us", ".section-title");

  const aboutContainer = createElement("div", "", ".home-container");

  const about1 = createAboutSection(
    "Our Chef and Staff",
    "Our staff offers an amazing array of home -cooked meals as well \
  as a family feel that makes anyone feel welcomed.",
    chefAndStaff
  );

  const about2 = createAboutSection(
    "Special Events and Catering",
    "We offer catering services and will offer the restaurant itself for \
  certain events. Call us for more information, we will be happy to work \
  out a deal for all your occassions.",
    catering
  );

  const about3 = createAboutSection(
    "Seasonal and Local",
    "We refuse to compromise on quality in our restaurant. Everything here is \
   made fresh and home-made, even the tortillas!",
    seasoning
  );

  appendChildren(aboutContainer, [about1, about2, about3]);
  appendChildren(parent, [sectionTitle, aboutContainer]);

  function createAboutSection(title, info, img) {
    const aboutUs = createElement("div", "", ".subcontainer");
    const aboutTitle = createElement("h4", title, ".item-title");
    const aboutInfo = createElement("p", info, ".item-info");
    const aboutImg = new Image();
    aboutImg.src = img;
    //   const headerImg = new Image();
    //   headerImg.src = headerBG;
    appendChildren(aboutUs, [aboutImg, aboutTitle, aboutInfo]);
    return aboutUs;
  }
};
export default renderHome;
