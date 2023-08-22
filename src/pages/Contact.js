import { createElement, createForm, appendChildren } from "./functions";

const renderContact = (parent) => {
  const contact = document.createElement("div");
  const contactForm = createForm();
  const title = createElement("p", "Zumaya's Mexican Cafe", "#contact-info");
  const address = createElement(
    "p",
    "7317 Greenleaf Avenue, Whittier, California 90602, United States",
    "#contact-address"
  );
  const phone = createElement("p", "(562 698 5442", "#contact-number");
  const hours = createElement(
    "p",
    "Hours \n Monday - Tuesday: Closed \n Wednesday - Thursday: 11am - 8pm \n Friday: 11am - 9pm \n Saturday: 8:30am - 9pm \n Sunday: 8:30am - 7pm",
    "#contact-hours"
  );

  appendChildren(contact, [title, address, phone, hours]);
  appendChildren(parent, [contact, contactForm]);
};

export default renderContact;
