function createBox() {
    const divContenedor = document.querySelector("#app");
    const box = document.createElement("input");
    box.setAttribute("id", "cajaNum");
    divContenedor.appendChild(box);
  }
  function createButton() {
    const divContenedor = document.querySelector("#app");
    const box = document.createElement("button");
    box.setAttribute("id", "button");
    box.textContent = "Go!";
    divContenedor.appendChild(box);
  }