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

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
};

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

const createForm = () => {
  const form = document.createElement("form");
  form.setAttribute("method", "post");

  const field1 = createField("input", "name", "name", "Name");
  const field2 = createField("input", "phone", "phone", "Phone");
  const field3 = createField("input", "email", "email", "Email");
  const field4 = createField(
    "textarea",
    "comment",
    "comment",
    "How can we serve you?"
  );
  const submitBtn = createElement("button", "submit", "");
  const fields = [field1, field2, field3, field4, submitBtn];
  appendChildren(form, fields);
  return form;
};

export { createElement, createForm, appendChildren };
