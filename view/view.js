function createBox() {
    const divContenedor = document.querySelector("#app");
    const box = document.createElement("input");
    box.setAttribute("id", "cajaNum");
    // this way, it's only possible to put a number
    box.setAttribute("type", "number");
    box.setAttribute("min", "1");

    // 2147483647
   
    divContenedor.appendChild(box);
  }
  function createButton() {
    const divContenedor = document.querySelector("#app");
    const box = document.createElement("button");
    box.setAttribute("id", "button");
    box.textContent = "Go!";
    divContenedor.appendChild(box);
  }

  function createParrafo() {
    const divContenedor = document.querySelector("#app");
    const parrafo = document.createElement("p");
    parrafo.setAttribute("id", "parrafo");
    parrafo.textContent = "Cronómetro!";
    divContenedor.appendChild(parrafo);
  }

 

  function getValueFromBox() {
    const getValue = document.querySelector("#cajaNum").value;
    return getValue;
  }

  function editParrafo(valueBox) {
    const getParrafo = document.querySelector("#parrafo");
    if (valueBox == "") {
      getParrafo.textContent = "Casilla vacia, introduce un número";
      return;
    }
    if (isNumValid(valueBox)) {
      getParrafo.textContent = valueBox;
    } else {
      getParrafo.textContent = "Error";
    }
  }