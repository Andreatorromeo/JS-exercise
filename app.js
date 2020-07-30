// CREARE UN ELEMENTO, DARGLI UNA CLASSE, DARGLI UN TESTO, UNIRLO AL PARENT
const ulList = document.querySelector(".list_wrapper");
const button = document.querySelector("#cta");
const nrItem = document.querySelector(".nr_item b");

const items = ulList.children;

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  const textNode = document.createTextNode("cosa");
  newItem.appendChild(textNode);
  ulList.appendChild(newItem);
  nrItem.innerText = items.length;
});
