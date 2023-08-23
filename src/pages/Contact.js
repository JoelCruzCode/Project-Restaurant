import { createElement, createForm, appendChildren } from "./functions";

const renderContact = (parent) => {
  parent.textContent = ``;
  const sectionTitle = createElement("p", "Visit us", ".section-title");

  const contact = document.createElement("div");
  const contactForm = createForm();

  const title = createElement("p", "Zumaya's Mexican Cafe", "#contact-info");
  const address = createElement(
    "p",
    "7317 Greenleaf Avenue, Whittier, California 90602, United States",
    "#contact-address"
  );
  const phone = createElement("p", "(562 698 5442", "#contact-number");
  const hours = [];
  hours.push(createElement("p", "Hours", "#contact-hours"));
  hours.push(createElement("p", "Monday - Tuesday: Closed", "#contact-hours"));
  hours.push(
    createElement("p", "Wednesday - Thursday: 11am - 8pm", "#contact-hours")
  );
  hours.push(createElement("p", "friday: 11am - 9pm", "#contact-hours"));
  hours.push(createElement("p", "Saturday: 8:30am - 9pm", "#contact-hours"));
  hours.push(createElement("p", "Sunday: 8:30am - 7pm", "#contact-hours"));

  appendChildren(contact, [contactForm, title, address, phone, ...hours]);
  appendChildren(parent, [sectionTitle, contact]);
};

export default renderContact;
