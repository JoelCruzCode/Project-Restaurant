const loadPage = () => {
  const content = document.querySelector("#content");
  const element = document.createElement("div");

  document.body.appendChild(element);
  element.classList.add("content2");
  element.textContent = "element";
  content.textContent = "Content";
};

export default loadPage;
