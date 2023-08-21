import "./style.css";
import headerBG from "./assets/images/Enchiladas.jpg";

const loadPage = () => {
  const content = document.querySelector("#content");
  const element = document.createElement("div");

  document.body.appendChild(element);
  element.classList.add("content2");
  element.textContent = "element";
  content.textContent = "Content";
  content.classList.add("hello");
  const headerImg = new Image();
  headerImg.src = headerBG;
  content.appendChild(headerImg);
};

export default loadPage;
