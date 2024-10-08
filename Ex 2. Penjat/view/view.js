function createDiv() {
    const getBody = document.querySelector("body");
    const divNew = document.createElement("div");
    divNew.setAttribute("id", "app");

    getBody.appendChild(divNew);
  }
  // create tag img
  // only i need one tag img, later i will change this img with src
function createImg(){
    const getDivApp = document.querySelector("#app");
    const imgNew = document.createElement("img");
    imgNew.setAttribute("id", "photo");
    getDivApp.appendChild(imgNew);
}

// we put first photo and we make this funtion reusable
function putImg(numPhoto) {
    const getImg = document.querySelector("#photo");
    getImg.src = "./assests/img/" + numPhoto + ".PNG";
    // la imagen no es text-align
    getImg.style.display = "block";
    getImg.style.margin = "0 auto";
    
  }

  function createContendorDiv() {
    const getBody = document.querySelector("body");
    const divNew = document.createElement("div");
    divNew.setAttribute("id", "contendor");
    getBody.appendChild(divNew);
  }

  function createAllDivForEachLetter(getDivContendor) {
    for (let i = 0; i < alfabeto.length; i++) {
      const divSon = document.createElement("button");
      divSon.setAttribute("id", "hijo" + i);
      const letra = alfabeto[i];
    
      console.log(letra.letraAlfrabeto);

      divSon.textContent = letra.letraAlfrabeto;
      getDivContendor.appendChild(divSon);
      // change color button!!
      divSon.style.background = "rgb(101, 101, 101)";
      // divSon.style.margin = "5px";
    }
  }

  function styleDefault(getDivContendor) {
    getDivContendor.style.display = "flex";
    // info: https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox
    getDivContendor.style.justifyContent = "space-around";
    getDivContendor.style.width = "80%";
    getDivContendor.style.margin = "100px auto";
    // cambiar el color de un solo boton
    document.querySelector("#hijo2").style.background =
      "rgb(101, 10, 101)";
  }

  function createWordsToGuess(getDivContendor) {
    const arrayWords = ["Horno", "Mundo", "Classe", "Ordenador"];
    const newParagraph = document.createElement("p");
    newParagraph.setAttribute("id","palabaElegida");
    // Estilo
    let palabraAdivinar = arrayWords[3];
    newParagraph.textContent = arrayWords[3];
    newParagraph.style.textAlign = "center";
    newParagraph.style.fontSize = "35px";
    // add to our html
    const getDivApp = document.querySelector("#app");
    getDivApp.appendChild(newParagraph);
    return palabraAdivinar;
  }

  function transformWordsToUnderscore(palabraAdivinar) {
    // funtion to count how many letter have this word
    // Variable String have the method length
    // debugger;
    // console.log(palabraAdivinar.length);
    let allLettersAreUnderscore = "";
    for (let i = 0; i < palabraAdivinar.length; i++) {
      allLettersAreUnderscore = allLettersAreUnderscore + "_ ";
    }
    const newParagraph = document.querySelector("#palabaElegida");
    newParagraph.textContent = allLettersAreUnderscore;
  }

  