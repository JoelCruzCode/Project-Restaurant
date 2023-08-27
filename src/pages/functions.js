/**Creates an element and sets its text content @param element {string} @param attribute {string} [optionalArg] */
const createElement = (element, content, attribute) => {
  let el = document.createElement(element);
  el.textContent = content;
  if (attribute) {
    attribute[0] === "#"
      ? el.setAttribute("id", attribute.slice(1))
      : el.setAttribute("class", attribute.slice(1));
  }
  return el;
};
/** Appends an array of nodes to a target node @param parent {node} @param children {iterable*/
const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
};

/** Creates a div with a label and input for a form*/
const createField = (type, id, name, placeholder) => {
  let field = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement(type);
  label.setAttribute("for", id);
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  input.setAttribute("placeholder", placeholder);

  appendChildren(field, [label, input]);
  return field;
};

/** Creates a form with a submit button by utilizing createField function */
const createForm = () => {
  const form = document.createElement("form");
  form.setAttribute("method", "post");

  const field1 = createField("input", "name", "name", "  Name");
  const field2 = createField("input", "phone", "phone", "  Phone");
  const field3 = createField("input", "email", "email", "  Email");
  const field4 = createField(
    "textarea",
    "comment",
    "comment",
    " How can we serve you?"
  );
  const submitBtn = createElement("button", "Send", "");
  const fields = [field1, field2, field3, field4, submitBtn];
  appendChildren(form, fields);

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
  });
  return form;
};

export { createElement, createForm, appendChildren };
