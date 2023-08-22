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
  const fields = [field1, field2, field3, field4];
  appendChildren(form, fields);
  return form;
};

export { createElement, createForm, appendChildren };

// renderContent = (parent) => {};

// const appendFields = (parent, array) => {
//   //   array.forEach((field) => field.forEach((cur) => parent.appendChild(cur)));
//   array.forEach((field) => appendChildren(parent, field));
// };

// const createParagraph = (content) => {
//   let paragraph = document.createElement("p");
//   paragraph.textContent = content;
// };

// const createFormLong = () => {
//     const form = document.createElement("form");
//     form.setAttribute("method", "post");
//     const label = document.createElement("label");
//     label.setAttribute("for", "name");
//     const input = document.createElement("input");
//     input.setAttribute("id", "name");
//     input.setAttribute("name", "name");
//     input.setAttribute("placeholder", "name");
//     //
//     const label2 = document.createElement("label");
//     label2.setAttribute("for", "phone");
//     const input2 = document.createElement("input");
//     input2.setAttribute("id", "phone");
//     input2.setAttribute("name", "phone");
//     input2.setAttribute("placeholder", "phone");
//     //
//     const label3 = document.createElement("label");
//     label3.setAttribute("for", "email");
//     const input3 = document.createElement("input");
//     input3.setAttribute("id", "email");
//     input3.setAttribute("name", "email");
//     input3.setAttribute("placeholder", "email");
//     //
//     const label4 = document.createElement("label");
//     label4.setAttribute("for", "comment");
//     const input4 = document.createElement("textarea");
//     input4.setAttribute("id", "comment");
//     input4.setAttribute("name", "comment");
//     input4.setAttribute("placeholder", "How can we serve you?");
//     const fields = [label, input, label2, input2, label3, input3, label4, input4];
//     appendChildren(form, fields);
//     return form;
//   };
