function createDiv() {
    const getBody = document.querySelector("body");
    const divNew = document.createElement("div");
    divNew.setAttribute("id", "app");

    getBody.appendChild(divNew);
  }