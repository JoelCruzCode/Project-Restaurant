import { createElement, createForm, appendChildren } from "./functions";

const renderContact = (parent) => {
  parent.textContent = ``;
  const sectionTitle = createElement("h2", "Visit Us", ".section-title");

  const contactContainer = createElement("div", "", ".contact-container");
  const formContainer = createElement("div", "", ".subcontainer");
  const formTitle = createElement("h4", "Contact Us", ".contact-title");
  const contactForm = createForm();
  const infoContainer = createElement("div", "", ".subcontainer");
  const title = createElement("h4", "Zumaya's Mexican Cafe", ".contact-title");
  const address = createElement(
    "p",
    "7317 Greenleaf Avenue, Whittier, California 90602, United States",
    "#contact-address"
  );
  const phone = createElement("h4", "(562 698 5442", "#contact-number");
  const hours = [];
  hours.push(createElement("h4", "Hours", ".contact-title"));
  hours.push(createElement("p", "Monday - Tuesday: Closed", "#contact-hours"));
  hours.push(
    createElement("p", "Wednesday - Thursday: 11am - 8pm", "#contact-hours")
  );
  hours.push(createElement("p", "friday: 11am - 9pm", "#contact-hours"));
  hours.push(createElement("p", "Saturday: 8:30am - 9pm", "#contact-hours"));
  hours.push(createElement("p", "Sunday: 8:30am - 7pm", "#contact-hours"));

  appendChildren(infoContainer, [title, address, phone, ...hours]);
  appendChildren(formContainer, [formTitle, contactForm]);
  appendChildren(contactContainer, [formContainer, infoContainer]);
  appendChildren(parent, [sectionTitle, contactContainer]);
};

export default renderContact;
